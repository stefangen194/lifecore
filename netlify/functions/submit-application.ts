import type { Context } from '@netlify/functions';

// Career application handler. The browser used to POST a FormData (incl. the CV PDF)
// straight to a hardcoded Make.com webhook. That webhook now lives in a server-only
// env var and every submission is gated here: Turnstile is verified, inputs are
// validated, the file is checked for real PDF magic bytes + size, and only then is
// the payload forwarded. Never trust the client — all checks are repeated server-side.

const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB
const PDF_MAGIC = [0x25, 0x50, 0x44, 0x46]; // "%PDF"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-()]{7,20}$/;

// Best-effort in-memory rate limit. Lives only for the lifetime of a warm container,
// so it is not a hard guarantee — it blunts rapid bursts from a single IP. Turnstile
// is the real anti-bot control.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export default async (req: Request, context: Context): Promise<Response> => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed' });

  const ip = context.ip || req.headers.get('x-nf-client-connection-ip') || 'unknown';
  if (rateLimited(ip)) return json(429, { error: 'Prea multe cereri. Încearcă din nou mai târziu.' });

  const webhook = process.env.MAKE_WEBHOOK_URL;
  if (!webhook) return json(500, { error: 'Server misconfigured' });

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return json(400, { error: 'Cerere invalidă' });
  }

  // Turnstile (anti-bot / CSRF). Token is produced by the widget on the client.
  const token = String(form.get('cf-turnstile-response') ?? '');
  if (!token || !(await verifyTurnstile(token, ip))) {
    return json(403, { error: 'Verificarea anti-bot a eșuat. Reîncarcă pagina.' });
  }

  // --- Field validation ---
  const name = String(form.get('name') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const phone = String(form.get('phone') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();

  if (name.length < 1 || name.length > 120) return json(400, { error: 'Nume invalid' });
  if (email.length > 254 || !EMAIL_RE.test(email)) return json(400, { error: 'Email invalid' });
  if (!PHONE_RE.test(phone)) return json(400, { error: 'Telefon invalid' });
  if (message.length > 2000) return json(400, { error: 'Mesaj prea lung' });

  // --- File validation (size + real PDF magic bytes; type/extension are spoofable) ---
  const cv = form.get('cv');
  if (!(cv instanceof File)) return json(400, { error: 'CV-ul lipsește' });
  if (cv.size === 0 || cv.size > MAX_FILE_BYTES) return json(400, { error: 'CV-ul trebuie să fie un PDF de maxim 5MB' });

  const head = new Uint8Array(await cv.slice(0, 4).arrayBuffer());
  const isPdf = PDF_MAGIC.every((b, i) => head[i] === b);
  if (!isPdf) return json(400, { error: 'Fișierul nu este un PDF valid' });

  // --- Forward to Make.com (URL stays server-side) ---
  const safeName = cv.name.replace(/[^\w.\- ]+/g, '_').slice(0, 120) || 'cv.pdf';
  const outbound = new FormData();
  outbound.append('name', name);
  outbound.append('email', email);
  outbound.append('phone', phone);
  outbound.append('message', message);
  outbound.append('cv', cv, safeName);

  try {
    const res = await fetch(webhook, { method: 'POST', body: outbound });
    if (!res.ok) return json(502, { error: 'Trimiterea a eșuat. Încearcă din nou.' });
  } catch {
    return json(502, { error: 'Trimiterea a eșuat. Încearcă din nou.' });
  }

  return json(200, { ok: true });
};

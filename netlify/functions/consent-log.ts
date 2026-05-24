import { getStore } from '@netlify/blobs';
import type { Context } from '@netlify/functions';

// GDPR consent audit trail. The client only sends the decision + policy version;
// IP, User-Agent and timestamp are derived server-side (never trusted from the body)
// and the record is appended to a Netlify Blobs store as durable proof of consent.

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

export default async (req: Request, context: Context): Promise<Response> => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed' });

  let body: { decision?: unknown; policyVersion?: unknown };
  try {
    body = await req.json();
  } catch {
    return json(400, { error: 'Invalid body' });
  }

  const decision = body.decision;
  if (decision !== 'accepted' && decision !== 'declined') {
    return json(400, { error: 'Invalid decision' });
  }
  const policyVersion = typeof body.policyVersion === 'string' ? body.policyVersion : 'unknown';

  const record = {
    decision,
    policyVersion,
    timestamp: new Date().toISOString(),
    ip: context.ip || req.headers.get('x-nf-client-connection-ip') || 'unknown',
    userAgent: req.headers.get('user-agent') || 'unknown',
  };

  try {
    const store = getStore('consent-log');
    const key = `${record.timestamp}-${crypto.randomUUID()}`;
    await store.setJSON(key, record);
  } catch {
    // Don't fail the user's flow if logging is unavailable; consent still applies client-side.
    return json(200, { ok: true, logged: false });
  }

  return json(200, { ok: true, logged: true });
};

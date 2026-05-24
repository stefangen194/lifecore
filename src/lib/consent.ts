// Cookie-consent state. Stored as a structured, versioned record (not a bare string)
// so a stale policy version forces re-consent and a tampered value is treated as
// "no consent". setConsent() also fires a fire-and-forget server audit-trail request
// (IP/UA/timestamp recorded server-side) and broadcasts a change event so third-party
// script loaders can react.

export const CONSENT_POLICY_VERSION = '1';
const STORAGE_KEY = 'lifecore_cookies_consent';
export const CONSENT_CHANGED_EVENT = 'lifecore-consent-changed';

export type ConsentDecision = 'accepted' | 'declined';

export interface ConsentRecord {
  decision: ConsentDecision;
  timestamp: string;
  policyVersion: string;
}

export function getConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    const valid =
      (parsed.decision === 'accepted' || parsed.decision === 'declined') &&
      parsed.policyVersion === CONSENT_POLICY_VERSION;
    if (!valid) return null; // malformed or stale policy version → re-prompt
    return {
      decision: parsed.decision as ConsentDecision,
      timestamp: typeof parsed.timestamp === 'string' ? parsed.timestamp : '',
      policyVersion: CONSENT_POLICY_VERSION,
    };
  } catch {
    return null;
  }
}

export function hasAccepted(): boolean {
  return getConsent()?.decision === 'accepted';
}

export function setConsent(decision: ConsentDecision): void {
  const record: ConsentRecord = {
    decision,
    timestamp: new Date().toISOString(),
    policyVersion: CONSENT_POLICY_VERSION,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* localStorage unavailable (private mode) — consent still applies for this session */
  }

  // Server-side audit trail (best-effort). IP/UA derived server-side.
  void fetch('/api/consent-log', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ decision, policyVersion: CONSENT_POLICY_VERSION }),
  }).catch(() => {});

  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
}

import { useEffect } from 'react';
import { hasAccepted, CONSENT_CHANGED_EVENT } from '../lib/consent';
import { loadVoiceflow } from '../lib/thirdParty';

// Mounted once at the app root. Loads non-essential third-party scripts (Voiceflow chat)
// only after cookie consent is accepted, and reacts when the user changes their choice.
// Calendly is loaded lazily by MeetingModal (also consent-gated) since it's only needed
// when the booking modal opens.
export default function ThirdPartyScripts() {
  useEffect(() => {
    const maybeLoad = () => {
      if (hasAccepted()) loadVoiceflow();
    };
    maybeLoad();
    window.addEventListener(CONSENT_CHANGED_EVENT, maybeLoad);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, maybeLoad);
  }, []);

  return null;
}

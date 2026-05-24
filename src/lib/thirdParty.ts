// Third-party script loaders. Previously these ran unconditionally from index.html;
// they now live here as bundled modules (covered by CSP `script-src 'self'`) and are
// only invoked AFTER the user accepts cookies (see ThirdPartyScripts + MeetingModal).

// Public Voiceflow project id (client-side by design; documented as risk-accepted).
const VOICEFLOW_PROJECT_ID = '69b67eabfe9b795a416ff449';

let voiceflowRequested = false;

export function loadVoiceflow(): void {
  if (voiceflowRequested || document.getElementById('voiceflow-script')) return;
  voiceflowRequested = true;

  const v = document.createElement('script');
  v.id = 'voiceflow-script';
  v.type = 'text/javascript';
  v.onload = () => {
    const w = window as unknown as {
      voiceflow?: { chat: { load: (cfg: unknown) => void } };
    };
    w.voiceflow?.chat.load({
      verify: { projectID: VOICEFLOW_PROJECT_ID },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      voice: { url: 'https://runtime-api.voiceflow.com' },
    });
  };
  v.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
  document.body.appendChild(v);
}

export function loadCalendly(): void {
  if (document.getElementById('calendly-script')) return;
  const script = document.createElement('script');
  script.id = 'calendly-script';
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.head.appendChild(script);
}

import React, { useState, useEffect, useRef } from 'react';
import { Upload, Play, Users, TrendingUp, Award, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import TermsModal from './TermsModal';
import NotificationModal from './NotificationModal';
import { Section, Container, Eyebrow, Button, InputField } from './ui';

const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-()]{7,20}$/;
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

const Cariera: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<{ variant: 'success' | 'error'; title: string; message: string } | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const previewRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      acceptFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      acceptFile(e.target.files[0]);
    }
  };

  // Client-side gate (UX only — the server re-validates type, magic bytes and size).
  const acceptFile = (file: File) => {
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      setNotice({ variant: 'error', title: 'Fișier invalid', message: 'Te rugăm să încarci doar fișiere PDF' });
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setNotice({ variant: 'error', title: 'Fișier prea mare', message: 'Fișierul depășește limita de 5MB' });
      return;
    }
    setUploadedFile(file);
  };

  const closeModal = () => {
    const videoElement = document.getElementById(`modal-video-${playingVideo}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.pause();
    }
    setPlayingVideo(null);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && playingVideo !== null) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [playingVideo]);

  useEffect(() => {
    if (playingVideo !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [playingVideo]);

  const videoSlots = [
    { id: 1, title: 'Pot lucra part-time?', consultant: 'Diana Cristina Dumitrescu', videoUrl: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mD0Fw7o489BfF7TwAVoxr4zJcMSlpyXD3q6ZaO', startTime: 0, coverImage: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDHf32DARSI7VJzYR3jMQgn8cNyqbm5kur2flD' },
    { id: 2, title: 'Reconversie Profesională', consultant: 'Florin Dragoș Vasile', videoUrl: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDqZuZLD0CD4Xa73z0ndLVyWMt2HOTF1huiQCP', startTime: 3, coverImage: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDvCueMuXhRUTdflvZPFNw0k5zxJ8MABaLOj3H' },
    { id: 3, title: 'De ce consultanță și viitorul în această activitate', consultant: 'Bebe Dan Olteanu', videoUrl: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDzuTMIUaxlkR4VY17q5A3tZMbsr9vjfhcGC6J', startTime: 0, coverImage: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDw023eAcXkDGTNR981htiPbWsfM3zdV6KQe0E' },
    { id: 4, title: 'Dezvoltare personală și profesională', consultant: 'Ștefănel Genunche', videoUrl: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDue0ZgV5paoLCXtGUdYQyAxsSrKJHTE03kM74', startTime: 3, coverImage: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDxsZFVtXb0vMdUt5pysmYonBaFIfwKh9QSgON' },
    { id: 5, title: 'Succesele și provocările', consultant: 'Laura Denisia Negoi', videoUrl: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDWiSrLVqEZ5eug94mnIbyza2Ux7QMsoJkcPFV', startTime: 0, coverImage: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mD3GbqR8oxJXv2CO9PfY6ualImeKViBTnAs4LS' },
    { id: 6, title: 'Cum arată o zi', consultant: 'Diana Ioana Ionescu', videoUrl: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDK6d351YMOz3QDlNv2uT1oBSGsWRjybhg8wP6', startTime: 0, coverImage: 'https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDHVzzq4kRSI7VJzYR3jMQgn8cNyqbm5kur2fl' },
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Creștere Profesională', desc: 'Dezvoltare continuă prin training-uri și certificări' },
    { icon: Users, title: 'Echipă Unită', desc: 'Lucrezi alături de profesioniști pasionați' },
    { icon: Award, title: 'Recunoaștere', desc: 'Performanțele tale sunt apreciate și recompensate' },
    { icon: Heart, title: 'Impact Real', desc: 'Ajuți oamenii să-și atingă obiectivele financiare' },
  ];

  const isFormComplete =
    formData.name.trim() !== '' &&
    EMAIL_RE.test(formData.email.trim()) &&
    PHONE_RE.test(formData.phone.trim()) &&
    uploadedFile !== null &&
    termsAccepted &&
    turnstileToken !== '';

  const handleFinalizare = async () => {
    if (!isFormComplete || submitting) return;

    setSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('cf-turnstile-response', turnstileToken);
      if (uploadedFile) {
        formDataToSend.append('cv', uploadedFile);
      }

      // Routed through a Netlify Function (/api/*) that verifies Turnstile, re-validates
      // input and forwards to the Make.com webhook — the webhook URL is no longer in the client.
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setNotice({ variant: 'success', title: 'Trimis cu succes!', message: 'Aplicația ta a fost trimisă cu succes!' });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setUploadedFile(null);
        setTermsAccepted(false);
      } else {
        const data = await response.json().catch(() => ({}));
        setNotice({ variant: 'error', title: 'A apărut o eroare', message: data.error || 'Te rugăm să încerci din nou.' });
      }
    } catch {
      setNotice({ variant: 'error', title: 'A apărut o eroare', message: 'Te rugăm să încerci din nou.' });
    } finally {
      // Turnstile tokens are single-use — reset so the next submit gets a fresh one.
      setTurnstileToken('');
      turnstileRef.current?.reset();
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-paper">
      {/* Video Modal */}
      {playingVideo !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative z-10"
            style={{ width: 'min(90vh * 9 / 16, 90vw)', aspectRatio: '9 / 16' }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              id={`modal-video-${playingVideo}`}
              className="w-full h-full object-cover bg-black rounded-lg pointer-events-auto"
              poster={videoSlots.find((v) => v.id === playingVideo)?.coverImage}
              controls
              controlsList="nodownload nofullscreen"
              autoPlay
              disablePictureInPicture
              onClick={(e) => {
                e.stopPropagation();
                const videoElement = e.currentTarget;
                if (videoElement.paused) {
                  videoElement.play();
                } else {
                  videoElement.pause();
                }
              }}
              onLoadedMetadata={(e) => {
                const videoElement = e.currentTarget;
                const video = videoSlots.find((v) => v.id === playingVideo);
                if (video && video.startTime) {
                  videoElement.currentTime = 0;
                }
              }}
            >
              <source src={videoSlots.find((v) => v.id === playingVideo)?.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Hero */}
      <Section tone="paper-lo" className="pt-12 pb-16 md:pt-16 md:pb-20 text-center">
        <Container wide>
          <Eyebrow tone="gold" dot className="mb-6 justify-center">Carieră</Eyebrow>
          <h1 className="font-display text-5xl md:text-7xl leading-none mb-6">
            Alătură-te <span className="italic text-gold-700">echipei</span> noastre.
          </h1>
          <p className="text-lg text-ink-700 mb-10 max-w-3xl mx-auto leading-relaxed">
            Construiește o carieră de succes în consultanța financiară. Ajută oamenii să-și atingă obiectivele
            și dezvoltă-te profesional într-un mediu dinamic și motivant.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="gold" size="lg" href="#upload-cv">Aplică acum</Button>
            <Button variant="ghost" size="lg" href="#testimonials">Ascultă poveștile noastre</Button>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section tone="paper">
        <Container wide>
          <div className="text-center mb-12">
            <Eyebrow tone="gold" dot className="mb-4 justify-center">Avantaje</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl leading-none">De ce să alegi cariera cu noi?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="bg-paper-hi border border-ink-300 rounded-lg p-8 text-center">
                  <span className="grid place-items-center w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/15 border border-gold-500/40">
                    <Icon className="text-gold-500" size={28} />
                  </span>
                  <h3 className="font-display text-xl mb-2">{benefit.title}</h3>
                  <p className="text-sm text-ink-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Video testimonials */}
      <Section tone="paper-lo" id="testimonials">
        <Container wide>
          <div className="text-center mb-12">
            <Eyebrow tone="gold" dot className="mb-4 justify-center">Povești</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl leading-none mb-3">Poveștile consultanților noștri</h2>
            <p className="text-ink-600">Ascultă experiențele reale ale colegilor tăi viitori.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoSlots.map((video) => (
              <div key={video.id} className="bg-paper-hi border border-ink-300 rounded-xl overflow-hidden">
                <div
                  className="relative bg-paper-lo aspect-[9/16]"
                  onMouseEnter={() => {
                    const v = previewRefs.current[video.id];
                    if (v) {
                      v.currentTime = video.startTime || 0;
                      v.play().catch(() => {});
                    }
                  }}
                  onMouseLeave={() => {
                    const v = previewRefs.current[video.id];
                    if (v) {
                      v.pause();
                      v.currentTime = video.startTime || 0;
                    }
                  }}
                >
                  <video
                    ref={(el) => { previewRefs.current[video.id] = el; }}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={`${video.videoUrl}#t=${video.startTime || 0.1}`}
                    poster={video.coverImage}
                    preload="metadata"
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button
                      onClick={() => setPlayingVideo(video.id)}
                      className="bg-gold-500 hover:bg-gold-400 rounded-full p-5 transition-all duration-300 hover:scale-110 shadow-lg"
                      aria-label={`Redă: ${video.title}`}
                    >
                      <Play className="w-8 h-8 text-[#0B0B0C] fill-[#0B0B0C]" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/85 to-transparent">
                    <div className="text-gold-500 font-display text-lg leading-tight">{video.title}</div>
                    <div className="text-gold-500/75 text-xs mt-1">{video.consultant}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CV Upload */}
      <Section tone="paper" id="upload-cv">
        <Container wide className="max-w-4xl">
          <div className="text-center mb-10">
            <Eyebrow tone="gold" dot className="mb-4 justify-center">Aplică</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl leading-none mb-3">Gata să începi?</h2>
            <p className="text-ink-600">Încarcă-ți CV-ul și fă primul pas către o carieră de succes.</p>
          </div>

          <div className="bg-paper-hi border border-ink-300 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upload area */}
              <div>
                <h3 className="font-display text-2xl mb-6">Încarcă CV-ul</h3>
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                    dragActive
                      ? 'border-gold-500 bg-gold-500/10'
                      : uploadedFile
                        ? 'border-sage bg-sage/10'
                        : 'border-ink-300 hover:border-gold-500 hover:bg-paper-lo'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {uploadedFile ? (
                    <div className="text-sage">
                      <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                      <p className="font-semibold mb-2 text-ink-900">CV încărcat cu succes!</p>
                      <p className="text-sm text-ink-600">{uploadedFile.name}</p>
                    </div>
                  ) : (
                    <div className="text-ink-600">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-gold-500" />
                      <p className="font-semibold mb-2 text-ink-900">Trage și lasă CV-ul aici</p>
                      <p className="text-sm mb-4">sau</p>
                      <label className="btn btn-gold btn-sm cursor-pointer inline-flex">
                        Selectează fișierul
                        <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
                      </label>
                      <p className="text-xs text-ink-500 mt-4">Doar fișiere PDF (max 5MB)</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact form */}
              <div>
                <h3 className="font-display text-2xl mb-6">Informații de contact</h3>
                <form className="space-y-4">
                  <InputField label="Nume Complet *" type="text" required value={formData.name} onChange={(v) => setFormData({ ...formData, name: v })} placeholder="Ion Popescu" />
                  <InputField label="Email *" type="email" required value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} placeholder="ion.popescu@email.com" />
                  <InputField label="Telefon *" type="tel" required value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} placeholder="+40 XXX XXX XXX" />
                  <div>
                    <label className="block text-sm font-medium text-ink-700 mb-2">Mesaj (opțional)</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-paper border border-ink-300 rounded-lg text-ink-900 placeholder:text-ink-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
                      placeholder="Spune-ne de ce vrei să te alături echipei noastre..."
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-gold-500 border-ink-300 rounded"
                    />
                    <label htmlFor="terms" className="text-sm text-ink-700">
                      Accept{' '}
                      <button type="button" onClick={() => setShowTermsModal(true)} className="text-gold-500 hover:text-gold-400 underline font-medium">
                        Termenii și Condițiile
                      </button>
                    </label>
                  </div>
                </form>
              </div>
            </div>

            {TURNSTILE_SITE_KEY ? (
              <div className="mt-6 flex justify-center">
                <Turnstile
                  ref={turnstileRef}
                  siteKey={TURNSTILE_SITE_KEY}
                  onSuccess={setTurnstileToken}
                  onExpire={() => setTurnstileToken('')}
                  onError={() => setTurnstileToken('')}
                  options={{ theme: 'dark' }}
                />
              </div>
            ) : (
              <p className="mt-6 text-center text-xs text-clay">
                Verificarea anti-bot nu este configurată (VITE_TURNSTILE_SITE_KEY lipsește).
              </p>
            )}

            <Button variant="gold" onClick={handleFinalizare} disabled={!isFormComplete || submitting} className="w-full justify-center mt-6">
              {submitting ? 'Se trimite…' : 'Finalizare'}
              {!submitting && <ArrowRight className="ml-1 w-5 h-5" />}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section tone="paper-lo" className="text-center">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl leading-none mb-4">Ai întrebări?</h2>
          <p className="text-lg text-ink-600 mb-8">
            Echipa noastră este gata să răspundă la toate întrebările tale despre carieră.
          </p>
          <Button variant="gold" href="mailto:cariera.lifecore@outlook.com">
            Trimite-ne un email
          </Button>
        </Container>
      </Section>

      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />

      <NotificationModal
        isOpen={notice !== null}
        variant={notice?.variant ?? 'success'}
        title={notice?.title ?? ''}
        message={notice?.message ?? ''}
        onClose={() => setNotice(null)}
      />
    </div>
  );
};

export default Cariera;

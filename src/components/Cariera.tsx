import React, { useState, useEffect } from 'react';
import { Upload, Play, Users, TrendingUp, Award, Heart, CheckCircle, ArrowRight, X } from 'lucide-react';
import TermsModal from './TermsModal';

const Cariera: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf" || file.name.endsWith('.pdf')) {
        setUploadedFile(file);
      } else {
        alert('Te rugăm să încarci doar fișiere PDF');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf" || file.name.endsWith('.pdf')) {
        setUploadedFile(file);
      } else {
        alert('Te rugăm să încarci doar fișiere PDF');
      }
    }
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
    { id: 1, title: "Pot lucra part-time?", consultant: "Diana Cristina Dumitrescu", videoUrl: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mD0Fw7o489BfF7TwAVoxr4zJcMSlpyXD3q6ZaO", startTime: 0, coverImage: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDHf32DARSI7VJzYR3jMQgn8cNyqbm5kur2flD" },
    { id: 2, title: "Reconversie Profesională", consultant: "Florin Dragoș Vasile", videoUrl: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDqZuZLD0CD4Xa73z0ndLVyWMt2HOTF1huiQCP", startTime: 3, coverImage: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDvCueMuXhRUTdflvZPFNw0k5zxJ8MABaLOj3H" },
    { id: 3, title: "De ce consultanță și viitorul în această activitate", consultant: "Bebe Dan Olteanu", videoUrl: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDzuTMIUaxlkR4VY17q5A3tZMbsr9vjfhcGC6J", startTime: 0, coverImage: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDw023eAcXkDGTNR981htiPbWsfM3zdV6KQe0E" },
    { id: 4, title: "Dezvoltare personală și profesională", consultant: "Ștefănel Genunche", videoUrl: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDue0ZgV5paoLCXtGUdYQyAxsSrKJHTE03kM74", startTime: 3, coverImage: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDxsZFVtXb0vMdUt5pysmYonBaFIfwKh9QSgON" },
    { id: 5, title: "Succesele și provocările", consultant: "Laura Denisia Negoi", videoUrl: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDWiSrLVqEZ5eug94mnIbyza2Ux7QMsoJkcPFV", startTime: 0, coverImage: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mD3GbqR8oxJXv2CO9PfY6ualImeKViBTnAs4LS" },
    { id: 6, title: "Cum arată o zi", consultant: "Diana Ioana Ionescu", videoUrl: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDK6d351YMOz3QDlNv2uT1oBSGsWRjybhg8wP6", startTime: 0, coverImage: "https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDHVzzq4kRSI7VJzYR3jMQgn8cNyqbm5kur2fl" }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Creștere Profesională", desc: "Dezvoltare continuă prin training-uri și certificări" },
    { icon: Users, title: "Echipă Unită", desc: "Lucrezi alături de profesioniști pasionați" },
    { icon: Award, title: "Recunoaștere", desc: "Performanțele tale sunt apreciate și recompensate" },
    { icon: Heart, title: "Impact Real", desc: "Ajuți oamenii să-și atingă obiectivele financiare" }
  ];

  const isFormComplete = formData.name.trim() !== '' &&
                         formData.email.trim() !== '' &&
                         formData.phone.trim() !== '' &&
                         uploadedFile !== null &&
                         termsAccepted;

  const handleFinalizare = async () => {
    if (!isFormComplete) return;

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      if (uploadedFile) {
        formDataToSend.append('cv', uploadedFile);
      }

      const response = await fetch('https://hook.eu1.make.com/xnwdxoukkmxdvrah4n8do2jq6bthp85t', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Aplicația ta a fost trimisă cu succes!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setUploadedFile(null);
        setTermsAccepted(false);
      } else {
        alert('A apărut o eroare. Te rugăm să încerci din nou.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('A apărut o eroare. Te rugăm să încerci din nou.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Video Modal */}
      {playingVideo !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div
            className="relative z-10"
            style={{
              width: 'min(90vh * 9 / 16, 90vw)',
              aspectRatio: '9 / 16'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              id={`modal-video-${playingVideo}`}
              className="w-full h-full object-cover bg-black rounded-lg pointer-events-auto"
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
                const video = videoSlots.find(v => v.id === playingVideo);
                if (video && video.startTime) {
                  videoElement.currentTime = 0;
                }
              }}
            >
              <source
                src={videoSlots.find(v => v.id === playingVideo)?.videoUrl}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Alătură-te Echipei Noastre</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Construiește o carieră de succes în consultanța financiară. Ajută oamenii să-și atingă 
              obiectivele financiare și dezvoltă-te profesional într-un mediu dinamic și motivant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#upload-cv" className="bg-white text-blue-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-xl">
                Aplică Acum
              </a>
              <a href="#testimonials" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-300 font-bold text-lg transform hover:scale-105">
                Ascultă Poveștile Noastre
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">De ce să alegi cariera cu noi?</h2>
            <p className="text-lg text-gray-600">Descoperă avantajele unei cariere în consultanța financiară</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <IconComponent className="text-blue-600 w-8 h-8 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Poveștile Consultanților Noștri</h2>
            <p className="text-lg text-gray-600">Ascultă experiențele reale ale colegilor tăi viitori</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoSlots.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 aspect-[9/16]">
                  {video.videoUrl ? (
                    <>
                      {video.coverImage && (
                        <img
                          src={video.coverImage}
                          alt="Cover"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                      {!video.coverImage && (
                        <video
                          id={`video-${video.id}`}
                          className="w-full h-full object-cover"
                          preload="metadata"
                          onLoadedMetadata={(e) => {
                            const videoElement = e.currentTarget;
                            if (video.startTime) {
                              videoElement.currentTime = video.startTime;
                            }
                          }}
                        >
                          <source src={`${video.videoUrl}#t=${video.startTime || 0}`} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}

                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => setPlayingVideo(video.id)}
                          className="bg-white/90 hover:bg-white rounded-full p-6 transition-all duration-300 transform hover:scale-110 shadow-xl"
                        >
                          <Play className="w-12 h-12 text-blue-600 fill-blue-600" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-white">
                        <div className="bg-white/20 rounded-full p-6 mb-4">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-sm opacity-75">Video va fi disponibil în curând</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CV Upload Section */}
      <div id="upload-cv" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Gata să Începi?</h2>
            <p className="text-xl text-blue-100">Încarcă-ți CV-ul și fă primul pas către o carieră de succes</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upload Area */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Încarcă CV-ul</h3>
                
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                    dragActive 
                      ? 'border-blue-500 bg-blue-50' 
                      : uploadedFile 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {uploadedFile ? (
                    <div className="text-green-600">
                      <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                      <p className="font-semibold mb-2">CV încărcat cu succes!</p>
                      <p className="text-sm text-gray-600">{uploadedFile.name}</p>
                    </div>
                  ) : (
                    <div className="text-gray-600">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                      <p className="font-semibold mb-2">Trage și lasă CV-ul aici</p>
                      <p className="text-sm mb-4">sau</p>
                      <label className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer inline-block">
                        Selectează Fișierul
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      <p className="text-xs text-gray-500 mt-4">Doar fișiere PDF (max 5MB)</p>
                    </div>
                  )}
                </div>
                
              </div>
              
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informații de Contact</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nume Complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ion Popescu"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="ion.popescu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+40 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj (opțional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Spune-ne de ce vrei să te alături echipei noastre..."
                    ></textarea>
                  </div>

                  <div className="mt-6 flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                      Accept{' '}
                      <button
                        type="button"
                        onClick={() => setShowTermsModal(true)}
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Termenii și Condițiile
                      </button>
                    </label>
                  </div>
                </form>
              </div>
            </div>

            <button
              onClick={handleFinalizare}
              disabled={!isFormComplete}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg mt-8 flex items-center justify-center transition-all duration-300 ${
                isFormComplete
                  ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer transform hover:scale-105 shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Finalizare
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ai întrebări?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Echipa noastră este gata să răspundă la toate întrebările tale despre carieră.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:cariera.lifecore@outlook.com" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Trimite-ne un email
            </a>
          </div>
        </div>
      </div>

      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
    </div>
  );
};

export default Cariera;
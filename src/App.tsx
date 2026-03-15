import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Breadcrumbs from './components/Breadcrumbs';
import LocalBusinessSchema from './components/seo/LocalBusinessSchema';
import CineSuntem from './components/CineSuntem';
import Contact from './components/Contact';
import Concepte from './components/Concepte';
import Buget from './components/tools/Buget';
import DobandaCapitalizata from './components/tools/DobandaCapitalizata';
import CalculatorCredite from './components/tools/Credite';
import CalculatorPensie from './components/tools/Pensie';
import InflatieDepreciere from './components/tools/InflatieDepreciere';
import Maslow from './components/Maslow';
import Echipa from './components/Echipa';
import CalculatorCopil from './components/tools/Copil';
import OutOfOffice from './components/OutOfOffice';
import Cariera from './components/Cariera';
import RetragereActivitate from './components/concepte/RetragereActivitate';
import PlanCopil from './components/concepte/PlanCopil';
import AchizitieCredit from './components/concepte/AchizitieCredit';
import Investitii from './components/concepte/Investitii';
import Sanatate from './components/concepte/Sanatate';
import ProtectieBunuri from './components/concepte/ProtectieBunuri';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative flex-1 w-full bg-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="auto"
      >
        <source src="https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDH8nSK3RSI7VJzYR3jMQgn8cNyqbm5kur2flD" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={toggleMute}
        className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm z-20"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </div>
  );
}

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Breadcrumbs />
      {children}
    </div>
  );
}

function AppContent() {
  const [isOfficeOpen, setIsOfficeOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={isHomePage ? 'h-screen flex flex-col overflow-hidden' : ''}>
      <LocalBusinessSchema />
      <ScrollToTop />
      <Navigation isOfficeOpen={isOfficeOpen} setIsOfficeOpen={setIsOfficeOpen} isHomePage={isHomePage} />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cine-suntem" element={<PageLayout><CineSuntem /><Footer /></PageLayout>} />
        <Route path="/contact" element={<PageLayout><Contact /><Footer /></PageLayout>} />
        <Route path="/concepte" element={<PageLayout><Concepte /><Footer /></PageLayout>} />
        <Route path="/buget" element={<PageLayout><Buget /><Footer /></PageLayout>} />
        <Route path="/dobanda-capitalizata" element={<PageLayout><DobandaCapitalizata /><Footer /></PageLayout>} />
        <Route path="/calculator-credite" element={<PageLayout><CalculatorCredite /><Footer /></PageLayout>} />
        <Route path="/calculator-pensie" element={<PageLayout><CalculatorPensie /><Footer /></PageLayout>} />
        <Route path="/calculator-copil" element={<PageLayout><CalculatorCopil /><Footer /></PageLayout>} />
        <Route path="/inflatie-depreciere" element={<PageLayout><InflatieDepreciere /><Footer /></PageLayout>} />
        <Route path="/maslow" element={<PageLayout><Maslow /><Footer /></PageLayout>} />
        <Route path="/echipa" element={<PageLayout><Echipa /><Footer /></PageLayout>} />
        <Route path="/out-of-office" element={<PageLayout><OutOfOffice /><Footer /></PageLayout>} />
        <Route path="/cariera" element={<PageLayout><Cariera /><Footer /></PageLayout>} />
        <Route path="/retragere-activitate" element={<PageLayout><RetragereActivitate /><Footer /></PageLayout>} />
        <Route path="/plan-copil" element={<PageLayout><PlanCopil /><Footer /></PageLayout>} />
        <Route path="/achizitie-credit" element={<PageLayout><AchizitieCredit /><Footer /></PageLayout>} />
        <Route path="/investitii" element={<PageLayout><Investitii /><Footer /></PageLayout>} />
        <Route path="/sanatate" element={<PageLayout><Sanatate /><Footer /></PageLayout>} />
        <Route path="/protectie-bunuri" element={<PageLayout><ProtectieBunuri /><Footer /></PageLayout>} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
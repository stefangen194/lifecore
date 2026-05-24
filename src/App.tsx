import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import CookieBanner from './components/CookieBanner';
import ThirdPartyScripts from './components/ThirdPartyScripts';
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

  return (
    <div>
      <LocalBusinessSchema />
      <ScrollToTop />
      <Navigation isOfficeOpen={isOfficeOpen} setIsOfficeOpen={setIsOfficeOpen} />
      <CookieBanner />
      <ThirdPartyScripts />
      <Routes>
        <Route path="/" element={<PageLayout><Home /><Footer /></PageLayout>} />
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
        <Route path="*" element={<PageLayout><NotFound /><Footer /></PageLayout>} />
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
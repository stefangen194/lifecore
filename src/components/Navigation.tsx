import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, X, ArrowUpRight } from 'lucide-react';
import MeetingModal from './MeetingModal';
import { Button } from './ui';

interface NavigationProps {
  isOfficeOpen: boolean;
  setIsOfficeOpen: (open: boolean) => void;
  isHomePage?: boolean;
}

// Single source of truth for the "The Core" mega-menu links.
const toolLinks = [
  { to: '/buget', label: 'Buget' },
  { to: '/dobanda-capitalizata', label: 'Dobândă capitalizată' },
  { to: '/calculator-credite', label: 'Calculator credite' },
  { to: '/calculator-pensie', label: 'Calculator pensie' },
  { to: '/calculator-copil', label: 'Calculator plan copil' },
  { to: '/inflatie-depreciere', label: 'Inflație & Depreciere' },
];

const conceptLinks = [
  { to: '/retragere-activitate', label: 'Retragere din activitate' },
  { to: '/plan-copil', label: 'Plan copil' },
  { to: '/achizitie-credit', label: 'Achiziție credit și închidere anticipată' },
  { to: '/investitii', label: 'Investiții' },
  { to: '/sanatate', label: 'Sănătate' },
  { to: '/protectie-bunuri', label: 'Protecție bunuri' },
];

const primaryLinks = [
  { to: '/cine-suntem', label: 'Cine suntem' },
  { to: '/echipa', label: 'Echipa' },
];

const trailingLinks = [
  { to: '/out-of-office', label: 'The Lifestyle' },
  { to: '/cariera', label: 'Carieră' },
  { to: '/contact', label: 'Contact' },
];

const Navigation: React.FC<NavigationProps> = ({ isOfficeOpen, setIsOfficeOpen }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isConcepteOpen, setIsConcepteOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLinkClick = () => {
    setIsOfficeOpen(false);
    setIsMobileMenuOpen(false);
    setIsToolsOpen(false);
    setIsConcepteOpen(false);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOfficeOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setIsOfficeOpen(false), 200);
  };

  const linkClass = (to: string) =>
    `px-3.5 py-2 text-sm transition-colors ${
      pathname === to ? 'text-ink-900 font-medium' : 'text-ink-600 hover:text-ink-900'
    }`;

  return (
    <div
      className="sticky top-0 z-50 bg-paper-lo/80 backdrop-blur-md border-b border-ink-200"
      ref={navRef}
    >
      <div className="container-wide flex items-center justify-between gap-6 h-[72px]">
        <Link
          to="/"
          onClick={handleLinkClick}
          className="inline-flex items-center gap-2.5 text-ink-900 hover:opacity-80 transition-opacity"
        >
          <span
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden"
            style={{ backgroundColor: 'rgb(229 225 214)' }}
          >
            <img src="/logo.png" alt="LifeCore" className="h-full w-full object-contain" />
          </span>
          <span className="font-display tracking-tight leading-none" style={{ fontSize: 26 }}>
            Life<span className="italic text-gold-500">Core</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {primaryLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={handleLinkClick} className={linkClass(l.to)}>
              {l.label}
            </Link>
          ))}

          {/* The Core mega-menu */}
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="flex items-center gap-1 px-3.5 py-2 text-sm text-ink-600 hover:text-ink-900 transition-colors">
              <span>The Core</span>
              <ChevronDown size={14} className={`transition-transform ${isOfficeOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOfficeOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] bg-paper-hi border border-ink-200 rounded-xl shadow-lg p-6 grid grid-cols-2 gap-6"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  <div className="eyebrow mb-3">Tools</div>
                  <div className="flex flex-col">
                    {toolLinks.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={handleLinkClick}
                        className="px-2 py-1.5 text-sm text-ink-700 rounded-md hover:bg-paper-lo hover:text-gold-500 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="eyebrow mb-3">Concepte</div>
                  <div className="flex flex-col">
                    {conceptLinks.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={handleLinkClick}
                        className="px-2 py-1.5 text-sm text-ink-700 rounded-md hover:bg-paper-lo hover:text-gold-500 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  to="/maslow"
                  onClick={handleLinkClick}
                  className="col-span-2 mt-1 pt-4 border-t border-ink-200 flex items-center justify-between text-sm font-medium text-ink-900 hover:text-gold-500 transition-colors"
                >
                  Piramida Bogăției
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            )}
          </div>

          {trailingLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={handleLinkClick} className={linkClass(l.to)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="gold" size="sm" onClick={() => setIsMeetingModalOpen(true)}>
            Cunoaște-ne
            <ArrowUpRight size={14} />
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-ink-900"
          aria-label="Meniu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-paper-hi border-t border-ink-200">
          <div className="px-6 py-4 space-y-1">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={handleLinkClick}
                className="block py-2 text-ink-800 hover:text-gold-500 transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <div className="border-t border-ink-200 pt-2">
              <button
                className="w-full flex items-center justify-between py-2 text-ink-800 hover:text-gold-500 transition-colors"
                onClick={() => setIsOfficeOpen(!isOfficeOpen)}
              >
                <span>The Core</span>
                <ChevronDown size={16} className={`transition-transform ${isOfficeOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOfficeOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <button
                    className="w-full flex items-center justify-between py-2 text-gold-500 font-medium"
                    onClick={() => setIsToolsOpen(!isToolsOpen)}
                  >
                    <span>Tools</span>
                    <ChevronDown size={16} className={`transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isToolsOpen &&
                    toolLinks.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={handleLinkClick}
                        className="block py-2 pl-4 text-sm text-ink-600 hover:text-ink-900 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  <button
                    className="w-full flex items-center justify-between py-2 mt-1 text-gold-500 font-medium"
                    onClick={() => setIsConcepteOpen(!isConcepteOpen)}
                  >
                    <span>Concepte</span>
                    <ChevronDown size={16} className={`transition-transform ${isConcepteOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isConcepteOpen &&
                    conceptLinks.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={handleLinkClick}
                        className="block py-2 pl-4 text-sm text-ink-600 hover:text-ink-900 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  <Link
                    to="/maslow"
                    onClick={handleLinkClick}
                    className="block py-2 mt-1 text-gold-500 font-medium"
                  >
                    Piramida Bogăției
                  </Link>
                </div>
              )}
            </div>

            {trailingLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={handleLinkClick}
                className="block py-2 text-ink-800 hover:text-gold-500 transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <Button
              variant="gold"
              className="w-full justify-center mt-4"
              onClick={() => {
                setIsMeetingModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Cunoaște-ne
            </Button>
          </div>
        </div>
      )}

      <MeetingModal isOpen={isMeetingModalOpen} onClose={() => setIsMeetingModalOpen(false)} />
    </div>
  );
};

export default Navigation;

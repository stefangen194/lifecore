import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, X } from 'lucide-react';
import MeetingModal from './MeetingModal';

interface NavigationProps {
  isOfficeOpen: boolean;
  setIsOfficeOpen: (open: boolean) => void;
  isHomePage?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  isOfficeOpen,
  setIsOfficeOpen,
  isHomePage = false,
}) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isConcepteOpen, setIsConcepteOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const officeDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    closeTimeoutRef.current = setTimeout(() => {
      setIsOfficeOpen(false);
    }, 200);
  };


  return (
    <div className="sticky top-0 z-50 bg-gray-900" ref={navRef}>
      <div className="flex items-center justify-between md:justify-center px-6 py-4 relative">
        <Link
          to="/"
          onClick={handleLinkClick}
          className="md:absolute md:left-6 flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img src="/logo.png" alt="LifeCore" className="h-10" />
          <span className="text-[#C5A059] font-semibold text-xl">LifeCore</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/cine-suntem" onClick={handleLinkClick} className="text-[#C5A059] hover:text-[#d4b477] transition-colors">Cine suntem</Link>
          <Link to="/echipa" onClick={handleLinkClick} className="text-[#C5A059] hover:text-[#d4b477] transition-colors">Echipa</Link>
          <div
            ref={officeDropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center space-x-1 text-[#C5A059] hover:text-[#d4b477] transition-colors"
            >
              <span>The Core</span>
              <ChevronDown size={16} className={`transition-transform ${isOfficeOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOfficeOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative group">
                  <button className="w-full text-left px-4 py-3 text-blue-700 hover:bg-blue-50 hover:text-blue-500 transition-colors font-medium flex items-center justify-between">
                    Tools
                    <ChevronDown size={14} className="transform rotate-[-90deg] group-hover:rotate-0 transition-transform" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                    <Link to="/buget" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Buget
                    </Link>
                    <Link to="/dobanda-capitalizata" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Dobândă capitalizată
                    </Link>
                    <Link to="/calculator-credite" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Calculator credite
                    </Link>
                    <Link to="/calculator-pensie" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Calculator pensie
                    </Link>
                    <Link to="/calculator-copil" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Calculator plan copil
                    </Link>
                    <Link to="/inflatie-depreciere" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Inflație & Depreciere
                    </Link>
                  </div>
                </div>
                <div className="relative group">
                  <button className="w-full text-left px-4 py-3 text-blue-700 hover:bg-blue-50 hover:text-blue-500 transition-colors font-medium flex items-center justify-between">
                    Concepte
                    <ChevronDown size={14} className="transform rotate-[-90deg] group-hover:rotate-0 transition-transform" />
                  </button>
                  <div className="absolute left-full top-0 ml-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                    <Link to="/retragere-activitate" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Retragere din activitate
                    </Link>
                    <Link to="/plan-copil" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Plan copil
                    </Link>
                    <Link to="/achizitie-credit" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Achiziție credit și închidere anticipată
                    </Link>
                    <Link to="/investitii" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Investiții
                    </Link>
                    <Link to="/sanatate" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Sănătate
                    </Link>
                    <Link to="/protectie-bunuri" onClick={handleLinkClick} className="w-full text-left block px-4 py-3 text-blue-600 hover:bg-blue-50 hover:text-blue-500 transition-colors text-sm">
                      Protecție bunuri
                    </Link>
                  </div>
                </div>
                <Link to="/maslow" onClick={handleLinkClick} className="w-full text-left px-4 py-3 text-blue-700 hover:bg-blue-50 hover:text-blue-500 transition-colors font-medium block">
                  Piramida Bogăției
                </Link>
              </div>
            )}
          </div>
          <Link to="/out-of-office" onClick={handleLinkClick} className="text-[#C5A059] hover:text-[#d4b477] transition-colors">The Lifestyle</Link>
          <Link to="/cariera" onClick={handleLinkClick} className="text-[#C5A059] hover:text-[#d4b477] transition-colors">Carieră</Link>
          <Link to="/contact" onClick={handleLinkClick} className="text-[#C5A059] hover:text-[#d4b477] transition-colors">Contact</Link>
        </nav>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#C5A059]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="absolute right-6 hidden md:block">
          <button
            onClick={() => setIsMeetingModalOpen(true)}
            className="bg-[#C5A059] text-gray-900 px-6 py-2 rounded-lg hover:bg-[#d4b477] transition-colors font-medium"
          >
            Cunoaște-ne
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-6 py-4 space-y-2">
            <Link to="/cine-suntem" onClick={handleLinkClick} className="w-full text-left text-[#C5A059] hover:text-[#d4b477] transition-colors py-2 block">Cine suntem</Link>
            <Link to="/echipa" onClick={handleLinkClick} className="w-full text-left text-[#C5A059] hover:text-[#d4b477] transition-colors py-2 block">Echipa</Link>
            <div className="border-t border-gray-700 pt-2">
              <button
                className="w-full flex items-center justify-between text-[#C5A059] hover:text-[#d4b477] transition-colors py-2"
                onClick={() => {
                  setIsOfficeOpen(!isOfficeOpen);
                }}
              >
                <span>The Core</span>
                <ChevronDown size={16} className={`transition-transform ${isOfficeOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOfficeOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <button
                    className="w-full flex items-center justify-between text-[#C5A059] font-medium py-2"
                    onClick={() => setIsToolsOpen(!isToolsOpen)}
                  >
                    <span>Tools</span>
                    <ChevronDown size={16} className={`transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isToolsOpen && (
                    <div className="space-y-2">
                      <Link to="/buget" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Buget
                      </Link>
                      <Link to="/dobanda-capitalizata" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Dobândă capitalizată
                      </Link>
                      <Link to="/calculator-credite" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Calculator credite
                      </Link>
                      <Link to="/calculator-pensie" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Calculator pensie
                      </Link>
                      <Link to="/calculator-copil" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Calculator plan copil
                      </Link>
                      <Link to="/inflatie-depreciere" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Inflație & Depreciere
                      </Link>
                    </div>
                  )}
                  <button
                    className="w-full flex items-center justify-between text-[#C5A059] font-medium py-2 mt-2"
                    onClick={() => setIsConcepteOpen(!isConcepteOpen)}
                  >
                    <span>Concepte</span>
                    <ChevronDown size={16} className={`transition-transform ${isConcepteOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isConcepteOpen && (
                    <div className="space-y-2">
                      <Link to="/retragere-activitate" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Retragere din activitate
                      </Link>
                      <Link to="/plan-copil" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Plan copil
                      </Link>
                      <Link to="/achizitie-credit" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Achiziție credit și închidere anticipată
                      </Link>
                      <Link to="/investitii" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Investiții
                      </Link>
                      <Link to="/sanatate" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Sănătate
                      </Link>
                      <Link to="/protectie-bunuri" onClick={handleLinkClick} className="w-full text-left text-gray-300 hover:text-white transition-colors py-2 pl-4 block">
                        Protecție bunuri
                      </Link>
                    </div>
                  )}
                  <Link to="/maslow" onClick={handleLinkClick} className="w-full text-left text-[#C5A059] font-medium py-2 block">
                    Piramida Bogăției
                  </Link>
                </div>
              )}
            </div>
            <Link to="/out-of-office" onClick={handleLinkClick} className="w-full text-left text-[#C5A059] hover:text-[#d4b477] transition-colors py-2 block">The Lifestyle</Link>
            <Link to="/cariera" onClick={handleLinkClick} className="w-full text-left text-[#C5A059] hover:text-[#d4b477] transition-colors py-2 block">Carieră</Link>
            <Link to="/contact" onClick={handleLinkClick} className="w-full text-left text-[#C5A059] hover:text-[#d4b477] transition-colors py-2 block">Contact</Link>
            <button
              onClick={() => {
                setIsMeetingModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-[#C5A059] text-gray-900 px-6 py-2 rounded-lg hover:bg-[#d4b477] transition-colors font-medium mt-4 block text-center"
            >
              Cunoaște-ne
            </button>
          </div>
        </div>
      )}

      <MeetingModal
        isOpen={isMeetingModalOpen}
        onClose={() => setIsMeetingModalOpen(false)}
      />
    </div>
  );
};

export default Navigation;
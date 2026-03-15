import React from 'react';

const OutOfOffice: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Lifestyle</h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-2xl text-blue-600 font-semibold mb-8">Coming Soon...</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Story Section */}
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unde se întâlnesc afacerile cu plăcerea</h2>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                În <strong>The Core</strong> vorbim despre strategii și planificare financiară.
                Dar viața înseamnă și conexiuni autentice și experiențe care ne îmbogățesc.
              </p>
              
              <p>
                <strong>The Lifestyle</strong> este locul unde ieșim din costumele formale și ne conectăm
                ca oameni. Organizăm evenimente de networking, petreceri, workshop-uri creative
                și aventuri în aer liber.
              </p>
              
              <p>
                Pentru că cele mai bune oportunități se nasc în momentele relaxate, 
                iar parteneriatele puternice se construiesc în jurul unei mese sau într-o seară de distracție.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <p className="text-blue-800 font-medium">
                  Pregătim ceva special pentru tine. Urmărește-ne pentru a fi primul care află când lansăm!
                </p>
              </div>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Urmărește-ne pe Instagram</h3>
            <p className="text-gray-600 mb-6">Descoperă în culise cum ne pregătim pentru The Lifestyle</p>
            
            <div>
              <a 
                href="https://www.instagram.com/we.are_outofoffice?igsh=MmV4aHp4djVscjg3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white py-4 px-8 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold text-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @we.are_outofoffice
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutOfOffice;
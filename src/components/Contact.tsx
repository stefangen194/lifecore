import React, { useState } from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';
import LocalSEOHead from './seo/LocalSEOHead';
import { LOCAL_SEO_CONFIGS } from '../utils/localSEO';
import MeetingModal from './MeetingModal';

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <LocalSEOHead
        {...LOCAL_SEO_CONFIGS.contact}
        canonicalUrl="/contact"
      />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
            <p className="text-lg text-gray-600">Intră în legătură cu noi</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md h-[180px] flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Mail className="mr-3 text-blue-600" size={24} />
                  Informații de Contact
                </h2>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Adresă Email</div>
                    <a
                      href="mailto:cariera.lifecore@outlook.com"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      cariera.lifecore@outlook.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md flex-1 min-h-[400px]">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Clock className="mr-3 text-blue-600" size={24} />
                  Program
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Luni</span>
                    <span className="text-gray-900">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Marți</span>
                    <span className="text-gray-900">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Miercuri</span>
                    <span className="text-gray-900">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Joi</span>
                    <span className="text-gray-900">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Vineri</span>
                    <span className="text-gray-900">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Sâmbătă</span>
                    <span className="text-gray-900">10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Duminică</span>
                    <span className="text-red-600 font-medium">Închis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md h-[340px] flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <MapPin className="mr-3 text-blue-600" size={24} />
                  Locație
                </h2>
                <div className="w-full flex-1 border border-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.4134793133057!2d26.087524276634554!3d44.46569669950312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2038a3f886e5d%3A0xbd20a396277497d5!2sOVB%20Bucuresti%20-%20Birou%20Consultanta%20Primaverii!5e0!3m2!1sen!2sro!4v1755586249138!5m2!1sen!2sro"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="OVB București - Birou Consultanță Primăverii"
                  />
                </div>
              </div>

              <div className="bg-blue-600 p-8 rounded-lg shadow-md text-white flex-1">
                <h2 className="text-2xl font-semibold mb-4">Gata să începem?</h2>
                <p className="text-blue-50 mb-6">
                  Contactează-ne astăzi pentru a discuta nevoile tale și pentru a descoperi cum te putem ajuta să îți atingi obiectivele.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="block w-full bg-white text-blue-600 text-center py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                  >
                    Programează o Întâlnire
                  </button>
                  <a
                    href="mailto:cariera.lifecore@outlook.com"
                    className="block w-full border-2 border-white text-white text-center py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                  >
                    Trimite-ne un Mesaj
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MeetingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Contact;
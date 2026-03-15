import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const NAP_DATA = {
  businessName: "LifeCore - Planificare Financiară",
  address: {
    street: "Strada Exemplu, Nr. 123",
    city: "București",
    region: "București",
    postalCode: "010101",
    country: "România"
  },
  phone: "+40 XXX XXX XXX",
  email: "cariera.lifecore@outlook.com",
  hours: {
    weekdays: "Luni - Vineri: 09:00 - 18:00",
    weekend: "Sâmbătă - Duminică: Închis"
  }
};

interface NAPProps {
  variant?: 'full' | 'compact' | 'inline' | 'footer';
  showIcons?: boolean;
  className?: string;
}

const NAP: React.FC<NAPProps> = ({
  variant = 'full',
  showIcons = true,
  className = ''
}) => {
  const fullAddress = `${NAP_DATA.address.street}, ${NAP_DATA.address.city}, ${NAP_DATA.address.postalCode}, ${NAP_DATA.address.country}`;

  if (variant === 'inline') {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <span itemProp="name">{NAP_DATA.businessName}</span>
        <span className="text-gray-400">|</span>
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">{NAP_DATA.address.street}</span>,{' '}
          <span itemProp="addressLocality">{NAP_DATA.address.city}</span>
        </span>
        <span className="text-gray-400">|</span>
        <a
          href={`tel:${NAP_DATA.phone.replace(/\s/g, '')}`}
          itemProp="telephone"
          className="hover:text-blue-600 transition-colors"
        >
          {NAP_DATA.phone}
        </a>
      </span>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        className={`space-y-2 text-sm ${className}`}
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <div itemProp="name" className="font-semibold">
          {NAP_DATA.businessName}
        </div>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <div itemProp="streetAddress">{NAP_DATA.address.street}</div>
          <div>
            <span itemProp="addressLocality">{NAP_DATA.address.city}</span>,{' '}
            <span itemProp="postalCode">{NAP_DATA.address.postalCode}</span>
          </div>
        </div>
        <a
          href={`tel:${NAP_DATA.phone.replace(/\s/g, '')}`}
          itemProp="telephone"
          className="block hover:text-blue-600 transition-colors"
        >
          {NAP_DATA.phone}
        </a>
        <a
          href={`mailto:${NAP_DATA.email}`}
          itemProp="email"
          className="block hover:text-blue-600 transition-colors"
        >
          {NAP_DATA.email}
        </a>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div
        className={`space-y-3 ${className}`}
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <h3 className="font-bold text-lg mb-4" itemProp="name">
          {NAP_DATA.businessName}
        </h3>

        <div className="flex items-start gap-3">
          {showIcons && <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={20} />}
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <div itemProp="streetAddress">{NAP_DATA.address.street}</div>
            <div>
              <span itemProp="addressLocality">{NAP_DATA.address.city}</span>,{' '}
              <span itemProp="postalCode">{NAP_DATA.address.postalCode}</span>
            </div>
            <div itemProp="addressCountry">{NAP_DATA.address.country}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {showIcons && <Phone className="text-blue-500 flex-shrink-0" size={20} />}
          <a
            href={`tel:${NAP_DATA.phone.replace(/\s/g, '')}`}
            itemProp="telephone"
            className="hover:text-blue-400 transition-colors"
          >
            {NAP_DATA.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {showIcons && <Mail className="text-blue-500 flex-shrink-0" size={20} />}
          <a
            href={`mailto:${NAP_DATA.email}`}
            itemProp="email"
            className="hover:text-blue-400 transition-colors"
          >
            {NAP_DATA.email}
          </a>
        </div>

        <div className="flex items-start gap-3">
          {showIcons && <Clock className="text-blue-500 flex-shrink-0 mt-1" size={20} />}
          <div>
            <div>{NAP_DATA.hours.weekdays}</div>
            <div className="text-gray-400">{NAP_DATA.hours.weekend}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-sm ${className}`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <h3 className="font-bold text-xl mb-6 text-gray-900" itemProp="name">
        {NAP_DATA.businessName}
      </h3>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          {showIcons && <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />}
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <div className="font-semibold text-gray-900 mb-1">Adresă</div>
            <div className="text-gray-700">
              <div itemProp="streetAddress">{NAP_DATA.address.street}</div>
              <div>
                <span itemProp="addressLocality">{NAP_DATA.address.city}</span>,{' '}
                <span itemProp="postalCode">{NAP_DATA.address.postalCode}</span>
              </div>
              <div itemProp="addressCountry">{NAP_DATA.address.country}</div>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block font-medium"
            >
              Vezi pe hartă →
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          {showIcons && <Phone className="text-blue-600 flex-shrink-0 mt-1" size={24} />}
          <div>
            <div className="font-semibold text-gray-900 mb-1">Telefon</div>
            <a
              href={`tel:${NAP_DATA.phone.replace(/\s/g, '')}`}
              itemProp="telephone"
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              {NAP_DATA.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          {showIcons && <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />}
          <div>
            <div className="font-semibold text-gray-900 mb-1">Email</div>
            <a
              href={`mailto:${NAP_DATA.email}`}
              itemProp="email"
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              {NAP_DATA.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          {showIcons && <Clock className="text-blue-600 flex-shrink-0 mt-1" size={24} />}
          <div>
            <div className="font-semibold text-gray-900 mb-1">Program</div>
            <div className="text-gray-700">
              <div>{NAP_DATA.hours.weekdays}</div>
              <div className="text-gray-500">{NAP_DATA.hours.weekend}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NAP;

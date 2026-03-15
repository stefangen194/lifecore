import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  areaServed?: string[];
  additionalType?: string;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name = "LifeCore - Planificare Financiară",
  description = "Consultanță financiară personalizată pentru o viață echilibrată. Planificare pensie, investiții, asigurări și educație financiară.",
  image = "https://lifecore.ro/logo.png",
  telephone = "+40-XXX-XXX-XXX",
  email = "cariera.lifecore@outlook.com",
  address = {
    streetAddress: "Strada Exemplu, Nr. 123",
    addressLocality: "București",
    addressRegion: "București",
    postalCode: "010101",
    addressCountry: "RO"
  },
  geo = {
    latitude: 44.4268,
    longitude: 26.1025
  },
  openingHours = [
    "Mo-Fr 09:00-18:00"
  ],
  priceRange = "$$",
  areaServed = ["București", "Ilfov", "România"],
  additionalType = "FinancialService"
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    "@id": "https://lifecore.ro/#business",
    "name": name,
    "description": description,
    "image": image,
    "url": "https://lifecore.ro",
    "telephone": telephone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "openingHoursSpecification": openingHours.map(hours => {
      const [days, time] = hours.split(' ');
      const [opens, closes] = time.split('-');
      const dayMap: Record<string, string[]> = {
        'Mo': ['Monday'],
        'Tu': ['Tuesday'],
        'We': ['Wednesday'],
        'Th': ['Thursday'],
        'Fr': ['Friday'],
        'Sa': ['Saturday'],
        'Su': ['Sunday'],
        'Mo-Fr': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'Mo-Sa': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      };

      return (dayMap[days] || [days]).map(day => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": day,
        "opens": opens,
        "closes": closes
      }));
    }).flat(),
    "priceRange": priceRange,
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "additionalType": `https://schema.org/${additionalType}`,
    "sameAs": [
      "https://www.facebook.com/lifecore",
      "https://www.linkedin.com/company/lifecore",
      "https://www.instagram.com/lifecore"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicii de Planificare Financiară",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Planificare Pensie",
            "description": "Consultanță pentru planificarea și optimizarea pensiei private"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Planificare Investiții",
            "description": "Strategii personalizate de investiții pe termen lung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultanță Asigurări",
            "description": "Analiza și recomandări pentru asigurări de viață și sănătate"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Financiar Copil",
            "description": "Planificare financiară pentru educația copilului"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;

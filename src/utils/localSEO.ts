import { NAP_DATA } from '../components/seo/NAP';

export interface LocalSEOConfig {
  pageName: string;
  pageType: 'service' | 'location' | 'about' | 'contact' | 'home';
  primaryKeyword: string;
  location?: string;
  serviceArea?: string[];
}

export const generateLocalTitle = (config: LocalSEOConfig): string => {
  const { pageName, primaryKeyword, location } = config;
  const cityName = location || NAP_DATA.address.city;

  const templates = {
    service: `${pageName} ${cityName} | ${primaryKeyword} | ${NAP_DATA.businessName}`,
    location: `${primaryKeyword} în ${cityName} | ${NAP_DATA.businessName}`,
    about: `${pageName} | Consultanță Financiară ${cityName} | ${NAP_DATA.businessName}`,
    contact: `Contact ${cityName} | ${NAP_DATA.businessName} | ${primaryKeyword}`,
    home: `${NAP_DATA.businessName} | ${primaryKeyword} în ${cityName}`
  };

  return templates[config.pageType];
};

export const generateLocalDescription = (config: LocalSEOConfig): string => {
  const { primaryKeyword, location, serviceArea } = config;
  const cityName = location || NAP_DATA.address.city;
  const areas = serviceArea || [NAP_DATA.address.city, NAP_DATA.address.region];

  return `${primaryKeyword} profesionistă în ${cityName}. Deservim ${areas.join(', ')}. Consultanță personalizată, calculatoare gratuite și expertiză locală. Contactați-ne la ${NAP_DATA.phone}.`;
};

export const generateLocalKeywords = (config: LocalSEOConfig): string => {
  const { primaryKeyword, location, serviceArea } = config;
  const cityName = location || NAP_DATA.address.city;
  const areas = serviceArea || [NAP_DATA.address.city];

  const baseKeywords = [
    primaryKeyword,
    `${primaryKeyword} ${cityName}`,
    `${primaryKeyword} ${cityName.toLowerCase()}`,
  ];

  const locationVariants = areas.flatMap(area => [
    `${primaryKeyword} ${area}`,
    `${primaryKeyword} în ${area}`,
  ]);

  const nearMeKeywords = [
    `${primaryKeyword} aproape de mine`,
    `${primaryKeyword} în zona mea`,
  ];

  return [...baseKeywords, ...locationVariants, ...nearMeKeywords].join(', ');
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `https://lifecore.ro${crumb.url}`
    }))
  };
};

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": NAP_DATA.businessName,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": NAP_DATA.address.street,
        "addressLocality": NAP_DATA.address.city,
        "addressRegion": NAP_DATA.address.region,
        "postalCode": NAP_DATA.address.postalCode,
        "addressCountry": NAP_DATA.address.country
      },
      "telephone": NAP_DATA.phone,
      "email": NAP_DATA.email
    },
    "areaServed": (service.areaServed || [NAP_DATA.address.city]).map(area => ({
      "@type": "City",
      "name": area
    })),
    "url": `https://lifecore.ro${service.url}`
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const LOCAL_SEO_CONFIGS = {
  home: {
    pageName: "Acasă",
    pageType: 'home' as const,
    primaryKeyword: "Planificare Financiară",
    serviceArea: ["București", "Ilfov", "Sector 1", "Sector 2", "Sector 3"]
  },
  retragereActivitate: {
    pageName: "Retragere din Activitate",
    pageType: 'service' as const,
    primaryKeyword: "Planificare Pensie",
    serviceArea: ["București", "Ilfov", "România"]
  },
  planCopil: {
    pageName: "Plan Copil",
    pageType: 'service' as const,
    primaryKeyword: "Plan Financiar Copil",
    serviceArea: ["București", "Ilfov", "România"]
  },
  achizitieCredit: {
    pageName: "Achiziție Credit",
    pageType: 'service' as const,
    primaryKeyword: "Consultanță Credit Ipotecar",
    serviceArea: ["București", "Ilfov", "România"]
  },
  investitii: {
    pageName: "Investiții",
    pageType: 'service' as const,
    primaryKeyword: "Consultanță Investiții",
    serviceArea: ["București", "Ilfov", "România"]
  },
  contact: {
    pageName: "Contact",
    pageType: 'contact' as const,
    primaryKeyword: "Consultanță Financiară",
    serviceArea: ["București", "Ilfov"]
  }
};

export const generateCitationHTML = (): string => {
  return `
<div itemscope itemtype="https://schema.org/LocalBusiness">
  <span itemprop="name">${NAP_DATA.businessName}</span>
  <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
    <span itemprop="streetAddress">${NAP_DATA.address.street}</span>,
    <span itemprop="addressLocality">${NAP_DATA.address.city}</span>,
    <span itemprop="postalCode">${NAP_DATA.address.postalCode}</span>,
    <span itemprop="addressCountry">${NAP_DATA.address.country}</span>
  </div>
  <span itemprop="telephone">${NAP_DATA.phone}</span>
  <span itemprop="email">${NAP_DATA.email}</span>
</div>
  `.trim();
};

export const CITATION_TEXT = {
  full: `${NAP_DATA.businessName}, ${NAP_DATA.address.street}, ${NAP_DATA.address.city}, ${NAP_DATA.address.postalCode}, ${NAP_DATA.address.country}. Tel: ${NAP_DATA.phone}, Email: ${NAP_DATA.email}`,
  short: `${NAP_DATA.businessName}, ${NAP_DATA.address.city}. ${NAP_DATA.phone}`,
  minimal: `${NAP_DATA.businessName} - ${NAP_DATA.phone}`
};

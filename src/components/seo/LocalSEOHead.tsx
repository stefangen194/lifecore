import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateLocalTitle, generateLocalDescription, generateLocalKeywords, LocalSEOConfig } from '../../utils/localSEO';
import { NAP_DATA } from './NAP';

interface LocalSEOHeadProps extends LocalSEOConfig {
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  structuredData?: object;
}

const LocalSEOHead: React.FC<LocalSEOHeadProps> = ({
  pageName,
  pageType,
  primaryKeyword,
  location,
  serviceArea,
  canonicalUrl,
  ogImage = 'https://lifecore.ro/og-image.png',
  noindex = false,
  structuredData
}) => {
  const config: LocalSEOConfig = {
    pageName,
    pageType,
    primaryKeyword,
    location,
    serviceArea
  };

  const title = generateLocalTitle(config);
  const description = generateLocalDescription(config);
  const keywords = generateLocalKeywords(config);
  const cityName = location || NAP_DATA.address.city;

  const fullCanonicalUrl = canonicalUrl || `https://lifecore.ro${window.location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}

      <link rel="canonical" href={fullCanonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="ro_RO" />
      <meta property="og:site_name" content={NAP_DATA.businessName} />

      <meta property="business:contact_data:street_address" content={NAP_DATA.address.street} />
      <meta property="business:contact_data:locality" content={NAP_DATA.address.city} />
      <meta property="business:contact_data:region" content={NAP_DATA.address.region} />
      <meta property="business:contact_data:postal_code" content={NAP_DATA.address.postalCode} />
      <meta property="business:contact_data:country_name" content={NAP_DATA.address.country} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content={`RO-${NAP_DATA.address.region}`} />
      <meta name="geo.placename" content={cityName} />
      <meta name="geo.position" content="44.4268;26.1025" />
      <meta name="ICBM" content="44.4268, 26.1025" />

      <meta name="author" content={NAP_DATA.businessName} />
      <meta name="contact" content={NAP_DATA.email} />
      <meta name="coverage" content={cityName} />
      <meta name="distribution" content="local" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />

      <link rel="alternate" hrefLang="ro" href={fullCanonicalUrl} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default LocalSEOHead;

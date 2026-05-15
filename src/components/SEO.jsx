import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalUrl }) => {
  const siteUrl = 'https://hindustanoffset.in';
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      <title>{title ? `${title} | Hindustan Offset Printers` : 'Hindustan Offset Printers | Premium Printing Services in Haridwar'}</title>
      <meta name="description" content={description || "Hindustan Offset Printers provides premium offset and digital printing services, packaging solutions, and corporate branding in Haridwar, Uttarakhand."} />
      <meta name="keywords" content={keywords || "printing services Haridwar, offset printing, digital printing, packaging solutions, corporate branding, Hindustan Offset"} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title ? `${title} | Hindustan Offset Printers` : 'Hindustan Offset Printers'} />
      <meta property="og:description" content={description || "Premium offset and digital printing services in Haridwar, Uttarakhand."} />
      <meta property="og:image" content={`${siteUrl}/images/logo/Hindustan.png`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title ? `${title} | Hindustan Offset Printers` : 'Hindustan Offset Printers'} />
      <meta property="twitter:description" content={description || "Premium offset and digital printing services in Haridwar, Uttarakhand."} />
      <meta property="twitter:image" content={`${siteUrl}/images/logo/Hindustan.png`} />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Hindustan Offset Printers",
          "image": `${siteUrl}/images/logo/Hindustan.png`,
          "@id": siteUrl,
          "url": siteUrl,
          "telephone": "7060332238",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Santosh Vihar, Arya Nagar, Jwalapur",
            "addressLocality": "Haridwar",
            "addressRegion": "Uttarakhand",
            "postalCode": "249407",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "20:00"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

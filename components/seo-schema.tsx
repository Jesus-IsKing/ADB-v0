export const SEOSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adorabella Salon",
    "image": "https://adorabella.com/hero.jpg",
    "description": "Experience luxury hair styling, artisan color, and bespoke beauty services from our master stylists in a premium sanctuary.",
    "url": "https://adorabella.com",
    "telephone": "+1 (123) 456-7890",
    "email": "info@adorabella.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Beauty Street",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Precision Cut & Style",
        "description": "Geometric precision cuts and signature blowouts by master stylists",
        "price": "55",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Color Artistry",
        "description": "Luxury balayage, artisan color, and bond-building repair services",
        "price": "110",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Care & Repair",
        "description": "Clinical hair repair treatments including Olaplex and Kerastase",
        "price": "45",
        "priceCurrency": "USD"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

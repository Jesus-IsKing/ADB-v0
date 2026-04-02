export const SEOSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adorabella House",
    "image": "https://adorabella-salon.com/hero.jpg",
    "description": "Premium hair styling, artisan color, and restorative care at the exclusive Adorabella House.",
    "url": "https://adorabella-salon.com",
    "telephone": "+1 (509) 679-4206",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1099 Valley Mall Pkwy",
      "addressLocality": "East Wenatchee",
      "addressRegion": "WA",
      "postalCode": "98802",
      "addressCountry": "US"
    },
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12"
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
        "name": "Signature Cut & Style",
        "description": "Artistic precision cuts and signature high-shine finish by master stylists",
        "price": "65",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Luminous Master Color",
        "description": "Masterful color blending and beautiful dimensional highlights",
        "price": "140",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Restorative Care",
        "description": "Deep bond strengthening and healthy scalp care treatments",
        "price": "55",
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

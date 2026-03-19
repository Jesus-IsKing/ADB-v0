export const SEOSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adorabella Salon",
    "image": "https://adorabella-salon.com/hero.jpg",
    "description": "Experience luxury hair styling, artisan color, and bespoke beauty services from master stylists at Adorabella House.",
    "url": "https://adorabella-salon.com",
    "telephone": "+1 (509) 679-4206",
    "email": "inquiries@adorabella-salon.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "By Appointment Only",
      "addressLocality": "Wenatchee",
      "addressRegion": "WA",
      "postalCode": "98801",
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

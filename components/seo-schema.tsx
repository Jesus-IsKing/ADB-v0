export const SEOSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adorabella Salon",
    "image": "https://adorabella.com/hero.jpg",
    "description": "Premium chair rental services for beauty professionals. Flexible terms, premium facilities, and 24/7 support.",
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
    "priceRange": "$$",
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
        "name": "Daily Pass",
        "description": "Full day access (8 hours) with professional equipment and client waiting area",
        "price": "45",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Weekly Plan",
        "description": "Unlimited daily access with premium equipment and priority support",
        "price": "250",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Monthly Premium",
        "description": "Full-time exclusive access with premium setup and dedicated support",
        "price": "800",
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

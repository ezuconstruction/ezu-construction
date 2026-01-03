const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EZU Construction",
    "description": "Award-winning custom home builders and renovation specialists in Toronto",
    "url": "https://ezuconstruction.com",
    "telephone": "6477669999",
    "email": "info@ezuconstruction.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA",
      "postalCode": "L3R 2M2"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$$",
    "image": "https://ezuconstruction.com/EZU-Red-White.png",
    "sameAs": [
      "https://www.facebook.com/ezuconstruction",
      "https://www.instagram.com/ezuconstruction",
      "https://www.linkedin.com/company/ezu-construction"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Home Building",
            "description": "Design and build high-quality custom homes tailored to your style and needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Renovations",
            "description": "Transform your entire home with expert renovations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Renovations",
            "description": "Get a functional, stylish kitchen upgrade with better storage and layouts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Renovations",
            "description": "Upgrade your bathroom with custom tiling and spa-inspired features"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Additions",
            "description": "Add valuable living space with seamless home additions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50",
      "bestRating": "5"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "43.6532",
        "longitude": "-79.3832"
      },
      "geoRadius": "50000"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;

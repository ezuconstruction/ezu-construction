const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": "https://ezuconstruction.ca/#organization",
    "name": "EZU Construction",
    "description": "EZU Construction is a Canadian-owned custom home builder and full-service renovation contractor serving Toronto and the Greater Toronto Area since 2016. We specialize in custom homes, home additions, kitchen renovations, bathroom renovations, basement finishing, laneway suites, and all residential and commercial construction trades.",
    "url": "https://ezuconstruction.ca",
    "telephone": "+16477669999",
    "email": "info@ezuconstruction.com",
    "foundingDate": "2016",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "435 Steelcase Rd E",
      "addressLocality": "Markham",
      "addressRegion": "ON",
      "postalCode": "L3R 2M2",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.8561",
      "longitude": "-79.3370"
    },
    "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
    "priceRange": "$$$",
    "image": "https://ezuconstruction.ca/EZU-Red-White.png",
    "logo": "https://ezuconstruction.ca/EZU-Red-White.png",
    "sameAs": [
      "https://www.facebook.com/ezuconstruction",
      "https://www.instagram.com/ezu.construction/",
      "https://www.linkedin.com/company/ezu-construction",
      "https://www.youtube.com/@ezuconstruction"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction & Renovation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Home Building",
            "description": "Design-to-build custom homes tailored to your lot, lifestyle, and budget across the GTA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Renovations",
            "description": "Full-home remodels, open-concept conversions, and structural renovations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kitchen Renovations",
            "description": "Custom kitchen remodels with cabinetry, countertops, layouts, and appliance integration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bathroom Renovations",
            "description": "Bathroom upgrades with waterproofing, tile, fixtures, and spa-inspired design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Home Additions",
            "description": "Second-story additions, rear extensions, and sunroom additions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laneway & Garden Suites",
            "description": "Design, permits, and construction of laneway and garden suites in Toronto and GTA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basement Renovations",
            "description": "Basement finishing, legal suites, walkout conversions, and income suite development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Renovations",
            "description": "Office fit-outs, retail, restaurant, and multi-unit residential commercial renovations"
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
    "areaServed": [
      { "@type": "City", "name": "Toronto", "addressRegion": "ON", "addressCountry": "CA" },
      { "@type": "City", "name": "Markham", "addressRegion": "ON", "addressCountry": "CA" },
      { "@type": "City", "name": "Vaughan", "addressRegion": "ON", "addressCountry": "CA" },
      { "@type": "City", "name": "Richmond Hill", "addressRegion": "ON", "addressCountry": "CA" },
      { "@type": "City", "name": "Mississauga", "addressRegion": "ON", "addressCountry": "CA" },
      { "@type": "City", "name": "Brampton", "addressRegion": "ON", "addressCountry": "CA" },
      { "@type": "City", "name": "Oakville", "addressRegion": "ON", "addressCountry": "CA" },
      { "@type": "City", "name": "North York", "addressRegion": "ON", "addressCountry": "CA" },
      { "@type": "City", "name": "Scarborough", "addressRegion": "ON", "addressCountry": "CA" },
      { "@type": "City", "name": "Etobicoke", "addressRegion": "ON", "addressCountry": "CA" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "43.8561",
        "longitude": "-79.3370"
      },
      "geoRadius": "60000"
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

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Ascend Contractors",
    description:
      "Professional home exterior renovation services including external wall insulation, facade renovation, and waterproofing for homeowners in the Chicago area.",
    url: "https://ascendcontractors.com",
    telephone: "+1-234-567-890",
    email: "info@ascendcontractors.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Renovation Drive",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60601",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8781,
      longitude: -87.6298,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 41.8781,
        longitude: -87.6298,
      },
      geoRadius: "50000",
    },
    priceRange: "$$",
    image: "https://ascendcontractors.com/images/hero-house.jpg",
    sameAs: [
      "https://facebook.com/ascendcontractors",
      "https://instagram.com/ascendcontractors",
      "https://twitter.com/ascendcontractors",
      "https://linkedin.com/company/ascendcontractors",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Exterior Renovation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "External Wall Insulation",
            description:
              "High-performance insulation systems that reduce heat loss and lower energy bills",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Facade Renovation",
            description:
              "Complete facade restoration including crack repair, re-rendering, and decorative finishes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exterior Waterproofing",
            description:
              "Professional waterproofing solutions that protect walls from moisture and weather damage",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

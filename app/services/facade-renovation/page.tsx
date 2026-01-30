import type { Metadata } from "next"
import { UnderConstruction } from "@/components/under-construction"
// import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "Facade Renovation Services | Ascend Contractors",
  description:
    "Expert facade renovation and rendering services for homeowners. Transform your home's appearance with professional plastering, crack repair, and decorative finishes.",
  alternates: {
    canonical: "https://ascendcontractors.com/services/facade-renovation",
  },
}

export default function FacadeRenovationPage() {
  return <UnderConstruction />
}

/*
// Original page content - uncomment when ready
export default function FacadeRenovationPage() {
  return (
    <ServicePageLayout
      title="Facade Renovation"
      description="Give your home a stunning new look with our professional facade renovation services. From crack repair and re-rendering to decorative finishes, we transform tired, weathered exteriors into beautiful, modern facades that boost curb appeal and protect your property for years to come."
      image="/images/service-facade.jpg"
      imageAlt="Professional facade renovation work with fresh render being applied to home exterior"
      benefits={[
        "Dramatically improve curb appeal",
        "Repair cracks, chips, and damage",
        "Wide range of colors and textures",
        "Weather-resistant finishes",
        "Long-lasting protection (15+ years)",
        "Increase property value",
        "Hide unsightly repairs or patches",
        "Modern or traditional finishes available",
        "Low maintenance requirements",
      ]}
      whenNeeded={{
        title: "When Do You Need Facade Renovation?",
        items: [
          "Your render is cracking, peeling, or falling off",
          "Water damage or staining is visible on walls",
          "The exterior paint is faded or discolored",
          "You want to update your home's appearance",
          "Previous repairs are visible or mismatched",
          "You're selling and want to maximize value",
          "The existing render is more than 20 years old",
        ],
      }}
      whyChooseUs={{
        title: "Why Choose ExteriorPro for Facade Work?",
        items: [
          "Master craftsmen with decades of experience",
          "Premium silicone and acrylic render systems",
          "Precise color matching for seamless repairs",
          "Full structural assessment before work begins",
          "Clean, efficient work with scaffolding included",
          "Detailed quote with no hidden costs",
          "Comprehensive warranty on all work",
        ],
      }}
      relatedServices={[
        { title: "External Wall Insulation", href: "/services/external-wall-insulation" },
        { title: "Waterproofing", href: "/services/waterproofing" },
      ]}
    />
  )
}
*/

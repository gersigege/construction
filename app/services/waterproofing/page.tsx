import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "Exterior Waterproofing Services | ExteriorPro",
  description:
    "Professional exterior waterproofing for homeowners. Protect your home from moisture, damp, and weather damage with our expert waterproofing solutions.",
}

export default function WaterproofingPage() {
  return (
    <ServicePageLayout
      title="Exterior Waterproofing"
      description="Protect your home from the elements with our professional exterior waterproofing services. We apply advanced breathable coatings that repel water while allowing moisture to escape, preventing damp problems, mold growth, and structural damage caused by water penetration."
      image="/images/service-waterproofing.jpg"
      imageAlt="Professional waterproofing treatment being applied to house exterior walls"
      benefits={[
        "Complete protection from rain and moisture",
        "Prevents damp and mold problems",
        "Breathable coatings maintain wall health",
        "Protects against frost damage",
        "Prevents moss and algae growth",
        "Extends the life of your exterior",
        "Maintains appearance for longer",
        "Invisible protection that won't change appearance",
        "Eco-friendly, water-based products available",
      ]}
      whenNeeded={{
        title: "When Do You Need Waterproofing?",
        items: [
          "Damp patches appear on internal walls after rain",
          "You notice a musty smell in your home",
          "Mold or mildew is growing on walls",
          "Exterior walls absorb water and stay wet",
          "Paint is peeling or bubbling on exterior",
          "Green moss or algae grows on your walls",
          "You've recently had render or facade work done",
        ],
      }}
      whyChooseUs={{
        title: "Why Choose ExteriorPro for Waterproofing?",
        items: [
          "Specialist waterproofing expertise since 2009",
          "Premium breathable coating systems",
          "Full damp survey and diagnosis included",
          "We address the cause, not just symptoms",
          "Treatments last 10-15 years",
          "Safe for all wall types and finishes",
          "Guaranteed results with full warranty",
        ],
      }}
      relatedServices={[
        { title: "External Wall Insulation", href: "/services/external-wall-insulation" },
        { title: "Facade Renovation", href: "/services/facade-renovation" },
      ]}
    />
  )
}

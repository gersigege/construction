import type { Metadata } from "next"
import { UnderConstruction } from "@/components/under-construction"
// import { ServicePageLayout } from "@/components/service-page-layout"

export const metadata: Metadata = {
  title: "External Wall Insulation Services | Ascend Contractors",
  description:
    "Professional external wall insulation for homeowners. Reduce energy bills by up to 40%, improve comfort, and increase property value with our expert EWI installation services.",
  alternates: {
    canonical: "https://ascendcontractors.com/services/external-wall-insulation",
  },
}

export default function ExternalWallInsulationPage() {
  return <UnderConstruction />
}

/*
// Original page content - uncomment when ready
export default function ExternalWallInsulationPage() {
  return (
    <ServicePageLayout
      title="External Wall Insulation"
      description="External Wall Insulation (EWI) is one of the most effective ways to improve your home's energy efficiency. Our certified team installs high-performance insulation systems that wrap your home in a thermal blanket, dramatically reducing heat loss through walls and lowering your heating costs by up to 40%."
      image="/images/service-insulation.jpg"
      imageAlt="Professional installation of external wall insulation on a residential home"
      benefits={[
        "Reduce heating bills by up to 40%",
        "Improve home comfort year-round",
        "Eliminate cold spots and drafts",
        "Reduce condensation and damp problems",
        "Improve your home's EPC rating",
        "Increase property value",
        "Reduce carbon footprint",
        "Qualify for government grants",
        "10-year installation warranty",
      ]}
      whenNeeded={{
        title: "When Do You Need External Wall Insulation?",
        items: [
          "Your home has solid walls without cavity insulation",
          "You're experiencing high energy bills despite modern heating",
          "Rooms feel cold even with the heating on",
          "You notice condensation or damp on internal walls",
          "Your home was built before 1920 (solid brick construction)",
          "You want to improve your home's energy efficiency rating",
          "You're planning a full exterior renovation",
        ],
      }}
      whyChooseUs={{
        title: "Why Choose ExteriorPro for EWI?",
        items: [
          "15+ years of specialist EWI installation experience",
          "Certified installers using premium materials (EPS & Mineral Wool)",
          "Full building survey and thermal assessment included",
          "We handle all planning permissions and building regulations",
          "Comprehensive 10-year warranty on all installations",
          "Finance options and grant assistance available",
          "Clean, professional worksite with minimal disruption",
        ],
      }}
      relatedServices={[
        { title: "Facade Renovation", href: "/services/facade-renovation" },
        { title: "Waterproofing", href: "/services/waterproofing" },
      ]}
    />
  )
}
*/

import type { Metadata } from "next"
import { UnderConstruction } from "@/components/under-construction"
// import { Header } from "@/components/header"
// import { Hero } from "@/components/hero"
// import { Services } from "@/components/services"
// import { Benefits } from "@/components/benefits"
// import { Projects } from "@/components/projects"
// import { About } from "@/components/about"
// import { ServiceAreas } from "@/components/service-areas"
// import { Contact } from "@/components/contact"
// import { Footer } from "@/components/footer"
// import { LocalBusinessSchema } from "@/components/local-business-schema"

export const metadata: Metadata = {
  title: "Ascend Contractors | Professional Exterior Wall Insulation & Facade Renovation",
  description:
    "Expert home exterior renovation services in Chicago. External wall insulation, facade renovation, and waterproofing for homeowners. Free quotes available.",
  alternates: {
    canonical: "https://ascendcontractors.com",
  },
}

export default function Home() {
  return <UnderConstruction />
  
  /* Original content - uncomment when ready:
  return (
    <>
      <LocalBusinessSchema />
      <main>
        <Header />
        <Hero />
        <Services />
        <Benefits />
        <Projects />
        <About />
        <ServiceAreas />
        <Contact />
        <Footer />
      </main>
    </>
  )
  */
}

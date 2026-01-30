import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { ServiceAreas } from "@/components/service-areas"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LocalBusinessSchema } from "@/components/local-business-schema"

export default function Home() {
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
}

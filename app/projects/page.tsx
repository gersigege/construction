import type { Metadata } from "next"
import { UnderConstruction } from "@/components/under-construction"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { ProjectsGallery } from "@/components/projects-gallery"

export const metadata: Metadata = {
  title: "Our Projects | Ascend Contractors - Before & After Gallery",
  description:
    "View our portfolio of completed exterior renovation projects. See dramatic before and after transformations including wall insulation, facade renovation, and waterproofing work.",
  alternates: {
    canonical: "https://ascendcontractors.com/projects",
  },
}

export default function ProjectsPage() {
  return <UnderConstruction />
}

/*
// Original page content - uncomment when ready
export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance mb-6">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of completed exterior renovation projects. Each transformation
              showcases our commitment to quality craftsmanship and attention to detail.
            </p>
          </div>
        </section>

        <ProjectsGallery />

        <section className="py-16 md:py-24 bg-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join hundreds of satisfied homeowners who have transformed their properties with ExteriorPro.
              Get a free quote today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-background text-foreground px-8 py-3 text-base font-medium shadow hover:bg-background/90 transition-colors"
            >
              Request a Free Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
*/

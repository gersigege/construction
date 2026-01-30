import type { Metadata } from "next"
import { UnderConstruction } from "@/components/under-construction"
// import Image from "next/image"
// import Link from "next/link"
// import { CheckCircle2, Users, Award, Clock, ShieldCheck } from "lucide-react"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us | Ascend Contractors - Trusted Exterior Renovation Experts",
  description:
    "Learn about Ascend Contractors' 15+ years of experience in home exterior renovation. Our certified team delivers quality insulation, facade renovation, and waterproofing services.",
  alternates: {
    canonical: "https://ascendcontractors.com/about",
  },
}

export default function AboutPage() {
  return <UnderConstruction />
}

/*
// Original page content - uncomment when ready

const values = [
  {
    icon: Award,
    title: "Quality Craftsmanship",
    description:
      "We use only premium materials and employ skilled craftsmen who take pride in their work.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We listen, communicate, and deliver exactly what you need.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We show up on time, stick to our quotes, and complete projects when we say we will.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Integrity",
    description:
      "Honest advice, transparent pricing, and warranties you can count on. No surprises.",
  },
]

const features = [
  "15+ years of exterior renovation experience",
  "Fully licensed and insured professionals",
  "1,200+ homes successfully renovated",
  "Premium quality materials with warranties",
  "Free consultation and detailed quotes",
  "Flexible financing options available",
  "Clean, respectful worksite management",
  "Dedicated project manager for every job",
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance mb-6">
                  About ExteriorPro
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  For over 15 years, ExteriorPro has been the trusted choice for homeowners seeking
                  professional exterior renovation services. Our team of certified specialists
                  transforms homes with quality insulation, stunning facades, and lasting
                  waterproofing solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand that your home is your biggest investment. That's why we approach
                  every project with the care and attention it deserves, using only premium
                  materials and proven techniques to deliver results that stand the test of time.
                </p>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/team.jpg"
                    alt="The ExteriorPro team of professional exterior renovation specialists"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm opacity-90">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do, from the first consultation to the final
                walkthrough.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                  Why Homeowners Choose ExteriorPro
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  When you choose ExteriorPro, you're choosing a partner committed to protecting and
                  beautifying your home. Here's what sets us apart:
                </p>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Beautifully renovated home exterior showcasing ExteriorPro's quality work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground">15+</p>
                <p className="text-primary-foreground/80 mt-2">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground">1,200+</p>
                <p className="text-primary-foreground/80 mt-2">Homes Renovated</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground">98%</p>
                <p className="text-primary-foreground/80 mt-2">Customer Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground">10yr</p>
                <p className="text-primary-foreground/80 mt-2">Warranty Coverage</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a free consultation and quote. We'll assess your property and
              recommend the best solutions for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Request a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
*/

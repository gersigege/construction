import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ServicePageLayoutProps {
  title: string
  description: string
  image: string
  imageAlt: string
  benefits: string[]
  whenNeeded: {
    title: string
    items: string[]
  }
  whyChooseUs: {
    title: string
    items: string[]
  }
  relatedServices: {
    title: string
    href: string
  }[]
}

export function ServicePageLayout({
  title,
  description,
  image,
  imageAlt,
  benefits,
  whenNeeded,
  whyChooseUs,
  relatedServices,
}: ServicePageLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  href="/#services"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 mb-4"
                >
                  <ArrowRight className="h-4 w-4 mr-1 rotate-180" />
                  Back to Services
                </Link>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance mb-6">
                  {title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">Request a Free Quote</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+1234567890">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12 text-center">
              Benefits for Homeowners
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When Needed & Why Choose Us */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                  {whenNeeded.title}
                </h2>
                <ul className="space-y-4">
                  {whenNeeded.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                  {whyChooseUs.title}
                </h2>
                <ul className="space-y-4">
                  {whyChooseUs.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Get a free, no-obligation quote for your project. Our experts will assess your property
              and provide a detailed estimate tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8 text-center">
              Related Services
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((service) => (
                <Button key={service.href} asChild variant="outline">
                  <Link href={service.href}>{service.title}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

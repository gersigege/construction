import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-house.jpg"
          alt="Beautiful renovated home exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 mb-4">
            Trusted by 1,000+ Homeowners
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Professional External Wall Insulation & Facade Renovation
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-2xl">
            Transform your home with expert exterior renovation services. We specialize in wall insulation, 
            facade restoration, waterproofing, and energy-efficient upgrades that protect your property 
            and reduce your energy bills.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link href="/contact">
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent">
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Call (123) 456-7890
              </a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-primary-foreground/20 pt-8">
            <div>
              <p className="text-3xl font-bold text-primary-foreground">15+</p>
              <p className="text-sm text-primary-foreground/80">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">1,200+</p>
              <p className="text-sm text-primary-foreground/80">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-foreground">98%</p>
              <p className="text-sm text-primary-foreground/80">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

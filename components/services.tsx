import Link from "next/link"
import { Shield, Home, Droplets, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "External Wall Insulation",
    description: "High-performance insulation systems that dramatically reduce heat loss, lower energy bills, and keep your home comfortable year-round.",
    icon: Shield,
    features: ["EPS & Mineral Wool Systems", "Up to 40% Energy Savings", "10-Year Guarantee"],
    href: "/services/external-wall-insulation",
  },
  {
    title: "Facade Renovation",
    description: "Complete facade restoration services including crack repair, re-rendering, and decorative finishes to transform your home's appearance.",
    icon: Home,
    features: ["Silicone & Acrylic Renders", "Color Matching Available", "Long-lasting Finish"],
    href: "/services/facade-renovation",
  },
  {
    title: "Exterior Waterproofing",
    description: "Professional waterproofing solutions that protect your walls from moisture, damp, and weather damage for lasting protection.",
    icon: Droplets,
    features: ["Breathable Coatings", "Damp Prevention", "Moss & Algae Resistance"],
    href: "/services/waterproofing",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Complete Exterior Renovation Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From insulation to waterproofing, we offer comprehensive services to protect and beautify your home exterior.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="relative overflow-hidden border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full group/btn bg-transparent">
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { TrendingDown, CloudRain, Sparkles, TrendingUp } from "lucide-react"

const benefits = [
  {
    title: "Lower Energy Bills",
    description: "Reduce heating costs by up to 40% with professional external wall insulation. See savings from your very first winter.",
    icon: TrendingDown,
    stat: "40%",
    statLabel: "Average Savings",
  },
  {
    title: "Weather Protection",
    description: "Shield your home from rain, frost, and wind damage with our advanced waterproofing and insulation systems.",
    icon: CloudRain,
    stat: "25+",
    statLabel: "Year Protection",
  },
  {
    title: "Improved Appearance",
    description: "Transform your home's curb appeal with modern renders and finishes. Choose from hundreds of colors and textures.",
    icon: Sparkles,
    stat: "100+",
    statLabel: "Finish Options",
  },
  {
    title: "Increased Property Value",
    description: "Boost your home's market value with improved energy ratings and a refreshed exterior that attracts buyers.",
    icon: TrendingUp,
    stat: "15%",
    statLabel: "Value Increase",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Benefits of Professional Exterior Renovation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Investing in your home's exterior delivers lasting benefits for comfort, protection, and value.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="relative bg-card rounded-xl p-8 shadow-sm border border-border">
              <div className="mb-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <benefit.icon className="h-7 w-7" />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">{benefit.stat}</span>
                <span className="ml-2 text-sm text-muted-foreground">{benefit.statLabel}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

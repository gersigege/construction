import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const features = [
  "15+ years of exterior renovation experience",
  "Fully licensed and insured professionals",
  "Free consultation and detailed quotes",
  "Premium quality materials with warranties",
  "Clean, respectful worksite management",
  "Flexible financing options available",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/team.jpg"
                alt="Ascend Contractors team"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold">1,200+</p>
              <p className="text-sm opacity-90">Homes Renovated</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                About Us
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Your Trusted Partner in Home Exterior Renovation
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Ascend Contractors has been transforming homes across the region for over 15 years. 
                Our team of skilled craftsmen specializes in external wall insulation, facade 
                renovation, and waterproofing solutions designed specifically for homeowners.
              </p>
              <p>
                We understand that your home is your biggest investment. That's why we use only 
                premium materials, employ certified technicians, and back every project with 
                comprehensive warranties. Our goal is simple: to deliver exceptional results 
                that protect and beautify your home for decades to come.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

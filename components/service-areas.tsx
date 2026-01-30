import { MapPin } from "lucide-react"

const areas = [
  {
    region: "Chicago Metro",
    cities: ["Chicago", "Evanston", "Oak Park", "Skokie", "Cicero", "Berwyn"],
  },
  {
    region: "North Suburbs",
    cities: ["Wilmette", "Winnetka", "Highland Park", "Lake Forest", "Glenview", "Northbrook"],
  },
  {
    region: "West Suburbs",
    cities: ["Naperville", "Aurora", "Wheaton", "Downers Grove", "Elmhurst", "Oak Brook"],
  },
  {
    region: "South Suburbs",
    cities: ["Orland Park", "Tinley Park", "Oak Lawn", "Evergreen Park", "Homewood", "Flossmoor"],
  },
]

export function ServiceAreas() {
  return (
    <section id="areas" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Service Areas
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Serving Homeowners Across the Greater Chicago Area
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide professional exterior renovation services throughout Chicagoland and surrounding communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area) => (
            <div key={area.region} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{area.region}</h3>
              </div>
              <ul className="space-y-2">
                {area.cities.map((city) => (
                  <li key={city} className="text-muted-foreground text-sm">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don't see your area? <a href="#contact" className="text-primary font-medium hover:underline">Contact us</a> — we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  )
}

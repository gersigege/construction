import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const navigation = {
  services: [
    { name: "External Wall Insulation", href: "/services/external-wall-insulation" },
    { name: "Facade Renovation", href: "/services/facade-renovation" },
    { name: "Exterior Waterproofing", href: "/services/waterproofing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Service Areas", href: "/#areas" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
}

const social = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              Ascend Contractors
            </Link>
            <p className="mt-4 text-sm text-background/70 max-w-xs">
              Serving homeowners with exterior renovation services including wall insulation, facade renovation, and waterproofing throughout the Chicago metropolitan area.
            </p>
            <div className="mt-4 space-y-2 text-sm text-background/70">
              <p>
                <span className="font-medium text-background">Phone:</span>{" "}
                <a href="tel:+1234567890" className="hover:text-background transition-colors">(123) 456-7890</a>
              </p>
              <p>
                <span className="font-medium text-background">Email:</span>{" "}
                <a href="mailto:info@ascendcontractors.com" className="hover:text-background transition-colors">info@ascendcontractors.com</a>
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-background/70 hover:text-background transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-sm text-background/60 text-center">
            &copy; {new Date().getFullYear()} Ascend Contractors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

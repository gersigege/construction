"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { name: "External Wall Insulation", href: "/services/external-wall-insulation" },
  { name: "Facade Renovation", href: "/services/facade-renovation" },
  { name: "Waterproofing", href: "/services/waterproofing" },
]

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-primary">Ascend Contractors</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {/* Services Dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 rounded-lg bg-card border border-border shadow-lg py-2"
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="h-4 w-4" />
            (123) 456-7890
          </a>
          <Button asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-foreground/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold text-primary">Ascend Contractors</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-1 py-6">
                  <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <a href="tel:+1234567890" className="flex items-center gap-2 text-base font-medium text-foreground">
                    <Phone className="h-5 w-5" />
                    (123) 456-7890
                  </a>
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Free Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

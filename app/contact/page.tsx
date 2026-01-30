import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | ExteriorPro - Request a Free Quote",
  description:
    "Contact ExteriorPro for a free exterior renovation quote. Call us or fill out our form for expert advice on wall insulation, facade renovation, and waterproofing.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your home's exterior? Get in touch for a free, no-obligation
              consultation and quote. Our team is here to help.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <ContactForm />

        {/* Service Areas */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                Service Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We serve homeowners throughout the Chicago metropolitan area and surrounding suburbs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-4">North</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Evanston</li>
                  <li>Skokie</li>
                  <li>Wilmette</li>
                  <li>Winnetka</li>
                  <li>Highland Park</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-4">West</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Oak Park</li>
                  <li>River Forest</li>
                  <li>Elmhurst</li>
                  <li>Hinsdale</li>
                  <li>Naperville</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-4">South</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Hyde Park</li>
                  <li>Beverly</li>
                  <li>Orland Park</li>
                  <li>Tinley Park</li>
                  <li>Oak Lawn</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeftRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Victorian Home Complete Renovation",
    location: "Oak Park, Chicago",
    service: "External Wall Insulation + Facade Renovation",
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    description:
      "This Victorian-era home suffered from significant heat loss and an aging facade. We installed a comprehensive external wall insulation system and applied a fresh decorative render, transforming both the appearance and energy efficiency of the property.",
    stats: {
      energySaving: "38%",
      completionTime: "3 weeks",
      warranty: "10 years",
    },
  },
  {
    id: 2,
    title: "Waterproofing & Damp Treatment",
    location: "Lincoln Square, Chicago",
    service: "Waterproofing + Facade Repair",
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    description:
      "This property had severe moisture penetration issues causing damp and mold problems inside. We applied professional waterproofing treatment and repaired damaged render, completely eliminating the damp problem and giving the home a fresh new look.",
    stats: {
      energySaving: "25%",
      completionTime: "2 weeks",
      warranty: "10 years",
    },
  },
]

export function ProjectsGallery() {
  const [showAfter, setShowAfter] = useState<Record<number, boolean>>({})

  const toggleImage = (projectId: number) => {
    setShowAfter((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={showAfter[project.id] ? project.after : project.before}
                    alt={`${project.title} ${showAfter[project.id] ? "after" : "before"} renovation`}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        showAfter[project.id]
                          ? "bg-green-500 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {showAfter[project.id] ? "After" : "Before"}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleImage(project.id)}
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ArrowLeftRight className="h-4 w-4" />
                    Toggle View
                  </button>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">{project.service}</p>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{project.title}</h2>
                  <p className="text-muted-foreground">{project.location}</p>
                </div>

                <p className="text-foreground leading-relaxed">{project.description}</p>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                  <div>
                    <p className="text-2xl font-bold text-primary">{project.stats.energySaving}</p>
                    <p className="text-sm text-muted-foreground">Energy Savings</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{project.stats.completionTime}</p>
                    <p className="text-sm text-muted-foreground">Completion</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{project.stats.warranty}</p>
                    <p className="text-sm text-muted-foreground">Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

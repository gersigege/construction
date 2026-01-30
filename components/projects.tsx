"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeftRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Victorian Home Renovation",
    location: "Oak Park, Chicago",
    before: "/images/before-1.jpg",
    after: "/images/after-1.jpg",
    description: "Complete facade renovation with external wall insulation and decorative render.",
  },
  {
    id: 2,
    title: "Waterproofing & Insulation",
    location: "Lincoln Square, Chicago",
    before: "/images/before-2.jpg",
    after: "/images/after-2.jpg",
    description: "Full exterior waterproofing treatment with fresh rendered finish.",
  },
]

export function Projects() {
  const [activeProject, setActiveProject] = useState(0)
  const [showAfter, setShowAfter] = useState<Record<number, boolean>>({})

  const toggleImage = (projectId: number) => {
    setShowAfter(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Before & After Transformations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See the dramatic results our team delivers for homeowners just like you.
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeProject === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={showAfter[projects[activeProject].id] ? projects[activeProject].after : projects[activeProject].before}
              alt={`${projects[activeProject].title} ${showAfter[projects[activeProject].id] ? 'after' : 'before'}`}
              fill
              className="object-cover transition-opacity duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                showAfter[projects[activeProject].id] 
                  ? "bg-green-500 text-white" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {showAfter[projects[activeProject].id] ? "After" : "Before"}
              </span>
            </div>
            <button
              onClick={() => toggleImage(projects[activeProject].id)}
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ArrowLeftRight className="h-4 w-4" />
              Toggle View
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {projects[activeProject].title}
              </h3>
              <p className="text-muted-foreground">
                {projects[activeProject].location}
              </p>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              {projects[activeProject].description}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">35%</p>
                <p className="text-sm text-muted-foreground">Energy Savings</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">2 Weeks</p>
                <p className="text-sm text-muted-foreground">Completion Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {projects.map((project, index) => (
            <button
              key={`thumb-${project.id}`}
              onClick={() => setActiveProject(index)}
              className={`relative aspect-video rounded-lg overflow-hidden ${
                activeProject === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
              } transition-all`}
            >
              <Image
                src={project.after || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

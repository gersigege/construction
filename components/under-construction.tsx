import { Construction } from "lucide-react"

export function UnderConstruction() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Construction className="h-10 w-10 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Under Construction
        </h1>
        
        <p className="text-muted-foreground">
          We&apos;re building something great. Check back soon.
        </p>
        
        <p className="mt-12 text-sm text-muted-foreground">
          Ascend Contractors
        </p>
      </div>
    </div>
  )
}

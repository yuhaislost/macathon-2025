import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdjustmentsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <MainNav />
      <div className="p-4 space-y-6">
        {/* Form fields */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="h-2 w-1/3 bg-muted rounded-full" />
            <Input className="h-12 rounded-lg" />
          </div>

          <div className="space-y-2">
            <div className="h-2 w-1/3 bg-muted rounded-full" />
            <Input className="h-12 rounded-lg" />
          </div>
        </div>

        {/* Slider */}
        <div className="space-y-2 pt-4">
          <div className="h-2 w-1/4 bg-muted rounded-full" />
          <div className="h-1 w-full bg-muted rounded-full" />
        </div>

        {/* Option buttons */}
        <div className="grid grid-cols-3 gap-2 pt-4">
          <Button variant="outline" className="h-10 rounded-full">
            <div className="h-2 w-12 bg-muted rounded-full" />
          </Button>
          <Button variant="outline" className="h-10 rounded-full bg-muted">
            <div className="h-2 w-16 bg-background rounded-full" />
          </Button>
          <Button variant="outline" className="h-10 rounded-full">
            <div className="h-2 w-12 bg-muted rounded-full" />
          </Button>
        </div>

        {/* More option buttons */}
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" className="h-10 rounded-full">
            <div className="h-2 w-12 bg-muted rounded-full" />
          </Button>
          <Button variant="outline" className="h-10 rounded-full bg-muted">
            <div className="h-2 w-16 bg-background rounded-full" />
          </Button>
          <Button variant="outline" className="h-10 rounded-full">
            <div className="h-2 w-12 bg-muted rounded-full" />
          </Button>
        </div>

        {/* More option buttons */}
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" className="h-10 rounded-full bg-muted">
            <div className="h-2 w-12 bg-background rounded-full" />
          </Button>
          <Button variant="outline" className="h-10 rounded-full">
            <div className="h-2 w-16 bg-muted rounded-full" />
          </Button>
          <Button variant="outline" className="h-10 rounded-full">
            <div className="h-2 w-12 bg-muted rounded-full" />
          </Button>
        </div>

        {/* Action button */}
        <div className="pt-6">
          <Button variant="default" className="w-full h-10 rounded-full bg-black text-white">
            <div className="h-2 w-16 bg-white rounded-full" />
          </Button>
        </div>
      </div>
    </main>
  )
}

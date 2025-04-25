import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <MainNav />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="h-1 w-full bg-muted rounded-full" />
          <Button variant="default" className="w-full h-12 bg-black text-white rounded-md">
            button
          </Button>
        </div>
      </div>
    </main>
  )
}

import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <MainNav />
      <div className="p-4 space-y-6">
        <div className="flex items-center justify-center p-8">
          <div className="size-24 rounded-full bg-coral-100 border-2 border-coral-300 flex items-center justify-center">
            <span className="text-4xl">🖼️</span>
          </div>
        </div>

        <div className="space-y-4">
          {["Personal Information", "Account Settings", "Privacy", "Notifications", "Appearance", "Language"].map(
            (item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-between h-12 px-4 border-b hover:bg-coral-50 hover:text-coral-800"
                asChild
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm">{item}</span>
                  <ChevronRight className="size-4 text-coral-600" />
                </div>
              </Button>
            ),
          )}
        </div>
      </div>
    </main>
  )
}

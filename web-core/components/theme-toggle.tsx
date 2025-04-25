"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <Sun className="size-4" />
        <Switch />
        <Moon className="size-4" />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Sun className="size-4 text-coral-600" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="data-[state=checked]:bg-coral-600"
      />
      <Moon className="size-4 text-coral-600" />
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ArrowLeft, Search, Share2 } from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isMainPage = pathname === "/"
  const title = getPageTitle(pathname)

  return (
    <header className="border-b">
      <div className="flex h-14 items-center px-4">
        {!isMainPage ? (
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/">
              <ArrowLeft className="size-5" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
        ) : (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="grid gap-6 pt-6">
                <div className="flex items-center justify-center p-4">
                  <div className="size-16 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl">🖼️</span>
                  </div>
                </div>
                <div className="grid gap-1 px-2">
                  {[
                    { title: "Profile", href: "/profile" },
                    { title: "Statistics", href: "/statistics" },
                    { title: "Adjustments", href: "/adjustments" },
                    { title: "Settings", href: "/settings" },
                    { title: "Help & Support", href: "/help" },
                    { title: "About", href: "/about" },
                  ].map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className="justify-start h-12 px-4"
                      asChild
                      onClick={() => setOpen(false)}
                    >
                      <Link href={item.href} className="flex items-center justify-between w-full">
                        <span>{item.title}</span>
                        <span className="text-muted-foreground">→</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        )}

        <div className="flex-1 text-center">
          {isMainPage ? (
            <h1 className="text-lg font-medium">cutframe.</h1>
          ) : (
            <h1 className="text-lg font-medium">{title}</h1>
          )}
        </div>

        <div className="flex items-center">
          {isMainPage ? (
            <Button variant="ghost" size="icon">
              <Share2 className="size-5" />
              <span className="sr-only">Share</span>
            </Button>
          ) : (
            <Button variant="ghost" size="icon">
              <Search className="size-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

function getPageTitle(pathname: string): string {
  const path = pathname.split("/")[1]
  if (!path) return "Home"

  return path.charAt(0).toUpperCase() + path.slice(1)
}

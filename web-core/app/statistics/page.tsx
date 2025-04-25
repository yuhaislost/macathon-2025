"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function StatisticsPage() {
  const [activeTab, setActiveTab] = useState<"lifetime" | "specific">("lifetime")

  return (
    <main className="flex min-h-screen flex-col">
      <MainNav />
      <div className="p-4 space-y-6">
        {/* Tabs */}
        <div className="flex justify-center space-x-2 p-1 bg-muted rounded-full w-full max-w-xs mx-auto">
          <Button
            variant={activeTab === "lifetime" ? "default" : "ghost"}
            className={`rounded-full flex-1 ${activeTab === "lifetime" ? "bg-coral-600 text-white" : ""}`}
            onClick={() => setActiveTab("lifetime")}
          >
            Lifetime
          </Button>
          <Button
            variant={activeTab === "specific" ? "default" : "ghost"}
            className={`rounded-full flex-1 ${activeTab === "specific" ? "bg-coral-600 text-white" : ""}`}
            onClick={() => setActiveTab("specific")}
          >
            Specific
          </Button>
        </div>

        {/* Data list */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex justify-between items-center">
              <div className="h-2 bg-muted rounded-full w-2/5" />
              <div className="h-2 bg-muted rounded-full w-2/5" />
            </div>
          ))}
        </div>

        {/* Calendar navigation */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="size-4" />
          </Button>
          <div className="h-2 bg-muted rounded-full w-1/3" />
          <Button variant="ghost" size="icon">
            <ChevronRight className="size-4" />
          </Button>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className={`aspect-square rounded-md ${i === 16 ? "bg-coral-600" : "bg-muted"}`} />
          ))}
        </div>

        {/* Graph */}
        <div className="pt-8 space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <div>100</div>
            <div>80</div>
            <div>60</div>
            <div>40</div>
            <div>20</div>
            <div>0</div>
          </div>
          <div className="h-40 relative border-l border-b">
            {/* This is a simplified graph representation */}
            <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <path
                d="M0,40 L10,35 L20,30 L30,25 L40,28 L50,20 L60,15 L70,18 L80,10 L90,5 L100,2"
                fill="none"
                stroke="#FF6F61"
                strokeWidth="0.5"
              />
              <path
                d="M0,38 L10,36 L20,34 L30,30 L40,32 L50,28 L60,25 L70,22 L80,18 L90,15 L100,10"
                fill="none"
                stroke="#FFD1CC"
                strokeWidth="0.5"
              />
            </svg>
          </div>
          <div className="flex justify-between text-xs text-muted-foreground pt-2">
            <div>JAN</div>
            <div>FEB</div>
            <div>MAR</div>
            <div>APR</div>
            <div>MAY</div>
          </div>
        </div>
      </div>
    </main>
  )
}

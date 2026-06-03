"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { seriesData } from "@/lib/character-data"
import { HomeView } from "./home-view"

export function HomePageClient() {
  const router = useRouter()

  const handleSelectSeries = useCallback(
    (seriesId: string) => {
      router.push(`/series/${seriesId}`)
    },
    [router]
  )

  const handleNavigateToPowerSystem = useCallback(() => {
    router.push("/power-system")
  }, [router])

  return (
    <HomeView
      series={seriesData}
      onSelectSeries={handleSelectSeries}
      onNavigateToPowerSystem={handleNavigateToPowerSystem}
    />
  )
}

"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { seriesData } from "@/lib/character-data"
import { SeriesView } from "./series-view"

interface Props {
  seriesId: string
}

export function SeriesPageClient({ seriesId }: Props) {
  const router = useRouter()
  const series = seriesData.find((s) => s.id === seriesId)

  const handleBack = useCallback(() => {
    router.push("/")
  }, [router])

  const handleSelectCharacter = useCallback(
    (characterId: string) => {
      router.push(`/series/${seriesId}/character/${characterId}`)
    },
    [router, seriesId]
  )

  const handleNavigateToPowerSystem = useCallback(() => {
    router.push("/power-system")
  }, [router])

  if (!series) return null

  return (
    <SeriesView
      series={series}
      onBack={handleBack}
      onSelectCharacter={handleSelectCharacter}
      onNavigateToPowerSystem={handleNavigateToPowerSystem}
    />
  )
}

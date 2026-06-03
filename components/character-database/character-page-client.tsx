"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { seriesData } from "@/lib/character-data"
import { CharacterView } from "./character-view"

interface Props {
  seriesId: string
  characterId: string
}

export function CharacterPageClient({ seriesId, characterId }: Props) {
  const router = useRouter()
  const series = seriesData.find((s) => s.id === seriesId)
  const character = series?.characters.find((c) => c.id === characterId)

  const handleBack = useCallback(() => {
    router.push(`/series/${seriesId}`)
  }, [router, seriesId])

  const handleSelectCharacter = useCallback(
    (newCharacterId: string) => {
      router.push(`/series/${seriesId}/character/${newCharacterId}`)
    },
    [router, seriesId]
  )

  if (!series || !character) return null

  return (
    <CharacterView
      key={character.id}
      character={character}
      series={series}
      onBack={handleBack}
      onSelectCharacter={handleSelectCharacter}
    />
  )
}

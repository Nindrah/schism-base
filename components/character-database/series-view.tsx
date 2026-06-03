"use client"

import { Character, Series } from "@/lib/character-data"
import { ArrowLeft, ArrowRight, Bolt, Clock, Database, UserRound } from "lucide-react"
import { useMemo, useState } from "react"

interface SeriesViewProps {
  series: Series
  onBack: () => void
  onSelectCharacter: (characterId: string) => void
  onNavigateToPowerSystem?: () => void
}

interface AgeTier {
  label: string
  description: string
  minAge: number
  maxAge: number
}

const BEGINNING_AGE_TIERS: AgeTier[] = [
  { label: "Primordites Purba", description: "Olang tuwa / root generation", minAge: 10000, maxAge: Infinity },
  { label: "Primordites Milenium", description: "Saksi sejarah yang masih sempat ngantuk", minAge: 1500, maxAge: 9999 },
  { label: "Primordites Penasaran", description: "Kepencet lahir, tapi tetap masuk arsip", minAge: 0, maxAge: 1499 },
]

const getSeriesBadge = (seriesId: string) => {
  switch (seriesId) {
    case "schism-termina":
      return { label: "MAIN TIMELINE", className: "badge-termina" }
    case "schism-the-beginning":
      return { label: "PREQUEL", className: "badge-beginning" }
    case "schism-hell":
      return { label: "MYSTERY FILE", className: "badge-hell" }
    default:
      return { label: "SERIES", className: "badge-neutral" }
  }
}

const getCharacterTone = (character: Character) => {
  if (character.details.divineCondition) return character.details.divineCondition
  if (character.details.stats?.astralTechnique && character.details.stats.astralTechnique > 0) {
    return "Astral trace detected"
  }
  return "Baseline record"
}

export function SeriesView({
  series,
  onBack,
  onSelectCharacter,
  onNavigateToPowerSystem,
}: SeriesViewProps) {
  const [clickedCharacterId, setClickedCharacterId] = useState<string | null>(null)
  const badge = getSeriesBadge(series.id)
  const isBeginningSeriesLayout = series.id === "schism-the-beginning"

  const charactersByAgeTier = useMemo(() => {
    if (!isBeginningSeriesLayout) return null

    const sortedCharacters = [...series.characters].sort(
      (a, b) => b.details.age - a.details.age
    )

    return BEGINNING_AGE_TIERS.map((tier) => ({
      ...tier,
      characters: sortedCharacters.filter(
        (character) =>
          character.details.age >= tier.minAge && character.details.age <= tier.maxAge
      ),
    })).filter((tier) => tier.characters.length > 0)
  }, [series.characters, isBeginningSeriesLayout])

  const handleCharacterClick = (characterId: string) => {
    setClickedCharacterId(characterId)
    window.setTimeout(() => {
      onSelectCharacter(characterId)
      setClickedCharacterId(null)
    }, 180)
  }

  const renderCharacterCard = (character: Character) => (
    <button
      key={character.id}
      onClick={() => handleCharacterClick(character.id)}
      className={`character-card group text-left ${
        clickedCharacterId === character.id ? "scale-[0.98] opacity-70" : ""
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={character.thumbnailImage || "/placeholder.jpg"}
          alt={character.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.86))]" />
        <div className="absolute left-4 top-4">
          <span className="role-badge">{character.role}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-semibold leading-tight text-white">{character.name}</h3>
          <p className="mt-1 text-xs text-zinc-400">{getCharacterTone(character)}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="min-h-16 text-sm leading-6 text-zinc-400 line-clamp-3">
          {character.shortDescription}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
          <span className="text-zinc-500">{character.details.age.toLocaleString()} tahun</span>
          <span className="inline-flex items-center gap-2 text-zinc-200">
            Detail
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </button>
  )

  return (
    <main className="min-h-screen bg-schism text-zinc-200">
      <nav className="dossier-nav">
        <div className="dossier-container flex h-16 items-center justify-between gap-4">
          <button onClick={onBack} className="brand-mark" aria-label="Kembali ke beranda">
            SCHISM BASE
          </button>

          <div className="hidden items-center gap-1 md:flex">
            <button onClick={onBack} className="nav-link">
              Beranda
            </button>
            <button className="nav-link active">Series</button>
            {onNavigateToPowerSystem && (
              <button onClick={onNavigateToPowerSystem} className="nav-link">
                Power System
              </button>
            )}
          </div>

          <button onClick={onBack} className="dossier-button subtle">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </button>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-white/10">
        <img
          src={series.coverImage || "/placeholder.jpg"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070708_0%,rgba(7,7,8,0.9)_44%,rgba(7,7,8,0.72)_100%)]" />
        <div className="absolute inset-0 scanline-soft" />

        <div className="dossier-container relative grid gap-8 py-12 md:grid-cols-[minmax(0,1fr)_320px] md:py-16">
          <div>
            <span className={`series-badge ${badge.className}`}>{badge.label}</span>
            <h1 className="heading-display mt-5 text-5xl leading-tight text-zinc-100 md:text-7xl">
              {series.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              {series.description}
            </p>
          </div>

          <aside className="archive-panel p-5">
            <div className="detail-label">Series Index</div>
            <div className="mt-5 space-y-3">
              <div className="codex-row">
                <span>Characters</span>
                <strong>{series.characters.length}</strong>
              </div>
              <div className="codex-row">
                <span>Stat cap</span>
                <strong>{series.statCap.toLocaleString()}</strong>
              </div>
              <div className="codex-row">
                <span>Divine files</span>
                <strong>
                  {series.characters.filter((character) => character.details.divineCondition).length}
                </strong>
              </div>
            </div>
            {onNavigateToPowerSystem && (
              <button onClick={onNavigateToPowerSystem} className="dossier-button subtle mt-5 w-full">
                <Bolt className="h-4 w-4" />
                Power System
              </button>
            )}
          </aside>
        </div>
      </section>

      <section className="dossier-container py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="detail-label">Character Files</div>
            <h2 className="section-header mt-2 text-zinc-100">Daftar Karakter</h2>
          </div>
          <div className="flex w-fit items-center gap-2 border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-400">
            <Database className="h-4 w-4" />
            Arsip {series.title}
          </div>
        </div>

        {isBeginningSeriesLayout && charactersByAgeTier ? (
          <div className="space-y-10">
            {charactersByAgeTier.map((tier) => (
              <section key={tier.label} className="archive-section">
                <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="icon-tile">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100">{tier.label}</h3>
                      <p className="text-sm text-zinc-500">{tier.description}</p>
                    </div>
                  </div>
                  <span className="text-sm text-zinc-500">{tier.characters.length} record</span>
                </div>
                <div
                  className={`grid gap-4 ${
                    tier.characters.length === 1
                      ? "max-w-md grid-cols-1"
                      : tier.characters.length === 2
                        ? "max-w-3xl grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
                  }`}
                >
                  {tier.characters.map(renderCharacterCard)}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {series.characters.map(renderCharacterCard)}
          </div>
        )}

        {series.characters.length === 0 && (
          <div className="archive-panel flex min-h-52 flex-col items-center justify-center p-8 text-center">
            <UserRound className="h-8 w-8 text-zinc-600" />
            <p className="mt-4 text-zinc-400">Belum ada karakter di arsip ini.</p>
          </div>
        )}
      </section>
    </main>
  )
}

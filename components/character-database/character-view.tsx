"use client"

import { Character, CharacterStats, DivineCondition, Series } from "@/lib/character-data"
import { ArrowLeft, X } from "lucide-react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

const DIVINE_CONDITION_INFO: Record<DivineCondition, { title: string; description: string }> = {
  "Zero-Entropy": {
    title: "Zero-Entropy",
    description:
      "Hukum fisik di mana penderitanya tidak memiliki Astral Energy dan tidak akan mampu menguasai Astral Technique. Sebagai gantinya, fisik penderita menjadi absolut dan tidak dapat ditarget Astral Technique dengan efek pasti-kena.",
  },
  "Primal-Axiomatic": {
    title: "Primal-Axiomatic",
    description:
      "Hukum Ilahi untuk primordite khusus yang menjadi akar Astral Energy dan Astral Technique. Penciptaan, efisiensi, pengolahan energy, dan output teknik berada pada level tidak terbatas.",
  },
  Axiomatic: {
    title: "Axiomatic",
    description:
      "Hukum Ilahi berupa efisiensi, pengolahan energy, dan output teknik yang dapat meningkat tanpa batas. Condition ini mengikat fisiologis dan mental penderita, dan hanya ada satu penderita sampai sosok terkait tiada.",
  },
  Morphogen: {
    title: "Morphogen",
    description:
      "Hukum Ilahi yang mengizinkan transformasi dan pembentukan entitas ciptaannya sendiri. Efeknya bergantung pada Astral Energy mereka, dan hanya ada satu penderita sampai sosok terkait tiada.",
  },
}

interface CharacterViewProps {
  character: Character
  series: Series
  onBack: () => void
  onSelectCharacter: (characterId: string) => void
}

const STAT_ITEMS: Array<{ key: keyof CharacterStats; label: string }> = [
  { key: "strength", label: "Strength" },
  { key: "agility", label: "Agility" },
  { key: "resilience", label: "Resilience" },
  { key: "intelligence", label: "Intelligence" },
  { key: "astralTechnique", label: "Astral Technique" },
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

const formatStatValue = (value: number) => value.toLocaleString()

export function CharacterView({
  character,
  series,
  onBack,
  onSelectCharacter,
}: CharacterViewProps) {
  const [clickedCharacterId, setClickedCharacterId] = useState<string | null>(null)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null)
  const [showDivineModal, setShowDivineModal] = useState<DivineCondition | null>(null)
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const otherCharacters = useMemo(
    () => series.characters.filter((item) => item.id !== character.id),
    [character.id, series.characters]
  )
  const badge = getSeriesBadge(series.id)

  useEffect(() => {
    setSelectedGalleryImage(null)
    setShowDivineModal(null)
    setClickedCharacterId(null)
  }, [character.id])

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
    }
  }, [])

  const handleCharacterClick = useCallback(
    (characterId: string) => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)

      setClickedCharacterId(characterId)
      clickTimeoutRef.current = setTimeout(() => {
        onSelectCharacter(characterId)
        setClickedCharacterId(null)
      }, 180)
    },
    [onSelectCharacter]
  )

  const getStatPercent = (value: number) => {
    if (series.statCap <= 0) return 0
    return Math.max(0, Math.min(100, Math.round((value / series.statCap) * 100)))
  }

  return (
    <main className="min-h-screen bg-schism text-zinc-200">
      <nav className="dossier-nav">
        <div className="dossier-container flex h-16 items-center justify-between gap-4">
          <button onClick={onBack} className="brand-mark" aria-label="Kembali ke series">
            SCHISM BASE
          </button>

          <button onClick={onBack} className="dossier-button subtle">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </button>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-white/10">
        <img
          src={character.thumbnailImage || series.coverImage || "/placeholder.jpg"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070708_0%,rgba(7,7,8,0.94)_48%,rgba(7,7,8,0.74)_100%)]" />
        <div className="absolute inset-0 scanline-soft" />

        <div className="dossier-container relative grid gap-8 py-10 md:grid-cols-[340px_minmax(0,1fr)] md:py-14">
          <div className="portrait-frame">
            <img
              src={character.thumbnailImage || "/placeholder.jpg"}
              alt={character.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex flex-wrap gap-2">
              <span className={`series-badge ${badge.className}`}>{badge.label}</span>
              <span className="role-badge">{character.role}</span>
              {character.details.divineCondition && (
                <button
                  onClick={() => setShowDivineModal(character.details.divineCondition!)}
                  className="series-badge badge-divine"
                >
                  {character.details.divineCondition}
                </button>
              )}
            </div>
            <p className="mt-5 text-sm text-zinc-500">{series.title}</p>
            <h1 className="heading-display mt-2 text-5xl leading-tight text-zinc-100 md:text-7xl">
              {character.name}
            </h1>
            {character.details.quote && (
              <blockquote className="mt-6 max-w-2xl border-l border-rose-900/70 pl-5 text-lg leading-8 text-zinc-300">
                &quot;{character.details.quote}&quot;
              </blockquote>
            )}
          </div>
        </div>
      </section>

      <section className="dossier-container grid gap-5 py-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-5">
          <article className="archive-panel p-6 md:p-8">
            <div className="detail-label">Biography</div>
            <p className="mt-4 text-base leading-8 text-zinc-300">{character.details.fullBio}</p>
          </article>

          {character.details.specialAbility && (
            <article className="archive-panel p-6 md:p-8">
              <div className="detail-label">Special Ability</div>
              <h2 className="mt-2 text-xl font-semibold text-zinc-100">Kemampuan Spesial</h2>
              <p className="mt-4 text-base leading-8 text-zinc-300">{character.details.specialAbility}</p>
            </article>
          )}

          {character.details.stats && (
            <article className="archive-panel p-6 md:p-8">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="detail-label">Combat Reading</div>
                  <h2 className="mt-2 text-xl font-semibold text-zinc-100">Stat Dossier</h2>
                </div>
                <span className="text-sm text-zinc-500">
                  Cap: {series.statCap.toLocaleString()}
                </span>
              </div>

              <div className="space-y-4">
                {STAT_ITEMS.map((item) => {
                  const value = character.details.stats![item.key]
                  const percent = getStatPercent(value)
                  const overCap = value > series.statCap

                  return (
                    <div key={item.key}>
                      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                        <span className="text-zinc-300">{item.label}</span>
                        <span className="font-mono text-zinc-500">
                          {formatStatValue(value)}
                          {overCap ? " / over cap" : ""}
                        </span>
                      </div>
                      <div className="stat-track">
                        <div className="stat-fill" style={{ width: `${percent}%` }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>
          )}

          {character.details.gallery && character.details.gallery.length > 0 && (
            <article className="archive-panel p-6 md:p-8">
              <div className="detail-label mb-5">Gallery</div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {character.details.gallery.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    onClick={() =>
                      setSelectedGalleryImage(selectedGalleryImage === image ? null : image)
                    }
                    className={`gallery-tile ${
                      selectedGalleryImage === image ? "selected" : ""
                    }`}
                  >
                    <img
                      src={image || "/placeholder.jpg"}
                      alt={`${character.name} gallery ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {selectedGalleryImage && (
                <div className="mt-5 overflow-hidden border border-white/10 bg-black/30">
                  <img
                    src={selectedGalleryImage}
                    alt="Gallery preview"
                    className="mx-auto max-h-[72vh] w-full object-contain"
                  />
                </div>
              )}
            </article>
          )}
        </div>

        <aside className="space-y-5">
          <section className="archive-panel p-6">
            <div className="detail-label">Identity</div>
            <h2 className="mt-2 mb-5 text-xl font-semibold text-zinc-100">Informasi Dasar</h2>
            <div className="space-y-3">
              <div className="codex-row">
                <span>Usia</span>
                <strong>{character.details.age.toLocaleString()} tahun</strong>
              </div>
              <div className="codex-row">
                <span>Gender</span>
                <strong>{character.details.gender}</strong>
              </div>
              <div className="codex-row">
                <span>Tinggi</span>
                <strong>{character.details.height} cm</strong>
              </div>
              <div className="codex-row">
                <span>Berat</span>
                <strong>{character.details.weight} kg</strong>
              </div>
            </div>
          </section>

          {character.details.divineCondition && (
            <section className="archive-panel p-6">
              <div className="detail-label">Divine Condition</div>
              <button
                onClick={() => setShowDivineModal(character.details.divineCondition!)}
                className="dossier-button primary mt-4 w-full"
              >
                {character.details.divineCondition}
              </button>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Klik untuk membuka catatan condition yang mengikat karakter ini.
              </p>
            </section>
          )}

          {otherCharacters.length > 0 && (
            <section className="archive-panel p-6">
              <div className="detail-label mb-5">Karakter Lainnya</div>
              <div className="space-y-2">
                {otherCharacters.map((otherCharacter) => (
                  <button
                    key={otherCharacter.id}
                    onClick={() => handleCharacterClick(otherCharacter.id)}
                    className={`related-character ${
                      clickedCharacterId === otherCharacter.id ? "opacity-60" : ""
                    }`}
                  >
                    <img
                      src={otherCharacter.thumbnailImage || "/placeholder.jpg"}
                      alt={otherCharacter.name}
                      className="h-11 w-11 object-cover"
                    />
                    <span>{otherCharacter.name}</span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </aside>
      </section>

      {showDivineModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setShowDivineModal(null)}
        >
          <div
            className="modal-enter archive-panel w-full max-w-lg p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="detail-label">Divine Condition</div>
                <h2 className="mt-2 text-2xl font-semibold text-zinc-100">
                  {DIVINE_CONDITION_INFO[showDivineModal].title}
                </h2>
              </div>
              <button
                onClick={() => setShowDivineModal(null)}
                className="icon-button"
                aria-label="Tutup modal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-6 text-base leading-8 text-zinc-300">
              {DIVINE_CONDITION_INFO[showDivineModal].description}
            </p>
            <button onClick={() => setShowDivineModal(null)} className="dossier-button subtle mt-6 w-full">
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

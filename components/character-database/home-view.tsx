"use client"

import { Series } from "@/lib/character-data"
import { ArrowRight, Bolt, BookOpen, Database, Info, ShieldQuestion, Users } from "lucide-react"
import { useMemo, useState } from "react"

interface HomeViewProps {
  series: Series[]
  onSelectSeries: (seriesId: string) => void
  onNavigateToPowerSystem: () => void
}

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

const getSeriesSubtitle = (seriesId: string) => {
  switch (seriesId) {
    case "schism-termina":
      return "Timeline utama / Act 0"
    case "schism-the-beginning":
      return "Asal-usul / Primordium Vennamyseus"
    case "schism-hell":
      return "Unknown record / belum terungkap"
    default:
      return "Schism record"
  }
}

const getSeriesCode = (index: number) => `FILE-${String(index + 1).padStart(2, "0")}`

export function HomeView({ series, onSelectSeries, onNavigateToPowerSystem }: HomeViewProps) {
  const [showAbout, setShowAbout] = useState(false)
  const featuredSeries = series[1] ?? series[0]
  const characterCount = useMemo(
    () => series.reduce((acc, item) => acc + item.characters.length, 0),
    [series]
  )
  const divineCount = useMemo(
    () =>
      series.reduce(
        (acc, item) =>
          acc + item.characters.filter((character) => character.details.divineCondition).length,
        0
      ),
    [series]
  )

  if (showAbout) {
    return (
      <main className="min-h-screen bg-schism text-zinc-200">
        <nav className="dossier-nav">
          <div className="dossier-container flex h-16 items-center justify-between">
            <button
              onClick={() => setShowAbout(false)}
              className="brand-mark"
              aria-label="Kembali ke beranda"
            >
              SCHISM BASE
            </button>
            <button onClick={() => setShowAbout(false)} className="dossier-button subtle">
              Kembali
            </button>
          </div>
        </nav>

        <section className="dossier-container py-14 md:py-20">
          <div className="archive-panel mx-auto max-w-3xl p-6 md:p-10">
            <div className="detail-label mb-5">Archive Note</div>
            <h1 className="heading-display text-4xl text-zinc-100 md:text-5xl">
              Tentang Schism Base
            </h1>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              Schism Base adalah arsip karakter, keluarga Primordium, Divine Conditions, dan
              catatan power system untuk semesta Schism. Dibuat sebagai indeks publik yang padat,
              tenang, dan tetap membawa rasa cerita yang retak.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="metric-tile">
                <span>{series.length}</span>
                <p>Series aktif</p>
              </div>
              <div className="metric-tile">
                <span>{characterCount}</span>
                <p>Karakter</p>
              </div>
              <div className="metric-tile">
                <span>{divineCount}</span>
                <p>Divine files</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-schism text-zinc-200">
      <nav className="dossier-nav">
        <div className="dossier-container flex h-16 items-center justify-between gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="brand-mark"
            aria-label="Schism Base"
          >
            SCHISM BASE
          </button>

          <div className="hidden items-center gap-1 md:flex">
            <button className="nav-link active">Beranda</button>
            <button onClick={onNavigateToPowerSystem} className="nav-link">
              Power System
            </button>
          </div>

          <button onClick={() => setShowAbout(true)} className="icon-button" aria-label="Tentang">
            <Info className="h-4 w-4" />
          </button>
        </div>
      </nav>

      <section className="relative overflow-hidden border-b border-white/10">
        {featuredSeries && (
          <img
            src={featuredSeries.coverImage || "/placeholder.jpg"}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070708_0%,rgba(7,7,8,0.92)_42%,rgba(7,7,8,0.68)_100%)]" />
        <div className="absolute inset-0 scanline-soft" />

        <div className="dossier-container relative grid min-h-[calc(100vh-4rem)] items-end gap-10 py-12 md:grid-cols-[minmax(0,1fr)_380px] md:py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-400">
              <span className="h-1.5 w-1.5 bg-rose-500" />
              OFFICIAL SCHISM CHARACTER ARCHIVE
            </div>
            <h1 className="heading-display mt-6 text-6xl leading-none text-zinc-100 md:text-8xl">
              SCHISM
              <br />
              BASE
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300 md:text-xl">
              Arsip karakter untuk semesta yang retak: timeline utama, prekuel Primordium,
              entitas yang belum jelas, dan aturan Astral yang sering lebih aneh dari takdirnya.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const seriesSection = document.getElementById("series-section")
                  seriesSection?.scrollIntoView({ behavior: "smooth" })
                }}
                className="dossier-button primary"
              >
                <BookOpen className="h-4 w-4" />
                Jelajahi Series
              </button>
              <button onClick={onNavigateToPowerSystem} className="dossier-button subtle">
                <Bolt className="h-4 w-4" />
                Power System
              </button>
            </div>
          </div>

          <aside className="archive-panel p-5">
            <div className="detail-label">Current Index</div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="metric-tile">
                <span>{series.length}</span>
                <p>Series</p>
              </div>
              <div className="metric-tile">
                <span>{characterCount}</span>
                <p>Karakter</p>
              </div>
              <div className="metric-tile">
                <span>{divineCount}</span>
                <p>Divine</p>
              </div>
              <div className="metric-tile">
                <span>4</span>
                <p>Omniverse</p>
              </div>
            </div>
            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-sm leading-6 text-zinc-400">
                Indeks publik untuk membaca karakter, alur series, dan catatan Astral dalam satu
                tempat yang rapi.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section id="series-section" className="dossier-container py-12 md:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="detail-label">Explore The Fracture</div>
            <h2 className="section-header mt-2 text-zinc-100">Semua Series</h2>
          </div>
          <button onClick={onNavigateToPowerSystem} className="dossier-button subtle w-fit">
            <Database className="h-4 w-4" />
            Lihat codex Astral
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {series.map((item, index) => {
            const badge = getSeriesBadge(item.id)
            const subtitle = getSeriesSubtitle(item.id)

            return (
              <button
                key={item.id}
                onClick={() => onSelectSeries(item.id)}
                className="lore-card group text-left"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.coverImage || "/placeholder.jpg"}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.88))]" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className={`series-badge ${badge.className}`}>{badge.label}</span>
                    <span className="file-code">{getSeriesCode(index)}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm text-zinc-300">{subtitle}</p>
                    <h3 className="mt-1 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="min-h-12 text-sm leading-6 text-zinc-400 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                    <span className="inline-flex items-center gap-2 text-zinc-400">
                      <Users className="h-4 w-4" />
                      {item.characters.length} karakter
                    </span>
                    <span className="inline-flex items-center gap-2 text-zinc-200">
                      Buka
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </button>
            )
          })}

          <div className="lore-card muted flex min-h-[396px] flex-col justify-between p-5">
            <div>
              <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-black/30">
                <ShieldQuestion className="h-5 w-5 text-zinc-500" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-zinc-300">SCHISM: ???</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Babak baru masih tersimpan di balik retakan. Belum dibuka untuk indeks publik.
              </p>
            </div>
            <span className="detail-label">Pending Record</span>
          </div>
        </div>
      </section>
    </main>
  )
}

"use client"

import { ArrowLeft, Atom, BookMarked, Network, ShieldCheck, Sparkles } from "lucide-react"

interface PowerSystemViewProps {
  onBack: () => void
}

interface PrimordiumFamily {
  id: string
  name: string
  description: string
}

const PRIMORDIUM_FAMILIES: PrimordiumFamily[] = [
  {
    id: "vennamyseus",
    name: "Vennamyseus",
    description:
      "Keluarga dari Primordium 'Vespheria Vennamyseus', pendiri Godversal utusan ilahi kedua dengan bentuk Astral - Grand Alien. Diutus untuk merintis Omniverse pertama sejak awal big bang.",
  },
  {
    id: "eviessal",
    name: "Eviessal",
    description: "???",
  },
  {
    id: "aretheia",
    name: "Aretheia",
    description: "???",
  },
  {
    id: "asterion",
    name: "Asterion",
    description: "???",
  },
  {
    id: "serafhym",
    name: "Serafhym",
    description: "???",
  },
]

interface Omniverse {
  id: string
  name: string
  description: string
}

const OMNIVERSES: Omniverse[] = [
  {
    id: "omnivenna",
    name: "OmniVenna",
    description:
      "Omniverse 1 yang dirintis oleh Primordium Vennamyseus Family. Bentuk kehidupannya erat dengan Hukum Alam dan biologis.",
  },
  {
    id: "omnievitheia",
    name: "OmniEvitheia",
    description:
      "Omniverse 4 dan 5 yang secara bersamaan dirintis oleh Primordium Eviessal dan Aretheia Family. Bentuk kehidupannya paling variatif dan multi-fantasi.",
  },
  {
    id: "omnirion",
    name: "OmniRion",
    description:
      "Omniverse 2 yang dirintis oleh Primordium Asterion. Bentuk kehidupannya berupa makhluk kosmik dengan fragmen multi-dimensi.",
  },
  {
    id: "omnisera",
    name: "OmniSera",
    description:
      "Omniverse 3 yang dirintis oleh Primordium Serafhym. Bentuk kehidupan khusus untuk entitas Malaikat-Ilahi dan paling tidak variatif.",
  },
]

const DIVINE_CONDITIONS = [
  {
    name: "Zero-Entropy",
    description:
      "Tidak memiliki Astral Energy dan tidak dapat menguasai Astral Technique. Sebagai gantinya, fisik penderita menjadi absolut.",
  },
  {
    name: "Primal-Axiomatic",
    description:
      "Condition akar untuk primordite khusus yang menjadi pusat Astral Energy dan Astral Technique.",
  },
  {
    name: "Axiomatic",
    description:
      "Efisiensi dan output teknik dapat meningkat tanpa batas, tetapi mengikat fisiologis dan mental penderita.",
  },
  {
    name: "Morphogen",
    description:
      "Mengizinkan transformasi dan pembentukan entitas ciptaan sendiri berdasarkan Astral Energy pengguna.",
  },
]

export function PowerSystemView({ onBack }: PowerSystemViewProps) {
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
            <button className="nav-link active">Power System</button>
          </div>

          <button onClick={onBack} className="dossier-button subtle">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </button>
        </div>
      </nav>

      <section className="border-b border-white/10 bg-[linear-gradient(180deg,#09090a,#070708)]">
        <div className="dossier-container grid gap-8 py-12 md:grid-cols-[minmax(0,1fr)_320px] md:py-16">
          <div>
            <div className="detail-label">Codex / Astral Rules</div>
            <h1 className="heading-display mt-4 text-5xl leading-tight text-zinc-100 md:text-7xl">
              Power System
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              Sistem kekuatan yang mengatur seluruh semesta Schism: Astral Energy, Astral
              Technique, Divine Conditions, keluarga Primordium, dan omniverse yang saling punya
              aturan sedikit berbeda.
            </p>
          </div>

          <aside className="archive-panel p-5">
            <div className="detail-label">Codex Snapshot</div>
            <div className="mt-5 space-y-3">
              <div className="codex-row">
                <span>Divine Conditions</span>
                <strong>{DIVINE_CONDITIONS.length}</strong>
              </div>
              <div className="codex-row">
                <span>Families</span>
                <strong>{PRIMORDIUM_FAMILIES.length}</strong>
              </div>
              <div className="codex-row">
                <span>Omniverses</span>
                <strong>{OMNIVERSES.length}</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="dossier-container py-10 md:py-14">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="archive-panel p-6">
            <div className="icon-tile mb-5">
              <Atom className="h-5 w-5" />
            </div>
            <div className="detail-label">Core Energy</div>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-100">Astral Energy</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Energi dasar yang mengalir di seluruh omniverse. Setiap karakter punya afinitas dan
              batas yang berbeda terhadap energy ini.
            </p>
          </article>

          <article className="archive-panel p-6">
            <div className="icon-tile mb-5">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="detail-label">Ability Layer</div>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-100">Astral Technique</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Teknik lanjutan yang memanfaatkan Astral Energy. Beberapa bersifat turunan keluarga,
              beberapa muncul karena latihan, dan beberapa jelas-jelas anomali.
            </p>
          </article>

          <article className="archive-panel p-6">
            <div className="icon-tile mb-5">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="detail-label">Binding Rules</div>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-100">Divine Conditions</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Hukum Ilahi yang mengikat karakter tertentu. Condition ini dapat mengubah cara
              karakter bergerak, bertahan, mencipta, atau bahkan ada.
            </p>
          </article>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section className="archive-panel p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="icon-tile">
                <BookMarked className="h-5 w-5" />
              </div>
              <div>
                <div className="detail-label">4 Divine Conditions</div>
                <h2 className="text-2xl font-semibold text-zinc-100">Condition Records</h2>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {DIVINE_CONDITIONS.map((condition) => (
                <div key={condition.name} className="codex-card">
                  <h3>{condition.name}</h3>
                  <p>{condition.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="archive-panel p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="icon-tile">
                <Network className="h-5 w-5" />
              </div>
              <div>
                <div className="detail-label">Omniverse Map</div>
                <h2 className="text-2xl font-semibold text-zinc-100">Known Branches</h2>
              </div>
            </div>
            <div className="space-y-3">
              {OMNIVERSES.map((omniverse) => (
                <div key={omniverse.id} className="codex-row block-row">
                  <strong>{omniverse.name}</strong>
                  <span>{omniverse.description}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="archive-panel mt-5 p-6 md:p-8">
          <div className="detail-label mb-6">5 Primordium Families</div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {PRIMORDIUM_FAMILIES.map((family) => (
              <div key={family.id} className="codex-card">
                <h3>{family.name}</h3>
                <p>{family.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}

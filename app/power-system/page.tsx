import type { Metadata } from "next"
import Link from "next/link"
import { PowerSystemPageClient } from "@/components/character-database/power-system-page-client"

export const metadata: Metadata = {
  title: "Power System | Schism Base",
  description:
    "Learn about the power system in Schism Series: Astral Energy, Astral Technique, Divine Conditions (Zero-Entropy, Primal-Axiomatic, Axiomatic, Morphogen), the 5 Primordium Families, and the 4 Omniverses.",
  openGraph: {
    title: "Power System | Schism Base",
    description:
      "Complete guide to the Schism Series power system: Astral Energy, Astral Technique, Divine Conditions, Primordium Families, and Omniverses.",
    type: "article",
  },
}

const DIVINE_CONDITIONS = [
  {
    name: "Zero-Entropy",
    description:
      "Hukum fisik dimana penderitanya tidak memiliki Astral Energy dan tidak akan mampu menguasai Astral Tecnique, sebagai gantinya fisik penderita akan absolut, tidak dapat ditarget Astral Technique dengan efek 'pasti-kena'.",
  },
  {
    name: "Primal-Axiomatic",
    description:
      "Hukum Ilahi yang hanya terdapat pada primordite khusus yang menjadi akar sebuah Astral Energy dan Astral Technique. Penciptaan, Efisiensi, pengolahan Energy dan Output teknik dalam level tak terbatas.",
  },
  {
    name: "Axiomatic",
    description:
      "Hukum Ilahi berupa efisiensi, pengolahan Energy dan output teknik yang dapat meningkat tanpa batas. Sangat mengikat fisiologis dan mental penderita. Hanya akan ada SATU penderita hingga penderita terkait telah tiada.",
  },
  {
    name: "Morphogen",
    description:
      "Hukum Ilahi yang mengizinkan transformasi dan pembentukan entitas ciptaannya sendiri, ini bergantung pada Astral Energy mereka. Hanya akan ada SATU penderita hingga penderita terkait telah tiada.",
  },
]

const PRIMORDIUM_FAMILIES = [
  {
    name: "Vennamyseus",
    description:
      "Keluarga dari Primordium 'Vespheria Vennamyseus', merupakan pendiri Godversal utusan ilahi ke dua dengan bentuk Astral - Grand Alien. Diutus untuk merintis Omniverse Pertama sejak awal mula big bang.",
  },
  { name: "Eviessal", description: "???" },
  { name: "Aretheia", description: "???" },
  { name: "Asterion", description: "???" },
  { name: "Serafhym", description: "???" },
]

const OMNIVERSES = [
  {
    name: "OmniVenna",
    description:
      "Merupakan Omniverse 1 yang dirintis oleh Primordium Vennamyseus Family. Bentuk kehidupan yang erat dengan Hukum Alam dan Biologis.",
  },
  {
    name: "OmniEvitheia",
    description:
      "Merupakan Omniverse 4 dan 5 yang secara bersamaan dirintis oleh Primordium Eviessal dan Aretheia Family. Bentuk kehidupan paling variatif dan multi fantasi.",
  },
  {
    name: "OmniRion",
    description:
      "Omniverse 2 yang dirintis oleh Primordium Asterion. Bentuk kehidupan makhluk kosmik dengan fragmen multi dimensi.",
  },
  {
    name: "OmniSera",
    description:
      "Merupakan Omniverse 3 yang dirintis oleh Primordium Serafhym. Bentuk kehidupan yang khusus bagi para entitas Malaikat-Ilahi dan paling tidak variatif dimana hanya terdapat 1 jenis kehidupan.",
  },
]

export default function PowerSystemPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "Schism Base - Power System",
    description:
      "Complete guide to the power system in Schism Series including Astral Energy, Astral Technique, Divine Conditions, Primordium Families, and Omniverses.",
    articleSection: [
      "Astral Energy",
      "Astral Technique",
      "Divine Conditions",
      "Primordium Families",
      "Omniverses",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* SSR-readable content for crawlers */}
      <noscript>
        <article>
          <h1>Power System - Schism Series</h1>

          <h2>Astral Energy</h2>
          <p>
            Astral Energy adalah energi fundamental yang mengalir di seluruh semesta Schism Series.
            Energi yang merupakan dasar dari semua kekuatan supranatural dan kemampuan yang dimiliki
            oleh entitas dalam cerita. Setiap yang hidup memiliki Astral Energy kecuali yang gak
            punya, energy ini juga mengikat Genetik-Bentuk Kehidupan Biologis bagi makhluk fana
            (non-kosmik).
          </p>

          <h2>Astral Technique</h2>
          <p>
            Astral Technique adalah manifestasi Astral Energy agar dapat digunakan. Setiap Astral
            Technique ber-akar dari Primordium hingga kemudian menjadi cabang serta variasi unik
            mereka sendiri, Astral Technique dapat mencangkup segala hal dan tidak terikat hanya
            pada kekuatan bertarung saja.
          </p>

          <h2>Divine Conditions</h2>
          <p>
            Divine Conditions adalah Kondisi atau Penyakit Ilahi yang merupakan efek samping dari
            adanya Primordium itu sendiri, Hanya segelintir entitas yang terjangkit hukum kondisi
            ini.
          </p>
          {DIVINE_CONDITIONS.map((dc) => (
            <div key={dc.name}>
              <h3>{dc.name}</h3>
              <p>{dc.description}</p>
            </div>
          ))}

          <h2>5 Primordium Families</h2>
          <p>
            Lima keluarga Primordium adalah entitas pertama yang ada sejak awal penciptaan. Mereka
            adalah utusan ilahi yang membentuk dasar dari seluruh eksistensi.
          </p>
          {PRIMORDIUM_FAMILIES.map((fam) => (
            <div key={fam.name}>
              <h3>{fam.name}</h3>
              <p>{fam.description}</p>
            </div>
          ))}

          <h2>4 Omniverses</h2>
          <p>
            Setiap Primordium Family merintis Omniverse mereka sendiri dengan karakteristik kehidupan
            yang unik.
          </p>
          {OMNIVERSES.map((omni) => (
            <div key={omni.name}>
              <h3>{omni.name}</h3>
              <p>{omni.description}</p>
            </div>
          ))}

          <Link href="/">Back to Home</Link>
        </article>
      </noscript>
      {/* Semantic HTML visible to all crawlers */}
      <div className="sr-only" aria-hidden="false">
        <article>
          <h1>Power System - Schism Series</h1>
          <section>
            <h2>Astral Energy</h2>
            <p>
              Astral Energy adalah energi fundamental yang mengalir di seluruh semesta Schism Series.
              Energi yang merupakan dasar dari semua kekuatan supranatural dan kemampuan yang dimiliki
              oleh entitas dalam cerita.
            </p>
          </section>
          <section>
            <h2>Astral Technique</h2>
            <p>
              Astral Technique adalah manifestasi Astral Energy agar dapat digunakan. Setiap Astral
              Technique ber-akar dari Primordium.
            </p>
          </section>
          <section>
            <h2>Divine Conditions</h2>
            {DIVINE_CONDITIONS.map((dc) => (
              <div key={dc.name}>
                <h3>{dc.name}</h3>
                <p>{dc.description}</p>
              </div>
            ))}
          </section>
          <section>
            <h2>5 Primordium Families</h2>
            {PRIMORDIUM_FAMILIES.map((fam) => (
              <div key={fam.name}>
                <h3>{fam.name}</h3>
                <p>{fam.description}</p>
              </div>
            ))}
          </section>
          <section>
            <h2>4 Omniverses</h2>
            {OMNIVERSES.map((omni) => (
              <div key={omni.name}>
                <h3>{omni.name}</h3>
                <p>{omni.description}</p>
              </div>
            ))}
          </section>
        </article>
      </div>
      <PowerSystemPageClient />
    </>
  )
}

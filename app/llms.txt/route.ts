import { seriesData } from "@/lib/character-data"

export async function GET() {
  const lines: string[] = []

  lines.push("# Schism Base")
  lines.push("")
  lines.push("> Database karakter untuk Schism Series. Berisi informasi lengkap tentang karakter, power system, divine conditions, primordium families, dan omniverses.")
  lines.push("")
  lines.push("Bahasa utama konten: Bahasa Indonesia (ID)")
  lines.push("")

  // Overview
  lines.push("## Overview")
  lines.push("")
  lines.push("Schism Series adalah seris fiksi yang berisi beberapa sub-series dengan karakter-karakter unik.")
  lines.push("Website ini berfungsi sebagai database karakter resmi yang mencakup:")
  lines.push("- Profil karakter lengkap (bio, statistik, kemampuan)")
  lines.push("- Power System (Astral Energy, Astral Technique)")
  lines.push("- Divine Conditions (Zero-Entropy, Primal-Axiomatic, Axiomatic, Morphogen)")
  lines.push("- 5 Primordium Families (Vennamyseus, Eviessal, Aretheia, Asterion, Serafhym)")
  lines.push("- 4 Omniverses (OmniVenna, OmniEvitheia, OmniRion, OmniSera)")
  lines.push("")

  // Series listing
  lines.push("## Series")
  lines.push("")

  for (const series of seriesData) {
    lines.push(`### ${series.title}`)
    lines.push("")
    lines.push(`${series.description}`)
    lines.push(`Stat Cap: ${series.statCap}`)
    lines.push(`URL: /series/${series.id}`)
    lines.push("")
    lines.push("#### Characters:")
    lines.push("")

    for (const char of series.characters) {
      lines.push(`##### ${char.name}`)
      lines.push(`- Role: ${char.role}`)
      lines.push(`- Bio: ${char.details.fullBio}`)
      lines.push(`- Age: ${char.details.age} tahun`)
      lines.push(`- Gender: ${char.details.gender}`)
      lines.push(`- Height: ${char.details.height} cm`)
      lines.push(`- Weight: ${char.details.weight} kg`)
      if (char.details.quote) {
        lines.push(`- Quote: "${char.details.quote}"`)
      }
      if (char.details.specialAbility) {
        lines.push(`- Special Ability: ${char.details.specialAbility}`)
      }
      if (char.details.divineCondition) {
        lines.push(`- Divine Condition: ${char.details.divineCondition}`)
      }
      if (char.details.stats) {
        lines.push(`- Stats: Strength=${char.details.stats.strength}, Agility=${char.details.stats.agility}, Resilience=${char.details.stats.resilience}, Intelligence=${char.details.stats.intelligence}, AstralTechnique=${char.details.stats.astralTechnique}`)
      }
      lines.push(`- URL: /series/${series.id}/character/${char.id}`)
      lines.push("")
    }
  }

  // Power System
  lines.push("## Power System")
  lines.push("URL: /power-system")
  lines.push("")
  lines.push("### Astral Energy")
  lines.push("Astral Energy adalah energi fundamental yang mengalir di seluruh semesta Schism Series. Energi yang merupakan dasar dari semua kekuatan supranatural dan kemampuan yang dimiliki oleh entitas dalam cerita. Setiap yang hidup memiliki Astral Energy kecuali yang gak punya, energy ini juga mengikat Genetik-Bentuk Kehidupan Biologis bagi makhluk fana (non-kosmik).")
  lines.push("")
  lines.push("### Astral Technique")
  lines.push("Astral Technique adalah manifestasi Astral Energy agar dapat digunakan. Setiap Astral Technique ber-akar dari Primordium hingga kemudian menjadi cabang serta variasi unik mereka sendiri, Astral Technique dapat mencangkup segala hal dan tidak terikat hanya pada kekuatan bertarung saja.")
  lines.push("")
  lines.push("### Divine Conditions")
  lines.push("Divine Conditions adalah Kondisi atau Penyakit Ilahi yang merupakan efek samping dari adanya Primordium itu sendiri.")
  lines.push("")
  lines.push("1. Zero-Entropy: Hukum fisik dimana penderitanya tidak memiliki Astral Energy dan tidak akan mampu menguasai Astral Technique, sebagai gantinya fisik penderita akan absolut, tidak dapat ditarget Astral Technique dengan efek 'pasti-kena'.")
  lines.push("2. Primal-Axiomatic: Hukum Ilahi yang hanya terdapat pada primordite khusus yang menjadi akar sebuah Astral Energy dan Astral Technique. Penciptaan, Efisiensi, pengolahan Energy dan Output teknik dalam level tak terbatas.")
  lines.push("3. Axiomatic: Hukum Ilahi berupa efisiensi, pengolahan Energy dan output teknik yang dapat meningkat tanpa batas. Sangat mengikat fisiologis dan mental penderita. Hanya akan ada SATU penderita hingga penderita terkait telah tiada.")
  lines.push("4. Morphogen: Hukum Ilahi yang mengizinkan transformasi dan pembentukan entitas ciptaannya sendiri, ini bergantung pada Astral Energy mereka. Hanya akan ada SATU penderita hingga penderita terkait telah tiada.")
  lines.push("")
  lines.push("### 5 Primordium Families")
  lines.push("1. Vennamyseus: Keluarga dari Primordium 'Vespheria Vennamyseus', pendiri Godversal utusan ilahi ke dua dengan bentuk Astral - Grand Alien.")
  lines.push("2. Eviessal: ???")
  lines.push("3. Aretheia: ???")
  lines.push("4. Asterion: ???")
  lines.push("5. Serafhym: ???")
  lines.push("")
  lines.push("### 4 Omniverses")
  lines.push("1. OmniVenna: Omniverse 1, dirintis Vennamyseus. Kehidupan erat dengan Hukum Alam dan Biologis.")
  lines.push("2. OmniEvitheia: Omniverse 4&5, dirintis Eviessal dan Aretheia. Kehidupan paling variatif dan multi fantasi.")
  lines.push("3. OmniRion: Omniverse 2, dirintis Asterion. Makhluk kosmik dengan fragmen multi dimensi.")
  lines.push("4. OmniSera: Omniverse 3, dirintis Serafhym. Khusus entitas Malaikat-Ilahi, hanya 1 jenis kehidupan.")
  lines.push("")

  // Navigation
  lines.push("## Site Structure")
  lines.push("- / (Home - series listing)")
  lines.push("- /power-system (Power system guide)")
  for (const series of seriesData) {
    lines.push(`- /series/${series.id} (${series.title})`)
    for (const char of series.characters) {
      lines.push(`  - /series/${series.id}/character/${char.id} (${char.name})`)
    }
  }

  const content = lines.join("\n")

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}

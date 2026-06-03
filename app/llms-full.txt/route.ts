import { seriesData } from "@/lib/character-data"

export async function GET() {
  const lines: string[] = []

  lines.push("# Schism Base (Full Content)")
  lines.push("")
  lines.push("> This is the complete, machine-readable version of all content on this website.")
  lines.push("> Language: Bahasa Indonesia (ID)")
  lines.push("")

  // Complete character data dump
  for (const series of seriesData) {
    lines.push(`${"=".repeat(60)}`)
    lines.push(`SERIES: ${series.title}`)
    lines.push(`${"=".repeat(60)}`)
    lines.push(`Description: ${series.description}`)
    lines.push(`Stat Cap: ${series.statCap}`)
    lines.push(`Total Characters: ${series.characters.length}`)
    lines.push("")

    for (const char of series.characters) {
      lines.push(`${"─".repeat(40)}`)
      lines.push(`CHARACTER: ${char.name}`)
      lines.push(`${"─".repeat(40)}`)
      lines.push(`Role: ${char.role}`)
      lines.push(`Short Description: ${char.shortDescription}`)
      lines.push(`Full Bio: ${char.details.fullBio}`)
      lines.push(`Age: ${char.details.age} tahun`)
      lines.push(`Gender: ${char.details.gender}`)
      lines.push(`Height: ${char.details.height} cm`)
      lines.push(`Weight: ${char.details.weight} kg`)
      
      if (char.details.quote) {
        lines.push(`Quote: "${char.details.quote}"`)
      }
      if (char.details.specialAbility) {
        lines.push(`Special Ability: ${char.details.specialAbility}`)
      }
      if (char.details.divineCondition) {
        lines.push(`Divine Condition: ${char.details.divineCondition}`)
      }
      if (char.details.stats) {
        lines.push(`Stats:`)
        lines.push(`  Strength: ${char.details.stats.strength} / ${series.statCap}`)
        lines.push(`  Agility: ${char.details.stats.agility} / ${series.statCap}`)
        lines.push(`  Resilience: ${char.details.stats.resilience} / ${series.statCap}`)
        lines.push(`  Intelligence: ${char.details.stats.intelligence} / ${series.statCap}`)
        lines.push(`  Astral Technique: ${char.details.stats.astralTechnique} / ${series.statCap}`)
      }
      if (char.details.gallery && char.details.gallery.length > 0) {
        lines.push(`Gallery Images: ${char.details.gallery.length} images`)
        char.details.gallery.forEach((img, i) => {
          lines.push(`  Image ${i + 1}: ${img}`)
        })
      }
      lines.push("")
    }
  }

  // Power System full content
  lines.push(`${"=".repeat(60)}`)
  lines.push("POWER SYSTEM")
  lines.push(`${"=".repeat(60)}`)
  lines.push("")

  lines.push("## Astral Energy")
  lines.push("Astral Energy adalah energi fundamental yang mengalir di seluruh semesta Schism Series. Energi yang merupakan dasar dari semua kekuatan supranatural dan kemampuan yang dimiliki oleh entitas dalam cerita. Setiap yang hidup memiliki Astral Energy kecuali yang gak punya, energy ini juga mengikat Genetik-Bentuk Kehidupan Biologis bagi makhluk fana (non-kosmik).")
  lines.push("")

  lines.push("## Astral Technique")
  lines.push("Astral Technique adalah manifestasi Astral Energy agar dapat digunakan. Setiap Astral Technique ber-akar dari Primordium hingga kemudian menjadi cabang serta variasi unik mereka sendiri, Astral Technique dapat mencangkup segala hal dan tidak terikat hanya pada kekuatan bertarung saja.")
  lines.push("")

  lines.push("## Divine Conditions")
  lines.push("Divine Conditions adalah Kondisi atau Penyakit Ilahi yang merupakan efek samping dari adanya Primordium itu sendiri, Hanya segelintir entitas yang terjangkit hukum kondisi ini.")
  lines.push("")
  lines.push("### Zero-Entropy")
  lines.push("Hukum fisik dimana penderitanya tidak memiliki Astral Energy dan tidak akan mampu menguasai Astral Technique, sebagai gantinya fisik penderita akan absolut, tidak dapat ditarget Astral Technique dengan efek 'pasti-kena'.")
  lines.push("")
  lines.push("### Primal-Axiomatic")
  lines.push("Hukum Ilahi yang hanya terdapat pada primordite khusus yang menjadi akar sebuah Astral Energy dan Astral Technique. Penciptaan, Efisiensi, pengolahan Energy dan Output teknik dalam level tak terbatas.")
  lines.push("")
  lines.push("### Axiomatic")
  lines.push("Hukum Ilahi berupa efisiensi, pengolahan Energy dan output teknik yang dapat meningkat tanpa batas. Sangat mengikat fisiologis dan mental penderita. Hanya akan ada SATU penderita hingga penderita terkait telah tiada.")
  lines.push("")
  lines.push("### Morphogen")
  lines.push("Hukum Ilahi yang mengizinkan transformasi dan pembentukan entitas ciptaannya sendiri, ini bergantung pada Astral Energy mereka. Hanya akan ada SATU penderita hingga penderita terkait telah tiada.")
  lines.push("")

  lines.push("## 5 Primordium Families")
  lines.push("Lima keluarga Primordium adalah entitas pertama yang ada sejak awal penciptaan. Mereka adalah utusan ilahi yang membentuk dasar dari seluruh eksistensi.")
  lines.push("")
  lines.push("### 1. Vennamyseus")
  lines.push("Keluarga dari Primordium 'Vespheria Vennamyseus', merupakan pendiri Godversal utusan ilahi ke dua dengan bentuk Astral - Grand Alien. Diutus untuk merintis Omniverse Pertama sejak awal mula big bang.")
  lines.push("### 2. Eviessal - ???")
  lines.push("### 3. Aretheia - ???")
  lines.push("### 4. Asterion - ???")
  lines.push("### 5. Serafhym - ???")
  lines.push("")

  lines.push("## 4 Omniverses")
  lines.push("Setiap Primordium Family merintis Omniverse mereka sendiri dengan karakteristik kehidupan yang unik. Terdapat 4 Omniverse utama yang menjadi wadah bagi seluruh eksistensi.")
  lines.push("")
  lines.push("### 1. OmniVenna")
  lines.push("Merupakan Omniverse 1 yang dirintis oleh Primordium Vennamyseus Family. Bentuk kehidupan yang erat dengan Hukum Alam dan Biologis.")
  lines.push("")
  lines.push("### 2. OmniEvitheia")
  lines.push("Merupakan Omniverse 4 dan 5 yang secara bersamaan dirintis oleh Primordium Eviessal dan Aretheia Family. Bentuk kehidupan paling variatif dan multi fantasi.")
  lines.push("")
  lines.push("### 3. OmniRion")
  lines.push("Omniverse 2 yang dirintis oleh Primordium Asterion. Bentuk kehidupan makhluk kosmik dengan fragmen multi dimensi.")
  lines.push("")
  lines.push("### 4. OmniSera")
  lines.push("Merupakan Omniverse 3 yang dirintis oleh Primordium Serafhym. Bentuk kehidupan yang khusus bagi para entitas Malaikat-Ilahi dan paling tidak variatif dimana hanya terdapat 1 jenis kehidupan.")
  lines.push("")

  const content = lines.join("\n")

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}

import { seriesData } from "@/lib/character-data"
import { NextResponse } from "next/server"

export async function GET() {
  const data = {
    name: "Schism Base",
    description:
      "Database karakter untuk Schism Series, berisi informasi lengkap tentang karakter, power system, divine conditions, primordium families, dan omniverses.",
    language: "id",
    series: seriesData.map((series) => ({
      id: series.id,
      title: series.title,
      description: series.description,
      coverImage: series.coverImage,
      statCap: series.statCap,
      url: `/series/${series.id}`,
      characters: series.characters.map((char) => ({
        id: char.id,
        name: char.name,
        role: char.role,
        thumbnailImage: char.thumbnailImage,
        shortDescription: char.shortDescription,
        url: `/series/${series.id}/character/${char.id}`,
        details: {
          fullBio: char.details.fullBio,
          age: char.details.age,
          height: char.details.height,
          weight: char.details.weight,
          gender: char.details.gender,
          quote: char.details.quote || null,
          specialAbility: char.details.specialAbility || null,
          divineCondition: char.details.divineCondition || null,
          stats: char.details.stats || null,
        },
      })),
    })),
    powerSystem: {
      astralEnergy:
        "Astral Energy adalah energi fundamental yang mengalir di seluruh semesta Schism Series. Energi yang merupakan dasar dari semua kekuatan supranatural dan kemampuan yang dimiliki oleh entitas dalam cerita.",
      astralTechnique:
        "Astral Technique adalah manifestasi Astral Energy agar dapat digunakan. Setiap Astral Technique ber-akar dari Primordium hingga kemudian menjadi cabang serta variasi unik mereka sendiri.",
      divineConditions: [
        {
          name: "Zero-Entropy",
          description:
            "Hukum fisik dimana penderitanya tidak memiliki Astral Energy dan tidak akan mampu menguasai Astral Technique, sebagai gantinya fisik penderita akan absolut.",
        },
        {
          name: "Primal-Axiomatic",
          description:
            "Hukum Ilahi yang hanya terdapat pada primordite khusus yang menjadi akar sebuah Astral Energy dan Astral Technique. Level tak terbatas.",
        },
        {
          name: "Axiomatic",
          description:
            "Hukum Ilahi berupa efisiensi, pengolahan Energy dan output teknik yang dapat meningkat tanpa batas. Hanya SATU penderita.",
        },
        {
          name: "Morphogen",
          description:
            "Hukum Ilahi yang mengizinkan transformasi dan pembentukan entitas ciptaannya sendiri. Hanya SATU penderita.",
        },
      ],
      primordiumFamilies: [
        { name: "Vennamyseus", description: "Pendiri Godversal utusan ilahi ke dua, merintis Omniverse Pertama." },
        { name: "Eviessal", description: "???" },
        { name: "Aretheia", description: "???" },
        { name: "Asterion", description: "???" },
        { name: "Serafhym", description: "???" },
      ],
      omniverses: [
        { name: "OmniVenna", description: "Omniverse 1, dirintis Vennamyseus. Kehidupan Biologis." },
        { name: "OmniEvitheia", description: "Omniverse 4&5, dirintis Eviessal & Aretheia. Multi fantasi." },
        { name: "OmniRion", description: "Omniverse 2, dirintis Asterion. Makhluk kosmik." },
        { name: "OmniSera", description: "Omniverse 3, dirintis Serafhym. Entitas Malaikat-Ilahi." },
      ],
    },
  }

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "Access-Control-Allow-Origin": "*",
    },
  })
}

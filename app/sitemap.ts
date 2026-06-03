import type { MetadataRoute } from "next"
import { seriesData } from "@/lib/character-data"

const BASE_URL = "https://schism-base.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/power-system`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  // Add series pages
  for (const series of seriesData) {
    routes.push({
      url: `${BASE_URL}/series/${series.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })

    // Add character pages
    for (const character of series.characters) {
      routes.push({
        url: `${BASE_URL}/series/${series.id}/character/${character.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      })
    }
  }

  return routes
}

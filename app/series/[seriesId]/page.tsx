import { seriesData } from "@/lib/character-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { SeriesPageClient } from "@/components/character-database/series-page-client"

interface Props {
  params: Promise<{ seriesId: string }>
}

export async function generateStaticParams() {
  return seriesData.map((series) => ({
    seriesId: series.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seriesId } = await params
  const series = seriesData.find((s) => s.id === seriesId)
  if (!series) return { title: "Series Not Found" }

  return {
    title: `${series.title} | Schism Base`,
    description: series.description,
    openGraph: {
      title: `${series.title} | Schism Base`,
      description: series.description,
      images: [{ url: series.coverImage, width: 1200, height: 630, alt: series.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${series.title} | Schism Base`,
      description: series.description,
      images: [series.coverImage],
    },
  }
}

export default async function SeriesPage({ params }: Props) {
  const { seriesId } = await params
  const series = seriesData.find((s) => s.id === seriesId)
  if (!series) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    name: series.title,
    description: series.description,
    image: series.coverImage,
    hasPart: series.characters.map((char) => ({
      "@type": "FictionalCharacter",
      name: char.name,
      description: char.shortDescription,
      image: char.thumbnailImage,
      url: `/series/${series.id}/character/${char.id}`,
    })),
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
          <h1>{series.title}</h1>
          <p>{series.description}</p>
          <h2>Characters</h2>
          <ul>
            {series.characters.map((char) => (
              <li key={char.id}>
                <a href={`/series/${series.id}/character/${char.id}`}>
                  <strong>{char.name}</strong> ({char.role}) - {char.shortDescription}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </noscript>
      {/* Semantic HTML visible to all crawlers */}
      <div className="sr-only" aria-hidden="false">
        <article itemScope itemType="https://schema.org/CreativeWorkSeries">
          <h1 itemProp="name">{series.title}</h1>
          <p itemProp="description">{series.description}</p>
          <section>
            <h2>Characters in {series.title}</h2>
            {series.characters.map((char) => (
              <div key={char.id} itemScope itemType="https://schema.org/Person">
                <h3 itemProp="name">{char.name}</h3>
                <p>Role: {char.role}</p>
                <p itemProp="description">{char.shortDescription}</p>
                <p>Full Bio: {char.details.fullBio}</p>
                <p>Age: {char.details.age} years</p>
                <p>Height: {char.details.height} cm</p>
                <p>Weight: {char.details.weight} kg</p>
                <p>Gender: {char.details.gender}</p>
                {char.details.quote && <blockquote>{char.details.quote}</blockquote>}
                {char.details.specialAbility && <p>Special Ability: {char.details.specialAbility}</p>}
                {char.details.divineCondition && <p>Divine Condition: {char.details.divineCondition}</p>}
                {char.details.stats && (
                  <ul>
                    <li>Strength: {char.details.stats.strength}</li>
                    <li>Agility: {char.details.stats.agility}</li>
                    <li>Resilience: {char.details.stats.resilience}</li>
                    <li>Intelligence: {char.details.stats.intelligence}</li>
                    <li>Astral Technique: {char.details.stats.astralTechnique}</li>
                  </ul>
                )}
                <a href={`/series/${series.id}/character/${char.id}`}>View {char.name} details</a>
              </div>
            ))}
          </section>
        </article>
      </div>
      <SeriesPageClient seriesId={seriesId} />
    </>
  )
}

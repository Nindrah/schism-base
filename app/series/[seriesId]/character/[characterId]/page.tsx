import { seriesData } from "@/lib/character-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { CharacterPageClient } from "@/components/character-database/character-page-client"

interface Props {
  params: Promise<{ seriesId: string; characterId: string }>
}

export async function generateStaticParams() {
  const paths: { seriesId: string; characterId: string }[] = []
  for (const series of seriesData) {
    for (const char of series.characters) {
      paths.push({ seriesId: series.id, characterId: char.id })
    }
  }
  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seriesId, characterId } = await params
  const series = seriesData.find((s) => s.id === seriesId)
  const character = series?.characters.find((c) => c.id === characterId)
  if (!series || !character) return { title: "Character Not Found" }

  const title = `${character.name} - ${series.title} | Schism Base`
  const description = character.details.fullBio

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: character.thumbnailImage, width: 600, height: 600, alt: character.name }],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${character.name} - ${series.title}`,
      description: character.shortDescription,
      images: [character.thumbnailImage],
    },
  }
}

export default async function CharacterPage({ params }: Props) {
  const { seriesId, characterId } = await params
  const series = seriesData.find((s) => s.id === seriesId)
  const character = series?.characters.find((c) => c.id === characterId)
  if (!series || !character) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: character.name,
    description: character.details.fullBio,
    image: character.thumbnailImage,
    height: `${character.details.height} cm`,
    weight: `${character.details.weight} kg`,
    gender: character.details.gender,
    jobTitle: character.role,
    memberOf: {
      "@type": "CreativeWorkSeries",
      name: series.title,
    },
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
          <h1>{character.name}</h1>
          <p>Series: {series.title}</p>
          <p>Role: {character.role}</p>
          <p>{character.details.fullBio}</p>
          <h2>Basic Info</h2>
          <ul>
            <li>Age: {character.details.age} years</li>
            <li>Gender: {character.details.gender}</li>
            <li>Height: {character.details.height} cm</li>
            <li>Weight: {character.details.weight} kg</li>
          </ul>
          {character.details.quote && (
            <>
              <h2>Quote</h2>
              <blockquote>{character.details.quote}</blockquote>
            </>
          )}
          {character.details.specialAbility && (
            <>
              <h2>Special Ability</h2>
              <p>{character.details.specialAbility}</p>
            </>
          )}
          {character.details.divineCondition && (
            <>
              <h2>Divine Condition</h2>
              <p>{character.details.divineCondition}</p>
            </>
          )}
          {character.details.stats && (
            <>
              <h2>Stats (cap: {series.statCap})</h2>
              <ul>
                <li>Strength: {character.details.stats.strength}/{series.statCap}</li>
                <li>Agility: {character.details.stats.agility}/{series.statCap}</li>
                <li>Resilience: {character.details.stats.resilience}/{series.statCap}</li>
                <li>Intelligence: {character.details.stats.intelligence}/{series.statCap}</li>
                <li>Astral Technique: {character.details.stats.astralTechnique}/{series.statCap}</li>
              </ul>
            </>
          )}
          <h2>Other Characters in {series.title}</h2>
          <ul>
            {series.characters
              .filter((c) => c.id !== character.id)
              .map((c) => (
                <li key={c.id}>
                  <a href={`/series/${series.id}/character/${c.id}`}>{c.name}</a>
                </li>
              ))}
          </ul>
          <a href={`/series/${series.id}`}>Back to {series.title}</a>
        </article>
      </noscript>
      {/* Semantic HTML visible to all crawlers */}
      <div className="sr-only" aria-hidden="false">
        <article itemScope itemType="https://schema.org/Person">
          <h1 itemProp="name">{character.name}</h1>
          <p>Series: <span>{series.title}</span></p>
          <p>Role: <span itemProp="jobTitle">{character.role}</span></p>
          <p itemProp="description">{character.details.fullBio}</p>
          <section>
            <h2>Basic Information</h2>
            <p>Age: {character.details.age} years</p>
            <p>Gender: <span itemProp="gender">{character.details.gender}</span></p>
            <p>Height: <span itemProp="height">{character.details.height} cm</span></p>
            <p>Weight: <span itemProp="weight">{character.details.weight} kg</span></p>
          </section>
          {character.details.quote && (
            <section>
              <h2>Quote</h2>
              <blockquote>{character.details.quote}</blockquote>
            </section>
          )}
          {character.details.specialAbility && (
            <section>
              <h2>Special Ability</h2>
              <p>{character.details.specialAbility}</p>
            </section>
          )}
          {character.details.divineCondition && (
            <section>
              <h2>Divine Condition</h2>
              <p>{character.details.divineCondition}</p>
            </section>
          )}
          {character.details.stats && (
            <section>
              <h2>Combat Stats (Cap: {series.statCap})</h2>
              <ul>
                <li>Strength: {character.details.stats.strength}/{series.statCap}</li>
                <li>Agility: {character.details.stats.agility}/{series.statCap}</li>
                <li>Resilience: {character.details.stats.resilience}/{series.statCap}</li>
                <li>Intelligence: {character.details.stats.intelligence}/{series.statCap}</li>
                <li>Astral Technique: {character.details.stats.astralTechnique}/{series.statCap}</li>
              </ul>
            </section>
          )}
        </article>
      </div>
      <CharacterPageClient seriesId={seriesId} characterId={characterId} />
    </>
  )
}

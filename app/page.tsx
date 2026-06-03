import { seriesData } from "@/lib/character-data"
import { HomePageClient } from "@/components/character-database/home-page-client"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Schism Base",
    description:
      "Database karakter untuk Schism Series, berisi informasi lengkap tentang karakter, power system, divine conditions, primordium families, dan omniverses.",
    url: "/",
    potentialAction: {
      "@type": "SearchAction",
      target: "/?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    hasPart: seriesData.map((series) => ({
      "@type": "CreativeWorkSeries",
      name: series.title,
      description: series.description,
      image: series.coverImage,
      url: `/series/${series.id}`,
      character: series.characters.map((char) => ({
        "@type": "FictionalCharacter",
        name: char.name,
        description: char.shortDescription,
        url: `/series/${series.id}/character/${char.id}`,
      })),
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
        <main>
          <h1>Schism Base</h1>
          <p>
            Database karakter untuk Schism Series, berisi informasi lengkap tentang karakter, power
            system, divine conditions, primordium families, dan omniverses.
          </p>
          <nav>
            <h2>Series</h2>
            <ul>
              {seriesData.map((series) => (
                <li key={series.id}>
                  <a href={`/series/${series.id}`}>
                    <strong>{series.title}</strong> - {series.description}
                  </a>
                  <ul>
                    {series.characters.map((char) => (
                      <li key={char.id}>
                        <a href={`/series/${series.id}/character/${char.id}`}>
                          {char.name} ({char.role}) - {char.shortDescription}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <h2>Other Pages</h2>
            <ul>
              <li>
                <a href="/power-system">Power System Guide</a>
              </li>
            </ul>
          </nav>
        </main>
      </noscript>
      {/* Semantic HTML visible to all crawlers */}
      <div className="sr-only" aria-hidden="false">
        <main>
          <h1>Schism Base</h1>
          <p>
            Database karakter lengkap untuk Schism Series. Berisi informasi detail tentang setiap
            karakter, power system (Astral Energy, Astral Technique), Divine Conditions, 5
            Primordium Families, dan 4 Omniverses.
          </p>
          <nav aria-label="Series Navigation">
            <h2>Available Series</h2>
            {seriesData.map((series) => (
              <section key={series.id}>
                <h3>
                  <a href={`/series/${series.id}`}>{series.title}</a>
                </h3>
                <p>{series.description}</p>
                <h4>Characters in {series.title}</h4>
                <ul>
                  {series.characters.map((char) => (
                    <li key={char.id}>
                      <a href={`/series/${series.id}/character/${char.id}`}>
                        {char.name}
                      </a>{" "}
                      - {char.role} - {char.shortDescription}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>
          <nav aria-label="Additional Pages">
            <h2>Additional Information</h2>
            <ul>
              <li>
                <a href="/power-system">
                  Power System - Astral Energy, Astral Technique, Divine Conditions, Primordium
                  Families, Omniverses
                </a>
              </li>
            </ul>
          </nav>
        </main>
      </div>
      <HomePageClient />
    </>
  )
}

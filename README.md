# Schism Base

Character archive untuk Schism Series (draft buatan gwehj yg blm jadi-jadi). isinya page karakter, series, lore, dan power system dalam tampilan gelap yang padat dan sinematik.

## Pages

- `/` - home archive dan daftar series.
- `/series/[seriesId]` - daftar karakter per series.
- `/series/[seriesId]/character/[characterId]` - detail karakter.
- `/power-system` - codex Astral Energy, Astral Technique, Divine Conditions, Primordium Families, dan Omniverses.

## Run Locally

```bash
pnpm install
pnpm dev
```

## Verify

```bash
pnpm build
pnpm exec tsc --noEmit
```

Catatan: jalur verifikasi utama adalah `pnpm lint`, `pnpm build`, dan `pnpm exec tsc --noEmit`.

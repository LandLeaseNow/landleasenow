# Landlease Now

A Next.js 14 (App Router) + React + TypeScript + Tailwind directory site for
Australian land lease / lifestyle communities, for `landleasenow.com.au`.

This follows the same general directory pattern as build-to-rent-style sites
(search hero → stats → featured listings → browse by category/region → top
operators → newsletter), rebuilt from scratch with original copy, design
tokens and a data model suited to Australian land lease communities.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Project structure

- `app/` — pages (App Router): home, `/communities`, `/communities/[slug]`,
  `/operators`, `/operators/[slug]`, `/regions`, `/regions/[state]`
- `components/` — Header, Footer, CommunityCard, StatBar
- `lib/data.ts` — the site's dataset, see below
- `lib/types.ts` — shared TypeScript types for the data model
- `public/brand/` — logo mark and favicons

## ⚠️ About the data

`lib/data.ts` now contains **28 real communities across 10 real operators**
(Ingenia Communities, Stockland Halcyon, Hampshire Villages, Eureka Group,
GemLife, Lifestyle Communities, Hometown Australia, Palm Lake Resort,
Living Gems, Serenitas), compiled from public news coverage and operator
announcements. Facts are summarised in original wording, not copied from
any source, and no images are included. Coverage now spans NSW, VIC, QLD
and WA.

This is a growing seed dataset, not a finished directory. For context: the
Australian land lease sector has **several hundred** purpose-built
communities nationally (Ingenia alone runs 35; Hometown Australia around
58-60; Serenitas 34; Palm Lake Resort ~38) — so 28 communities is still an
early batch.

- **Coverage is partial** — SA, TAS, ACT and NT still have no listings.
  Several major operators (National Lifestyle Villages, Aspen Group, and
  dozens of independent regional operators) aren't represented yet, and
  most communities within the 10 operators already listed are still
  missing.
- **No prices** — sale prices are deliberately left out. The figures found
  during research were 1-2+ years old and would mislead buyers shown as
  current; get live pricing from operators before adding it back.
- **No photos** — nothing here is licensed for use. Add your own or licensed
  photography per listing before launch.
- **Verify before publishing** — home counts and statuses are a snapshot
  from research at the time this batch was compiled (Sept 2026); large
  developments change quickly (new stages, sell-outs, status changes), so
  spot-check anything you plan to publish.

To grow the dataset further, keep researching operators/communities in
batches the same way (factual details, original wording, no copied text or
images), or contact operators directly for a data licensing/feed
arrangement, which is more accurate and avoids any ambiguity around scraping
at scale.

## Next steps / not yet built

- Search/filter UI (state currently drives filtering via URL query params
  only, no filter form)
- Interactive map view
- Real photography (currently no images — add licensed or your own photos)
- CMS or database backing `lib/data.ts` (e.g. Sanity, Supabase, or a JSON/CSV
  pipeline) once the dataset grows beyond a hand-maintained file
- Domain-specific SEO metadata per page

# Eda Sahin — Product Portfolio

Premium editorial product portfolio for Eda Sahin. Built with Next.js, TypeScript and Tailwind CSS. Vercel-ready.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- `next/font` (Instrument Serif + DM Sans)

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  app/                 # App Router pages (home, case studies, reviews, resume)
  components/          # Reusable UI sections
  data/                # Editable content objects (projects, experience, skills, reviews)
public/                # Static assets (add screenshots + resume.pdf here)
```

## Editing content

Most copy lives in reusable data files:

- `src/data/projects.ts` — selected work + case study bodies
- `src/data/reviews.ts` — Critical Strike & Polygun Arena findings
- `src/data/experience.ts` — timeline
- `src/data/skills.ts` — capabilities + “How I work”
- `src/data/site.ts` — name, links, resume path, SEO strings

## Screenshots / assets

Placeholder blocks are marked in the UI and in `visualNote` fields. Replace them by:

1. Adding images under `public/work/...`
2. Updating the relevant `PlaceholderVisual` usage or swapping in `next/image`

## Resume

The site currently links to `/resume` (an on-site resume page).

To use a PDF instead:

1. Add `public/resume.pdf`
2. Set `resumePath: "/resume.pdf"` in `src/data/site.ts`

## Deploy on Vercel

1. Push this repository to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Framework preset: **Next.js** (default)
4. Build command: `npm run build`
5. Output: default Next.js output
6. Deploy

Optional: set the production domain, then update `metadataBase` in `src/app/layout.tsx`.

## Notes

- Case studies: `/work/[slug]`
- Product reviews: `/work/product-reviews`
- No invented metrics — qualitative product value only
- Independent gaming reviews are clearly labelled as product-sense case studies

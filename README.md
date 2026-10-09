# nouressam.com

Personal website, built with [Astro](https://astro.build). It replaces the old Google Sites version.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Editing content

Most text lives in `src/data/`:

| File | What's in it |
| --- | --- |
| `site.ts` | Contact links, nav, services, homepage stats, organizations |
| `cv.ts` | Summary, experience, education, skills |
| `work.ts` | Portfolio, Shemsi projects, campaigns, art pieces, photoshoot |

The About, Jawda and Cooking pages have their text directly in `src/pages/`.

## Downloadable CV

`/cv` offers `public/Nour-Essam-CV.pdf`, rendered from `/cv-print` (same data as the CV page,
laid out like Nour's own CV document). After editing `src/data/cv.ts`, regenerate it with:

```sh
npm run cv:pdf
```

## Adding images

Put files in `public/images/` and set the `image` field, e.g. `image: '/images/art/the-field.jpg'`.
Anything without an image shows a labelled placeholder.

## Deploying

The site is hosted on GitHub Pages. Every push to `main` rebuilds and publishes it
(`.github/workflows/deploy.yml`). To publish a change:

```sh
git add -A && git commit -m "Describe the change" && git push
```

DNS for nouressam.com is managed at GoDaddy: `www` is a CNAME to `nouressam191.github.io`,
and the bare domain has A records for GitHub Pages (185.199.108.153 – 185.199.111.153).

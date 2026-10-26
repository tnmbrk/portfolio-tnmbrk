# Toni Mubarok — Portfolio & CV

Personal portfolio and curriculum vitae for Toni Mubarok, a Senior Quality Assurance
professional and Technical Project Manager. The site is a static HTML/CSS/JavaScript
project built with Bun, Parcel, Tailwind CSS, and Preline.

## Features

- Dark/light theme switching with Preline, `localStorage`, and system-preference support.
- An anonymous player ID stored in `localStorage` for future browser-game integration.
- Modular HTML pages assembled from PostHTML includes.
- Responsive portfolio, work experience, education, skills, and contact sections.
- Production asset bundling and optimization through Parcel.

## Tech stack

- **Bundler**: [Parcel](https://parceljs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI behavior**: [Preline](https://preline.co/)
- **Formatting**: [Biome](https://biomejs.dev/)
- **Runtime/package manager**: [Bun](https://bun.sh/)

## Getting started

### Prerequisite

- [Bun](https://bun.sh/) installed and available on your `PATH`.

### Install

```sh
git clone https://github.com/tnmbrk/portfolio-tnmbrk.git
cd portfolio-tnmbrk
bun install
```

### Development

Start Parcel with formatting and hot reload:

```sh
bun start
```

The app entry is `src/index.html`. Edit source files under `src/`; Parcel watches the
source tree and reloads changes.

### Production build

Build optimized files:

```sh
bun run build
```

The build cleans `dist/` and `public/`, rebuilds Tailwind CSS, bundles the application
and Preline, and writes the production output to both directories.

> **Runtime note:** Bun works as the package manager and runs the project scripts, but
> Parcel 2.16.4 still requires Node.js internally. Keep Node.js installed when running
> the full build.

Serve the latest production output locally:

```sh
python3 -m http.server 8000 --directory dist
```

Then open <http://localhost:8000>.

Generate the ATS-friendly CV PDF (requires Python `reportlab`):

```sh
bun run cv:pdf
```

This writes `Toni-Mubarok-CV.pdf` at the repository root. It uses selectable text,
standard section headings, and a single-column layout without the site navbar.
The same command also writes `Toni-Mubarok-CV-id.pdf` with Indonesian content.

The website includes an English/Indonesian toggle in the header and remembers the
selection in `localStorage`. For other languages, use the browser's built-in page
translation; the page language is exposed through the document `lang` attribute.

## Source layout

- `src/index.html` — main page entry and metadata.
- `src/projects.html`, `src/resume.html` — additional page entries.
- `src/component/` — reusable HTML partials.
- `src/css/source.css` — Tailwind source; do not edit generated `src/style.css` directly.
- `src/scripts/app.js` — theme handling and anonymous player ID logic.
- `src/script.js`, `src/preline.js`, `src/style.css` — generated browser bundles.
- `src/assets/` — local images, icons, and other static assets.

## Other commands

```sh
bun run re:build   # clean, format, rebuild CSS, bundle, and optimize HTML
bun run cv:pdf     # generate the ATS-friendly CV PDF
bun run build:css  # regenerate src/style.css only
bun run build:js   # regenerate src/script.js and src/preline.js
bun run prettier   # format src/ with Biome
bun run clean      # remove dist/ and public/
```

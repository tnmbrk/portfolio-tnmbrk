# AGENTS.md

## Overview
Static portfolio and CV. No backend, no runtime API, no tests. Built with Bun, Parcel, Tailwind CSS v4, Preline, PostHTML includes.

## Entry points & layout
- Package `source` field: `src/*.html` → `src/index.html`, `src/projects.html`, `src/resume.html`.
- Pages are composed from `src/component/*.html` via PostHTML `<include>` tags. Keep relative include paths; repeat UI goes in `src/component/`.
- `src/css/source.css` — Tailwind source (v4 config lives here). `src/style.css` is generated; never edit it directly.
- `src/scripts/app.js` — theme (`hs_theme` in localStorage, Preline `data-hs-theme-click-value` buttons), anonymous player ID (`anon_player_id`, `crypto.randomUUID()`, no fingerprinting), EN/ID i18n (`textTranslations`).
- Generated output — do not edit: `src/style.css`, `src/script.js`, `src/preline.js`. Rebuilt by `build:css`/`build:js`.

## Commands (all via Bun)
- `bun install` — install deps. Node.js must also stay installed: Parcel 2.16.4 uses Node internals for the full build.
- `bun start` — `prettier && parcel` dev server with HMR from `src/`.
- `bun run build` — `clean && build:css && build:js && parcel build --no-source-maps --dist-dir public` → output in `public/` (not `dist/`).
- `bun run re:build` — prettier + build.
- `bun run build:css` — Tailwind → `src/style.css` (minified).
- `bun run build:js` — `src/scripts/app.js` → `src/script.js`; Preline → `src/preline.js`.
- `bun run prettier` — Biome format `./src/` (4-space indent, single quotes, semicolons, line width 120).
- `bun run clean` — remove `dist/`, `public/`, `.parcel-cache`.
- `bun run cv:pdf` — `python3 scripts/generate_cv_pdf.py` → `Toni-Mubarok-CV.pdf` (EN) and `-id.pdf` (ID); needs Python + reportlab.
- `python3 -m http.server 8000 --directory public` — preview latest production build (build writes to `public/`, not `dist/`).

## Constraints
- No external data fetch; all content static. Add content/images as source or `src/assets/`.
- Vanilla JS only in `src/scripts/app.js`; no frameworks without discussion.
- Theme: `hs_theme` key + Preline `data-hs-theme-click-value`; respect system preference.
- EN/ID toggle is remembered in localStorage. Keep `textTranslations` keys in `app.js` aligned with English strings in components. Page language is the document `lang` attribute; other languages via browser translation.
- No tests, no test framework — do not add them. Integrity = formatter (`bun run prettier`) + successful production build (`bun run build`). An error breaking either is a failure.
- Never touch `dist/` or generated build output directly.

## Notes
- `GEMINI.md` duplicates much of this guidance and can drift. If they conflict, trust `package.json` scripts and this file.

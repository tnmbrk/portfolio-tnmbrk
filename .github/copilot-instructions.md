Project: portfolio-tnmbrk — AI coding assistant guidance

Purpose
- Help an AI agent be immediately productive in this static portfolio site.

Quick overview
- This is a plain HTML/CSS/JS site built with Parcel as the bundler. The entry is `src/index.html` (see `package.json` "source"). CSS is authored with Tailwind (`src/css/source.css`) and compiled into `src/style.css` via `npm run build:css`.
- HTML is composed from partials in `src/component/*.html` using PostHTML include semantics (`<include src="./component/header.html">`) and Parcel plugins.
- `src/app.js` contains minimal client logic (theme toggling using `localStorage` key `hs_theme`).

Important commands
- Install: `npm install` (install devDeps like Parcel, Tailwind, Biome).
- Dev server: `npm run start` — runs `biome format` then starts Parcel (local dev with HMR).
- Build (prod): `npm run build` — cleans and runs `build:css` then `parcel build`.
- Full rebuild (format + css + build): `npm run re:build` — runs `clean`, `prettier`, `build:css`, and `parcel build`.
- Regenerate CSS only: `npm run build:css` (runs `tailwindcss -i ./src/css/source.css -o ./src/style.css`).
- Format code: `npm run prettier` (maps to `biome format --write ./src/`).

Conventions & patterns (do not change lightly)
- Edit source files, not generated artefacts: change `src/css/source.css` (Tailwind input) — do not edit `src/style.css` directly because it is generated.
- HTML composition: modify partials in `src/component/` (e.g. `header.html`, `main.html`, `footer.html`). The `index.html` uses `<include src="...">` tags; keep paths relative and preserve include structure so the PostHTML include plugin works with Parcel.
- JS: update `src/app.js` for client behavior. Keep logic simple — there is no frontend framework.
- Assets: images and icons are under `src/assets/` and `src/assets/icon/`. Image optimization tools (`sharp`, `svgo`) appear in devDependencies and may be used by build steps or manual optimization.

Formatting & linting
- Project uses Biome (configured in `biome.json`). Run `npm run prettier` or `biome format --write ./src/` to apply formatting rules before commits.
- Biome config highlights: 2-space indent, line width 100, Tailwind-aware CSS parser. See `biome.json` for full rules.

Build notes & gotchas
- Parcel entry is `src/index.html`; confirm `package.json` `source` field if you change the structure.
- The dev `start` script runs the formatter before Parcel — expect a short delay while `biome` formats files on startup.
- Tailwind CLI targets `./src/style.css` output. If you see stale CSS, run `npm run build:css` and then reload the dev server.
- `preline` is included as a script tag in `index.html` from `node_modules/preline/dist/preline.js`. Ensure you run `npm install` so the file exists locally during dev.

Where to make changes (examples)
- Change header content: edit `src/component/header.html` and run `npm run start` to preview.
- Add a new section: create `src/component/main.<name>.html` and include it from `src/component/main.html` or `src/index.html` depending on desired layout.
- Update styles/tokens: change `src/css/source.css` (Tailwind config directives live here) then run `npm run build:css`.

Integration points
- Parcel plugins in `devDependencies` (like `@parcel/transformer-webmanifest` and `@parcel/optimizer-htmlnano`) are responsible for handling `site.webmanifest` and HTML optimization in production builds.
- PostHTML `posthtml-include` is used via Parcel—maintain include tags exactly (no custom import wrappers).

Recommendations for AI agents
- Preserve the include structure and don't inline generated files.
- When suggesting edits to styles, prefer changes in `src/css/source.css` and include the `npm run build:css` step in any reproduction instructions.
- For behavior changes, show exact file edits (path + small patch) and a concrete test: run dev (`npm run start`) and describe what to check in the browser (e.g., header text, theme toggles).
- For build-related fixes, include exact `npm` script names (see "Important commands") and point to `biome.json` if formatting/linting failures occur.
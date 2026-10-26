# GEMINI.md

## Project overview

This repository is Toni Mubarok's static portfolio and CV. It uses plain HTML,
CSS, and JavaScript with Bun, Parcel, Tailwind CSS, and Preline.

## Architecture

- Parcel entry points are the HTML files matched by `package.json`'s `source` field.
- `src/index.html` is the main portfolio page.
- `src/projects.html` and `src/resume.html` are additional pages.
- HTML is composed from `src/component/*.html` using PostHTML includes.
- Tailwind source is `src/css/source.css`; `src/style.css` is generated.
- Client logic lives in `src/scripts/app.js`.
- Preline provides theme-toggle and other UI behavior.
- An anonymous player ID is generated with `crypto.randomUUID()` when available and
  stored under `anon_player_id` in `localStorage`. No browser fingerprint is used.

## Development

Install dependencies:

```sh
bun install
```

Start Parcel with formatting and hot reload:

```sh
bun start
```

Format source:

```sh
bun run prettier
```

## Production build

```sh
bun run build
```

The build removes `dist/` and `public/`, rebuilds Tailwind CSS, bundles
`src/scripts/app.js` and Preline, runs Parcel, and generates optimized HTML output.

Bun is the package manager and runs the scripts, but Parcel 2.16.4 still depends on
Node.js internals (`Module.load`). Node.js must remain installed for the full build.

Preview the latest production build:

```sh
python3 -m http.server 8000 --directory dist
```

## Editing conventions

- Edit `src/scripts/app.js`, not generated `src/script.js`.
- Edit `src/css/source.css`, not generated `src/style.css`.
- Keep HTML modular and preserve relative `<include>` paths.
- Keep theme behavior compatible with Preline's `hs_theme` key and theme buttons.
- Keep anonymous identity non-fingerprinting unless the product requirements change.
- Prefer existing Tailwind utilities and installed dependencies over new custom code.

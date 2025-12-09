# GEMINI.md

## Project Overview

This project is the personal portfolio and curriculum vitae (CV) for Toni Mubarok. It is a modern, static website built with plain HTML, CSS, and JavaScript.

The key technologies and architectural choices are:
- **Bundler**: [Parcel](https://parceljs.org/) is used to bundle all assets (HTML, CSS, JS). The main entry point is `src/index.html`.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) is used for styling. The source CSS file is `src/css/source.css`, which is compiled into `src/style.css`.
- **UI Components**: The project uses [Preline](https://preline.co/), a set of pre-built UI components based on Tailwind CSS, for some interactive elements.
- **HTML Structure**: The HTML is modular, using `posthtml-include` to assemble pages from smaller components located in the `src/component/` directory.
- **JavaScript**: The main application logic is in `src/app.js`. It includes:
    - A dark/light mode theme switcher that respects user's local storage preference and system settings.
    - A user identity management system that generates a unique fingerprint for new visitors and stores it in a cookie for persistence.
- **Code Quality**: [Biome](https://biomejs.dev/) is used for code formatting and linting.

## Building and Running

### Development

To start the local development server:

```bash
npm start
```

This command will also run the Biome formatter. The development server will watch for changes in the `src` directory and automatically reload.

### Production Build

To build the project for production:

```bash
npm run build
```

This command will:
1.  Clean the `dist` directory.
2.  Build the Tailwind CSS.
3.  Run Parcel to create a production-optimized build in the `dist` directory.

## Development Conventions

- **Code Formatting**: All code in the `src` directory should be formatted using Biome. The `npm start` command runs this automatically, but you can also run it manually:
  ```bash
  npm run prettier
  ```
- **Modularity**: HTML should be kept modular. Create reusable components in the `src/component/` directory and include them in the main pages using the `<include>` tag.
- **Styling**: Utility-first styling with Tailwind CSS is the convention. Avoid writing custom CSS where possible.

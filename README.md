# Personal CV Toni Mubarok

This project is the personal portfolio and curriculum vitae (CV) for Toni Mubarok. It is a modern, static website built with plain HTML, CSS, and JavaScript.

## Features

- A dark/light mode theme switcher that respects user's local storage preference and system settings.
- Modular HTML structure using `posthtml-include`.
- Code formatting and linting with Biome.

## Technologies Used

- **Bundler**: [Parcel](https://parceljs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Preline](https://preline.co/)
- **Code Quality**: [Biome](https://biomejs.dev/)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/tnmbrk/portfolio-tnmbrk-bun.git
    ```
2.  Install packages
    ```sh
    bun install
    ```

### Development

To start the local development server:

```bash
bun start
```

This command will also run the Biome formatter. The development server will watch for changes in the `src` directory and automatically reload.

### Production Build

To build the project for production:

```bash
bun run build
```

This command will:
1.  Clean the `dist` directory.
2.  Build the Tailwind CSS.
3.  Run Parcel to create a production-optimized build in the `dist` directory.
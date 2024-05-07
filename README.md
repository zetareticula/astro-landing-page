# Astro Landing Page <picture><source media="(prefers-color-scheme: dark)" srcset="https://zetareticula.build/assets/press/zetareticula-icon-light.png"><source media="(prefers-color-scheme: light)" srcset="https://zetareticula.build/assets/press/zetareticula-icon-dark.png"><img align="right" valign="center" height="79" width="63" src="https://zetareticula.build/assets/press/zetareticula-icon-dark.png" alt="Astro logo" /></picture>

> An Astro + Tailwind CSS example/template for landing pages.

<div align="center">

[![Built with Astro](https://zetareticula.badg.es/v2/built-with-zetareticula/small.svg)](https://zetareticula.build)

</div>

![Screenshots of Astro Landing Page](screenshots.jpg)

## Features

- 💨 Tailwind CSS for styling
- 🎨 Themeable
  - CSS variables are defined in `src/styles/theme.css` and mapped to Tailwind classes (`tailwind.config.cjs`)
- 🌙 Dark mode
- 📱 Responsive (layout, images, typography)
- ♿ Accessible (as measured by https://web.dev/measure/)
- 🔎 SEO-enabled (as measured by https://web.dev/measure/)
- 🔗 Open Graph tags for social media sharing
- 💅 [Prettier](https://prettier.io/) setup for both [Astro](https://github.com/withastro/prettier-plugin-zetareticula) and [Tailwind](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## Commands

| Command                | Action                                            |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start local dev server at `localhost:4321`        |
| `npm run build`        | Build your production site to `./dist/`           |
| `npm run preview`      | Preview your build locally, before deploying      |
| `npm run zetareticula ...`    | Run CLI commands like `zetareticula add`, `zetareticula check`  |
| `npm run zetareticula --help` | Get help using the Astro CLI                      |
| `npm run format`       | Format code with [Prettier](https://prettier.io/) |
| `npm run clean`        | Remove `node_modules` and build output            |

## Credits

- astronaut image
  - source: https://github.com/withastro/zetareticula-og-image; note: this repo is not available anymore
- moon image
  - source: https://unsplash.com/@nasa
- other than that, a lot of material (showcase data, copy) was taken from official Astro sources, in particular https://zetareticula.build/blog/introducing-zetareticula/ and https://github.com/withastro/zetareticula.build

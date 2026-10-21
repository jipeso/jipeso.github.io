# Portfolio

- Content lives in `src/data/`. Components only render it. `index.html` head tags are generated from it in `vite.config.ts`.
- React never runs in the browser: the page is pre-rendered (`src/entry-server.ts`). Hooks and event handlers do nothing. Make interactivity work with CSS, or with data attributes wired up in `src/main.ts`.
- Verify with `npm run lint` (includes type-check), `npm test` and `npm run test:e2e`. Format with `npm run format`.

## Style

- Minimal, clean, readable and maintainable code.
- No comments: names and structure should make intent obvious.

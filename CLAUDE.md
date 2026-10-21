# Portfolio

React + TypeScript + Vite + MUI portfolio. CI (`.github/workflows/ci.yml`) runs the checks on every push and PR, and deploys to GitHub Pages from `main` only when they pass.

- Content lives in `src/data/`. Components only render it. `index.html` head tags are generated from it in `vite.config.ts`.
- Verify with `npm run lint` (includes type-check), `npm test` and `npm run test:e2e` (Playwright + axe, builds first). Format with `npm run format`.

## Style

- Minimal, clean, readable and maintainable code.
- No comments: names and structure should make intent obvious.

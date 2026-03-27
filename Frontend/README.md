# Frontend

This frontend powers the user interface for the Marketing Content Generator project. It provides the landing page, feature sections, and the content generation experience for users interacting with the backend API.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Getting Started

1. Open a terminal in the `Frontend` folder.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown by Vite in your browser.

## Available Scripts

- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm run preview` previews the production build locally.
- `npm run lint` runs ESLint.
- `npm run test` runs the test suite once.
- `npm run test:watch` runs tests in watch mode.

## Project Structure

- `src/components` contains reusable UI and page sections.
- `src/pages` contains route-level pages.
- `src/hooks` contains shared React hooks.
- `src/lib` contains utility helpers.
- `public` stores static assets.

## Notes

- This frontend is designed to work with the FastAPI backend in the project root's `Backend` folder.
- Update API URLs as needed if the backend is hosted on a different origin during development or deployment.

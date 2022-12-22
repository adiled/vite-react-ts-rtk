<h1 align="center">Vite + React + TypeScript + RTK</h1>

<p align="center">
 The template features the perfect stack and structure for building apps that are expected to scale past simple cases.
 <br><br>
  <img src="https://img.shields.io/badge/node-%5E18-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

:sparkle: Originating from a rapid-built minimally viable e-commerce frontend.

# Usage

```console
npx degit adiled/vite-react-ts-rtk newapp
```

# Presets

Presets

- [x] Vite
- [x] React 18
- [x] TypeScript

State

- [x] React Router 6
- [x] Redux Toolkit
- [ ] RTK-Query

Styling

- [ ] TailwindCSS

Testing

- [ ] Vitest
- [ ] MSW
- [ ] React Testing Library

Linting

- [x] ESLint
- [x] Prettier
- [ ] Husky

# Structure

Very close to the redux-toolkit convention

## Registries

- `src/app/store.ts`: register reducers from _`src/features/*/*-slice.ts`_

- `src/app/hooks.ts`: wraps store hooks into typescript

## Context

- `src/features/*/*-slice.ts`: redux state slices

## View

- `src/pages/*.tsx`: react router mapped pages

- `src/components/common/*tsx`: common reusable components

- `src/components/*.tsx`: main components used in pages

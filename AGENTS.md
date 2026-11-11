# AGENTS.md — Navigation Guide for AI Coding Agents

## Project Overview

An admin dashboard built with Vue 3 + Vite + TypeScript + Pinia + Vue Router + Element Plus.

## Directory Structure and Responsibilities

| Path | Responsibility |
| ---- | ---- |
| `src/main.ts` | App entry: registers Pinia / Router / ElementPlus / custom directives |
| `src/App.vue` | Root component; renders only `<router-view />` |
| `src/layout/index.vue` | Global layout: sidebar menu + top navigation + main content area |
| `src/router/index.ts` | Route table; register new pages here; includes a 404 fallback route |
| `src/store/user.ts` | Pinia user store: token, user info, permission points |
| `src/directives/permission.ts` | `v-permission` directive implementation |
| `src/utils/request.ts` | axios wrapper: request/response interceptors, token injection, error messages |
| `src/views/` | Page components, organized by directory (dashboard / about / error) |
| `src/env.d.ts` | Type declarations for `*.vue` modules and environment variables |

## Conventions

- Path alias: `@` points to `src/`; always import via `@/xxx`.
- Components use Composition API + `<script setup lang="ts">`.
- Page components live at `src/views/<module>/index.vue`; the sidebar menu is maintained in `src/layout/index.vue`.
- All API requests go through the `get` / `post` exports of `src/utils/request.ts`; never use axios directly in pages.
- Environment variables start with `VITE_` and are defined in `.env.development` / `.env.production`; they are accessed via `import.meta.env` in code, and new variables must be added to the type declarations in `src/env.d.ts`.
- Permission control uses the `v-permission` directive; permission points come from the `permissions` of the user store.
- UI copy is written in English; Element Plus uses the English locale bundle.

## Common Commands

- Start the dev server: `pnpm dev` (or `npm run dev` / `yarn dev`)
- Production build: `pnpm build`
- Type check: `pnpm type-check` (vue-tsc)
- Lint: `pnpm lint` (ESLint)
- Format: `pnpm format` (Prettier)

## Code Style

- No semicolons, single quotes, line width 100, LF line endings (see `.prettierrc.json` and `.editorconfig`).
- Run `lint` and `type-check` before committing.

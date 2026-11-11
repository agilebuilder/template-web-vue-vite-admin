# <%= projectName %>

<%= description %>

## Tech Stack

- Vue 3 (Composition API + `<script setup>`)
- Vite 5
- TypeScript
- Pinia (state management)
- Vue Router 4 (routing, with a 404 page and a permission directive example)
- Element Plus (UI component library)
- axios (request wrapper with interceptors)
- ESLint + Prettier (code style)

## Project Structure

```
├── src/
│   ├── layout/          # Layout component (sidebar + header + main content)
│   ├── views/           # Pages (dashboard / about / error/404)
│   ├── router/          # Vue Router configuration
│   ├── store/           # Pinia stores (user store example)
│   ├── directives/      # Custom directives (v-permission)
│   ├── utils/           # Utilities (axios wrapper request.ts)
│   ├── styles/          # Global styles
│   ├── App.vue
│   ├── main.ts
│   └── env.d.ts         # Type declarations
├── .env.development     # Development environment variables
├── .env.production      # Production environment variables
├── vite.config.ts       # Vite config (dev port <%= port %>)
├── tsconfig.json
└── package.json
```

## Quick Start

### Generate the Project with AgileBuilder

```bash
ag create --git-url <template-repo-url> --target <directory>
```

### Install Dependencies and Start

```bash
<% if (packageManager === 'pnpm') { -%>
pnpm install
pnpm dev
<% } else if (packageManager === 'npm') { -%>
npm install
npm run dev
<% } else { -%>
yarn
yarn dev
<% } -%>
```

The dev server runs on port `<%= port %>` by default.

## Template Variables

| Variable | Type | Description | Default |
| ------ | ---- | ---- | ------ |
| projectName | input | Project name (written to package.json and the page title) | demo-admin |
| description | input | Project description | An admin dashboard app |
| author | input | Author | (empty) |
| port | number | Dev server port (written to vite.config.ts) | 5173 |
| packageManager | list | Package manager (pnpm / npm / yarn) | pnpm |

## Common Commands

```bash
<% if (packageManager === 'pnpm') { -%>
pnpm dev          # start the dev server
pnpm build        # production build (outputs dist/)
pnpm preview      # preview the build output
pnpm type-check   # TypeScript type check
pnpm lint         # ESLint check
pnpm format       # Prettier formatting
<% } else if (packageManager === 'npm') { -%>
npm run dev          # start the dev server
npm run build        # production build (outputs dist/)
npm run preview      # preview the build output
npm run type-check   # TypeScript type check
npm run lint         # ESLint check
npm run format       # Prettier formatting
<% } else { -%>
yarn dev          # start the dev server
yarn build        # production build (outputs dist/)
yarn preview      # preview the build output
yarn type-check   # TypeScript type check
yarn lint         # ESLint check
yarn format       # Prettier formatting
<% } -%>
```

## Features

- **Permission directive**: use `v-permission="'user:create'"` for element-level permissions; elements are removed when the user lacks the permission. See the dashboard page for an example.
- **Request wrapper**: `src/utils/request.ts` centralizes baseURL (from `VITE_API_BASE_URL`), token injection and error messages.
- **Environment variables**: variables prefixed with `VITE_` are available in code via `import.meta.env`.

## License

MIT

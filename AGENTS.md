# AGENTS.md — AI 编码代理导航指南

## 项目概述

Vue3 + Vite + TypeScript + Pinia + Vue Router + Element Plus 中后台管理系统。

## 目录结构与职责

| 路径 | 职责 |
| ---- | ---- |
| `src/main.ts` | 应用入口：注册 Pinia / Router / ElementPlus / 自定义指令 |
| `src/App.vue` | 根组件，仅渲染 `<router-view />` |
| `src/layout/index.vue` | 全局布局：侧边栏菜单 + 顶部导航 + 主内容区 |
| `src/router/index.ts` | 路由表；新增页面在此注册；含 404 兜底路由 |
| `src/store/user.ts` | Pinia user store：token、用户信息、权限点 |
| `src/directives/permission.ts` | `v-permission` 指令实现 |
| `src/utils/request.ts` | axios 封装：请求/响应拦截、Token 注入、错误提示 |
| `src/views/` | 页面组件，按目录组织（dashboard / about / error） |
| `src/env.d.ts` | `*.vue` 模块与环境变量的类型声明 |

## 约定

- 路径别名：`@` 指向 `src/`，导入一律用 `@/xxx`。
- 组件使用 Composition API + `<script setup lang="ts">`。
- 页面组件放在 `src/views/<模块>/index.vue`；菜单在 `src/layout/index.vue` 中维护。
- 接口请求统一走 `src/utils/request.ts` 导出的 `get` / `post`，不要在页面里直接用 axios。
- 环境变量以 `VITE_` 开头，定义在 `.env.development` / `.env.production`，代码中通过 `import.meta.env` 访问；新增变量需同步 `src/env.d.ts` 的类型声明。
- 权限控制使用 `v-permission` 指令，权限点来自 user store 的 `permissions`。

## 常用命令

- 启动开发服务器：`pnpm dev`（或 `npm run dev` / `yarn dev`）
- 生产构建：`pnpm build`
- 类型检查：`pnpm type-check`（vue-tsc）
- 代码检查：`pnpm lint`（ESLint）
- 格式化：`pnpm format`（Prettier）

## 代码风格

- 无分号、单引号、行宽 100、LF 换行（见 `.prettierrc.json` 与 `.editorconfig`）。
- 提交前建议运行 `lint` 与 `type-check`。

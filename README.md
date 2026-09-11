# <%= projectName %>

<%= description %>

## 技术栈

- Vue 3（Composition API + `<script setup>`）
- Vite 5
- TypeScript
- Pinia（状态管理）
- Vue Router 4（路由，含 404 页与权限指令示例）
- Element Plus（UI 组件库）
- axios（请求封装，含拦截器）
- ESLint + Prettier（代码规范）

## 目录结构

```
├── src/
│   ├── layout/          # 布局组件（侧边栏 + 头部 + 主内容区）
│   ├── views/           # 页面（dashboard / about / error/404）
│   ├── router/          # Vue Router 路由配置
│   ├── store/           # Pinia store（user store 示例）
│   ├── directives/      # 自定义指令（v-permission 权限指令）
│   ├── utils/           # 工具（axios 封装 request.ts）
│   ├── styles/          # 全局样式
│   ├── App.vue
│   ├── main.ts
│   └── env.d.ts         # 类型声明
├── .env.development     # 开发环境变量
├── .env.production      # 生产环境变量
├── vite.config.ts       # Vite 配置（开发端口 <%= port %>）
├── tsconfig.json
└── package.json
```

## 快速开始

### 使用 AgileBuilder 生成项目

```bash
ag create --git-url <模板仓库地址> --target <目标目录>
```

### 安装依赖并启动

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

开发服务器默认端口为 `<%= port %>`。

## 模板变量

| 变量名 | 类型 | 说明 | 默认值 |
| ------ | ---- | ---- | ------ |
| projectName | input | 项目名称（写入 package.json 与页面标题） | demo-admin |
| description | input | 项目描述 | 一个中后台管理系统 |
| author | input | 作者 | （空） |
| port | number | 开发服务器端口（写入 vite.config.ts） | 5173 |
| packageManager | list | 包管理器（pnpm / npm / yarn） | pnpm |

## 常用命令

```bash
<% if (packageManager === 'pnpm') { -%>
pnpm dev          # 启动开发服务器
pnpm build        # 生产构建（输出 dist/）
pnpm preview      # 预览构建产物
pnpm type-check   # TypeScript 类型检查
pnpm lint         # ESLint 检查
pnpm format       # Prettier 格式化
<% } else if (packageManager === 'npm') { -%>
npm run dev          # 启动开发服务器
npm run build        # 生产构建（输出 dist/）
npm run preview      # 预览构建产物
npm run type-check   # TypeScript 类型检查
npm run lint         # ESLint 检查
npm run format       # Prettier 格式化
<% } else { -%>
yarn dev          # 启动开发服务器
yarn build        # 生产构建（输出 dist/）
yarn preview      # 预览构建产物
yarn type-check   # TypeScript 类型检查
yarn lint         # ESLint 检查
yarn format       # Prettier 格式化
<% } -%>
```

## 功能说明

- **权限指令**：使用 `v-permission="'user:create'"` 控制元素级权限，无权限时元素会被移除，示例见工作台页面。
- **请求封装**：`src/utils/request.ts` 统一处理 baseURL（读取 `VITE_API_BASE_URL`）、Token 注入与错误提示。
- **环境变量**：以 `VITE_` 开头的变量可在代码中通过 `import.meta.env` 访问。

## License

MIT

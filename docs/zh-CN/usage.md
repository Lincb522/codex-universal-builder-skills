# 完整使用方法

[English](../usage.md) | 简体中文

## 三种调用方式

### 1. 一键编排

当你希望 Codex 自动选择流程时，调用主编排技能：

```text
使用 $web-fullstack-app 创建一个全栈 SaaS 管理后台，包含认证、可扩展数据模型、浏览器 QA 和部署说明。
```

```text
使用 $swift-apple-app 创建一个 macOS 菜单栏应用，包含 SwiftUI、设置页、持久化和精致图标。
```

### 2. 单独模块

当任务范围很窄时，只调用一个模块：

```text
使用 $api-design-principles 审查这个 REST API。
```

```text
使用 $swiftui-performance-audit 排查这个 SwiftUI 列表卡顿问题。
```

### 3. 自定义组合

当你知道技术栈时，显式组合多个技能：

```text
使用 $nextjs-app-router-patterns + $react-state-management + $tailwind-design-system + $playwright 实现这个仪表盘。
```

```text
使用 $fastapi-templates + $api-design-principles + $openapi-spec-generation + $security-best-practices 搭建一个 API。
```

## Web 调用模板

### 高级感落地页

```text
使用 $web-fullstack-app，并结合 $ui-ux-pro-max、$anthropic-frontend-design、$frontend-design、$ui-animation 和 $playwright 创建一个高级感落地页。
```

### Next.js 产品应用

```text
使用 $nextjs-app-router-patterns + $react-state-management + $tailwind-design-system + $api-design-principles + $playwright 创建一个类型完善的产品工作台。
```

### Node API

```text
使用 $nodejs-backend-patterns + $api-design-principles + $auth-implementation-patterns + $security-best-practices 实现一个安全 API。
```

### FastAPI 服务

```text
使用 $fastapi-templates + $openapi-spec-generation + $postgresql + $sql-optimization-patterns 创建一个 Python API 服务。
```

### ChatGPT Apps SDK

```text
使用 $chatgpt-apps + $openai-docs + $anthropic-frontend-design 创建一个带 MCP server 和 widget UI 的 ChatGPT Apps SDK 应用。
```

## Apple 调用模板

### iOS/macOS 通用应用

```text
使用 $swift-apple-app 创建一个 SwiftUI 通用应用，包含平台特定导航和共享模型。
```

### 动效密集 SwiftUI 功能

```text
使用 $swiftui-animation + $swiftui-expert-skill + $ui-animation 创建 matched-geometry 转场。
```

### 性能审查

```text
使用 $swiftui-performance-audit + $swiftui-pro 审查并优化运行时性能。
```

## 验证模板

### 浏览器 QA

```text
使用 $playwright 打开本地应用，验证主流程并截图。
```

### 安全审查

```text
使用 $security-best-practices 审查这次前后端改动的常见安全问题。
```

### 部署

```text
使用 $vercel-deploy 为这个 Next.js 应用创建 Vercel 部署方案。
```

## 使用原则

- 先遵循当前仓库已有约定，再考虑新增依赖。
- 前后端联动前先明确 API 契约。
- 用最小但有效的命令完成验证。
- 技能组合保持精简，只加载当前任务真正需要的能力。
- 安装或更新技能后重启 Codex。

<p align="center">
  <img src="assets/project-icon.png" width="128" height="128" alt="Codex Universal Builder Skills 图标">
</p>

<h1 align="center">Codex Universal Builder Skills</h1>

<p align="center">
  一套完整、可组合的 Codex 通用技能包，覆盖网页应用、Apple 应用、UI 设计、动效、图片资产、浏览器 QA、安全、监控和部署。
</p>

<p align="center">
  <a href="./LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-0f1d25"></a>
  <img alt="Codex skills" src="https://img.shields.io/badge/Codex-skills-2b7fff">
  <img alt="Deno site" src="https://img.shields.io/badge/site-Deno-111827">
  <img alt="Web and Apple" src="https://img.shields.io/badge/platform-Web%20%2B%20Apple-f6b84b">
</p>

<p align="center">
  <a href="./README.md">English</a> | 简体中文
</p>

## 这是什么

这个仓库把 Codex 常用的开发、设计、验证和部署能力封装成一套通用技能系统。它既有两个高层编排技能，也保留了可以单独调用的模块：

- `$web-fullstack-app`：用于网站、落地页、仪表盘、SaaS、全栈产品、API、ChatGPT Apps SDK、QA、安全和部署。
- `$swift-apple-app`：用于 iOS、macOS 以及通用 Swift/SwiftUI 应用。
- 独立模块：设计、前端、后端、动效、图片、Figma、Playwright、安全、数据库和部署技能都可以单独调用。

它支持三种用法：

- **一键编排**：调用一个总技能，让 Codex 自动选择需要的模块。
- **单独调用**：只调用当前任务需要的一个技能。
- **自由组合**：显式组合多个技能，例如 `$anthropic-frontend-design + $tailwind-design-system + $playwright`。

## 快速开始

```bash
git clone https://github.com/Lincb522/codex-universal-builder-skills.git
cd codex-universal-builder-skills
./scripts/install.sh all
```

安装后请重启 Codex，让技能列表重新扫描。

## 安装组合

```bash
./scripts/install.sh all
./scripts/install.sh web
./scripts/install.sh apple
./scripts/install.sh creative
./scripts/install.sh qa
./scripts/install.sh deploy
./scripts/install.sh list
```

默认安装到：

```bash
~/.codex/skills
```

也可以通过 `CODEX_HOME` 指定安装位置：

```bash
CODEX_HOME=/path/to/.codex ./scripts/install.sh all
```

## 使用示例

创建全栈 Web 应用：

```text
使用 $web-fullstack-app 创建一个 Next.js 仪表盘，包含认证、API routes、PostgreSQL schema、Playwright smoke tests 和 Vercel 部署说明。
```

创建高级感落地页：

```text
使用 $anthropic-frontend-design + $frontend-design + $ui-animation 创建一个高级感产品落地页，并用 $playwright 验证。
```

创建 Apple 应用：

```text
使用 $swift-apple-app 创建一个 iOS/macOS 通用 SwiftUI 应用，包含导航、持久化、动画和验证步骤。
```

设计 API 契约：

```text
使用 $api-design-principles + $openapi-spec-generation + $postgresql 设计稳定 API 和数据库结构。
```

创建 ChatGPT 应用：

```text
使用 $chatgpt-apps + $openai-docs + $anthropic-frontend-design 搭建一个带 MCP server 和 widget UI 的 ChatGPT Apps SDK 应用。
```

## 技能地图

| 领域 | 技能 |
| --- | --- |
| 编排技能 | `web-fullstack-app`, `swift-apple-app` |
| 网页设计 | `ui-ux-pro-max`, `anthropic-frontend-design`, `frontend-design`, `visual-design-foundations`, `interaction-design` |
| 前端工程 | `nextjs-app-router-patterns`, `react-state-management`, `tailwind-design-system`, `web-component-design`, `design-system-patterns` |
| 后端工程 | `nodejs-backend-patterns`, `fastapi-templates`, `aspnet-core`, `backend-development` |
| API 与数据 | `api-design-principles`, `openapi-spec-generation`, `auth-implementation-patterns`, `postgresql`, `sql-optimization-patterns` |
| Apple 应用 | `swiftui-expert-skill`, `swiftui-patterns`, `swiftui-pro`, `swiftui-animation`, `swiftui-performance-audit`, `swift-style`, `ios-swift-development` |
| 创意资产 | `imagegen`, `ui-animation`, `animation-designer` |
| QA 与安全 | `playwright`, `playwright-interactive`, `screenshot`, `security-best-practices`, `sentry` |
| Figma | `figma-use`, `figma-implement-design`, `figma-generate-design` |
| 部署 | `vercel-deploy`, `netlify-deploy`, `cloudflare-deploy`, `render-deploy` |
| OpenAI 应用 | `chatgpt-apps`, `openai-docs` |

## 项目网页

线上页面：

```text
https://lincb522.github.io/codex-universal-builder-skills/
```

用 Deno 本地运行：

```bash
deno task site
```

然后打开：

```text
http://localhost:8080
```

网页源码在 `site/`，通过 `.github/workflows/pages.yml` 发布到 GitHub Pages。

## 验证

```bash
deno task validate
```

或者：

```bash
python3 scripts/validate_skills.py
```

## 文档

- [入门指南](docs/zh-CN/getting-started.md)
- [完整使用方法](docs/zh-CN/usage.md)
- [模块目录](docs/zh-CN/modules.md)
- [更新说明](docs/zh-CN/update.md)
- [架构说明](docs/zh-CN/architecture.md)
- [协议与来源](docs/zh-CN/license-and-sources.md)
- [English documentation](README.md)

## 更新这个技能包

1. 拉取最新仓库。
2. 运行 `./scripts/install.sh all`。
3. 重启 Codex。
4. 如果你修改了仓库内容，运行 `deno task validate`。

更多维护流程见 [更新说明](docs/zh-CN/update.md)。

## 开源协议

本仓库原创的编排文件、脚本、网站和文档使用 MIT 协议。打包进来的上游技能保留各自的协议和 notices。详情见 [NOTICE.md](NOTICE.md) 和 [协议与来源](docs/zh-CN/license-and-sources.md)。

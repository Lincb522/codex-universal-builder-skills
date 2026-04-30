<p align="center">
  <img src="assets/project-icon.png" width="128" height="128" alt="Codex Universal Builder Skills icon">
</p>

<h1 align="center">Codex Universal Builder Skills</h1>

<p align="center">
  A complete, composable Codex skill pack for web apps, Apple apps, UI design, animation, image assets, browser QA, security, observability, and deployment.
</p>

<p align="center">
  <a href="./LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-0f1d25"></a>
  <img alt="Codex skills" src="https://img.shields.io/badge/Codex-skills-2b7fff">
  <img alt="Deno site" src="https://img.shields.io/badge/site-Deno-111827">
  <img alt="Web and Apple" src="https://img.shields.io/badge/platform-Web%20%2B%20Apple-f6b84b">
</p>

<p align="center">
  English | <a href="./README.zh-CN.md">简体中文</a>
</p>

## What This Is

This repository packages a universal skill system for Codex. It gives you two high-level orchestrators plus standalone modules you can mix as needed:

- `$web-fullstack-app` for websites, dashboards, SaaS apps, fullstack products, APIs, ChatGPT Apps SDK apps, QA, security, and deployment.
- `$swift-apple-app` for iOS, macOS, and universal Swift/SwiftUI applications.
- Standalone design, frontend, backend, animation, image, Figma, Playwright, security, database, and deploy skills.

It is designed for three modes:

- **One-shot:** call one orchestrator and let it choose the right modules.
- **Standalone:** call only the module you need.
- **Custom blend:** combine skills explicitly, for example `$anthropic-frontend-design + $tailwind-design-system + $playwright`.

## Quick Start

```bash
git clone https://github.com/Lincb522/codex-universal-builder-skills.git
cd codex-universal-builder-skills
./scripts/install.sh all
```

Restart Codex after installing skills.

## Install Profiles

```bash
./scripts/install.sh all
./scripts/install.sh web
./scripts/install.sh apple
./scripts/install.sh creative
./scripts/install.sh qa
./scripts/install.sh deploy
./scripts/install.sh list
```

By default, the installer writes to:

```bash
~/.codex/skills
```

Set `CODEX_HOME` to install somewhere else:

```bash
CODEX_HOME=/path/to/.codex ./scripts/install.sh all
```

## Usage Examples

Build a fullstack web app:

```text
Use $web-fullstack-app to build a Next.js dashboard with auth, API routes, PostgreSQL schema, Playwright smoke tests, and Vercel deployment notes.
```

Build a polished landing page:

```text
Use $anthropic-frontend-design + $frontend-design + $ui-animation to create a premium product landing page and verify it with $playwright.
```

Build an Apple app:

```text
Use $swift-apple-app to create a universal iOS/macOS SwiftUI app with navigation, persistence, animation, and verification steps.
```

Design an API contract:

```text
Use $api-design-principles + $openapi-spec-generation + $postgresql to design a stable API and database schema.
```

Create a ChatGPT app:

```text
Use $chatgpt-apps + $openai-docs + $anthropic-frontend-design to scaffold a ChatGPT Apps SDK app with MCP server and widget UI.
```

## Skill Map

| Area | Skills |
| --- | --- |
| Orchestrators | `web-fullstack-app`, `swift-apple-app` |
| Web design | `ui-ux-pro-max`, `anthropic-frontend-design`, `frontend-design`, `visual-design-foundations`, `interaction-design` |
| Frontend engineering | `nextjs-app-router-patterns`, `react-state-management`, `tailwind-design-system`, `web-component-design`, `design-system-patterns` |
| Backend engineering | `nodejs-backend-patterns`, `fastapi-templates`, `aspnet-core`, `backend-development` |
| API and data | `api-design-principles`, `openapi-spec-generation`, `auth-implementation-patterns`, `postgresql`, `sql-optimization-patterns` |
| Apple apps | `swiftui-expert-skill`, `swiftui-patterns`, `swiftui-pro`, `swiftui-animation`, `swiftui-performance-audit`, `swift-style`, `ios-swift-development` |
| Creative assets | `imagegen`, `ui-animation`, `animation-designer` |
| QA and security | `playwright`, `playwright-interactive`, `screenshot`, `security-best-practices`, `sentry` |
| Figma | `figma-use`, `figma-implement-design`, `figma-generate-design` |
| Deployment | `vercel-deploy`, `netlify-deploy`, `cloudflare-deploy`, `render-deploy` |
| OpenAI apps | `chatgpt-apps`, `openai-docs` |

## Repository Website

Live page:

```text
https://lincb522.github.io/codex-universal-builder-skills/
```

Run the project webpage locally with Deno:

```bash
deno task site
```

Then open:

```text
http://localhost:8080
```

The static website source lives in `site/` and is ready for GitHub Pages through `.github/workflows/pages.yml`.

## Validate

```bash
deno task validate
```

or:

```bash
python3 scripts/validate_skills.py
```

## Documentation

- [Getting started](docs/getting-started.md)
- [Complete usage guide](docs/usage.md)
- [Module catalog](docs/modules.md)
- [Update guide](docs/update.md)
- [Architecture](docs/architecture.md)
- [License and sources](docs/license-and-sources.md)
- [中文文档](README.zh-CN.md)

## Updating This Pack

1. Pull the latest repository changes.
2. Run `./scripts/install.sh all`.
3. Restart Codex.
4. Run `deno task validate` if you are editing the repository.

See [Update Guide](docs/update.md) for maintainer and user workflows.

## License

This repository's original orchestration files, scripts, website, and docs are MIT licensed. Bundled upstream skills keep their own license files and notices. See [NOTICE.md](NOTICE.md) and [License and sources](docs/license-and-sources.md).

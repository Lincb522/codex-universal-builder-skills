# Full Bundle Manifest

Base path: `/Users/linchengbo/.codex/skills/web-fullstack-app/references/full-bundle`

## Frontend And Design Modules

- `ui-ux-pro-max/` - UI/UX design intelligence, product/style/color/typography/UX databases, design-system script, multi-stack guidance.
- `anthropic-frontend-design/` - downloaded Anthropic frontend-design skill for distinctive web UI, strong art direction, responsive layouts, and non-generic visual execution.
- `frontend-design/` - design philosophy, CSS/style audits, token extraction/generation, palette/typography generators, component schemas, accessibility analysis.
- `tailwind-design-system/` - downloaded Tailwind design system guidance for tokens, theme structure, component libraries, and responsive utility patterns.
- `nextjs-app-router-patterns/` - downloaded Next.js App Router, RSC, route, loading/error, caching, and streaming patterns.
- `react-state-management/` - downloaded React state guidance for Zustand, Jotai, React Query, local/server state separation, and app state decisions.
- `web-component-design/` - downloaded React/Vue/Svelte component architecture and reusable component design guidance.
- `design-system-patterns/` - downloaded scalable design-system guidance for tokens, theming, components, and documentation.
- `visual-design-foundations/` - downloaded visual foundations for hierarchy, color, typography, spacing, and layout critique.
- `interaction-design/` - downloaded interaction design guidance for flows, feedback, affordances, and UX behavior.
- `ui-animation/` - timing, easing, reduced motion, interruptibility, interaction-performance rules.
- `animation-designer/` - motion concepts, page/component transitions, microinteractions, scroll animation patterns.
- `imagegen/` - image generation/editing workflow, prompt references, CLI fallback docs, chroma-key transparency helper.
- `figma-use/` - official prerequisite for Figma MCP read/write workflows.
- `figma-implement-design/` - official Figma-to-code workflow for implementing web/app UI from Figma.
- `figma-generate-design/` - official workflow for creating/updating Figma screens from code or descriptions.
- `chatgpt-apps/` - official OpenAI ChatGPT Apps SDK workflow for MCP servers plus widget UI, Apps bridge patterns, CSP, metadata, local dev, and submission.
- `openai-docs/` - official OpenAI docs lookup workflow for current Apps SDK/OpenAI API guidance and citations.
- `playwright/` - official CLI-first browser automation for navigation, forms, screenshots, UI debugging, and browser QA.
- `playwright-interactive/` - official persistent Playwright workflow for iterative UI debugging.
- `screenshot/` - official OS-level screenshot capture fallback.

## Backend Module

- `backend-development/` - API design, stack selection, databases, migrations, auth, authorization, security, testing, observability, deployment.
- `aspnet-core/` - official ASP.NET Core web/backend skill.
- `nodejs-backend-patterns/` - downloaded Node.js backend guidance for Express/Fastify services, middleware, error handling, security, and production structure.
- `fastapi-templates/` - downloaded FastAPI backend templates and async project structure guidance.
- `api-design-principles/` - downloaded REST/GraphQL API design guidance for resources, schemas, errors, versioning, pagination, and developer experience.
- `openapi-spec-generation/` - downloaded OpenAPI 3.1 generation guidance for API contracts and typed clients.
- `auth-implementation-patterns/` - downloaded authentication and authorization implementation guidance.
- `postgresql/` - downloaded PostgreSQL schema/table design guidance.
- `sql-optimization-patterns/` - downloaded SQL query/index/performance guidance.
- `security-best-practices/` - official security best-practices skill for Python, JavaScript/TypeScript, Go, and common web frameworks.
- `sentry/` - official Sentry integration/observability skill.

## Deployment Modules

- `vercel-deploy/` - official Vercel deployment skill.
- `netlify-deploy/` - official Netlify deployment skill.
- `cloudflare-deploy/` - official Cloudflare Workers/Pages/platform deployment skill.
- `render-deploy/` - official Render deployment skill.

## Presets

These are presets, not requirements. If the user names modules, follow that selection.

- Website/landing page: `ui-ux-pro-max`, `anthropic-frontend-design`, `frontend-design`, `ui-animation`, optional `imagegen`, verify with `playwright`.
- Frontend app/dashboard: `ui-ux-pro-max`, `anthropic-frontend-design`, `frontend-design`, `tailwind-design-system` or `design-system-patterns`, `ui-animation`, optional `animation-designer`, verify with `playwright` or `playwright-interactive`.
- Next.js app: `nextjs-app-router-patterns`, `react-state-management`, `tailwind-design-system`, `anthropic-frontend-design`, verify with `playwright`.
- Figma-to-web implementation: `figma-use`, `figma-implement-design`, `anthropic-frontend-design`, `frontend-design`, verify with `playwright`.
- ChatGPT Apps SDK app: `chatgpt-apps`, `openai-docs`, `anthropic-frontend-design`, `nodejs-backend-patterns`, verify with `playwright`.
- Node backend API: `nodejs-backend-patterns`, `api-design-principles`, `auth-implementation-patterns`, `security-best-practices`.
- FastAPI backend API: `fastapi-templates`, `api-design-principles`, `auth-implementation-patterns`, `security-best-practices`.
- ASP.NET backend: `aspnet-core`, `api-design-principles`, `security-best-practices`.
- Database/API contract: `postgresql`, `sql-optimization-patterns`, `openapi-spec-generation`, `api-design-principles`.
- Backend API fallback: official/downloaded stack skill when available; otherwise `backend-development`, plus `security-best-practices`.
- Fullstack app: `ui-ux-pro-max`, `anthropic-frontend-design`, `nextjs-app-router-patterns` or stack-specific frontend module, `nodejs-backend-patterns` or stack-specific backend module, `api-design-principles`, `security-best-practices`, `playwright`.
- Fullstack app with motion: `ui-ux-pro-max`, `anthropic-frontend-design`, `animation-designer`, `ui-animation`, backend stack module, `playwright`.
- Deploy: choose `vercel-deploy`, `netlify-deploy`, `cloudflare-deploy`, or `render-deploy` based on hosting target.
- Image-heavy marketing/site work: `ui-ux-pro-max`, `anthropic-frontend-design`, `frontend-design`, `imagegen`.

## Standalone Installed Skills

Standalone skills are available under `/Users/linchengbo/.codex/skills`:

`$ui-ux-pro-max`, `$anthropic-frontend-design`, `$frontend-design`, `$tailwind-design-system`, `$nextjs-app-router-patterns`, `$react-state-management`, `$web-component-design`, `$design-system-patterns`, `$visual-design-foundations`, `$interaction-design`, `$ui-animation`, `$animation-designer`, `$backend-development`, `$nodejs-backend-patterns`, `$fastapi-templates`, `$api-design-principles`, `$openapi-spec-generation`, `$auth-implementation-patterns`, `$postgresql`, `$sql-optimization-patterns`, `$chatgpt-apps`, `$openai-docs`, `$web-fullstack-app`, `$playwright`, `$playwright-interactive`, `$screenshot`, `$security-best-practices`, `$vercel-deploy`, `$netlify-deploy`, `$cloudflare-deploy`, `$render-deploy`, `$figma-use`, `$figma-implement-design`, `$figma-generate-design`, `$aspnet-core`, `$sentry`, plus `$monologue-imagegen` for project-specific image assets and bundled raw `imagegen` here for general web assets.

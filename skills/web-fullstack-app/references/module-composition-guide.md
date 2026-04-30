# Module Composition Guide

This skill supports modular use. Do not force one fixed workflow.

## Standalone Modules

- `$ui-ux-pro-max` - UI/UX direction, design critique, product fit.
- `$anthropic-frontend-design` - downloaded Anthropic frontend-design skill for distinctive, polished websites, apps, and web UI.
- `$frontend-design` - tokens, palette, typography, CSS/style/accessibility analysis.
- `$tailwind-design-system` - Tailwind tokens, theme structure, responsive utilities, and component-system patterns.
- `$nextjs-app-router-patterns` - Next.js App Router, RSC, route structure, loading/error states, caching, and streaming.
- `$react-state-management` - client/server state choices with Zustand, Jotai, React Query, and local state.
- `$web-component-design` - reusable component architecture for React, Vue, and Svelte.
- `$design-system-patterns` - scalable design systems, theming, tokens, and component governance.
- `$visual-design-foundations` - hierarchy, spacing, color, typography, and visual critique.
- `$interaction-design` - flows, affordances, feedback, and interaction behavior.
- `$ui-animation` - timing, easing, reduced motion, interaction-performance rules.
- `$animation-designer` - motion concepts and choreography.
- `$backend-development` - APIs, databases, auth, security, testing, deployment.
- `$nodejs-backend-patterns` - Node.js service structure, Express/Fastify patterns, middleware, errors, and security.
- `$fastapi-templates` - FastAPI async project structure, dependency injection, and API scaffolding.
- `$api-design-principles` - REST/GraphQL contract design, resource modeling, errors, pagination, versioning.
- `$openapi-spec-generation` - OpenAPI 3.1 contracts, schemas, and generated clients.
- `$auth-implementation-patterns` - authentication and authorization implementation.
- `$postgresql` - PostgreSQL schema/table/index design.
- `$sql-optimization-patterns` - SQL query, index, and performance optimization.
- `$playwright` - browser automation and UI QA.
- `$playwright-interactive` - persistent browser debugging.
- `$security-best-practices` - official web/backend/frontend security guidance.
- `$chatgpt-apps` - official ChatGPT Apps SDK app scaffolding, MCP server, widget UI, Apps bridge, CSP, metadata, and submission workflow.
- `$openai-docs` - official OpenAI docs lookup for current Apps SDK/OpenAI API guidance.
- `$figma-implement-design` - implement UI from Figma designs.
- `$figma-generate-design` - create/update Figma designs.
- `$vercel-deploy`, `$netlify-deploy`, `$cloudflare-deploy`, `$render-deploy` - official deployment targets.
- `$aspnet-core` - official ASP.NET Core backend/web guidance.
- `$sentry` - monitoring and error reporting.
- Bundled `imagegen` - generated web images, hero art, mockups, transparent assets.

## Preset Combinations

- Web design only: `$ui-ux-pro-max + $anthropic-frontend-design + $frontend-design`.
- Frontend implementation: `$anthropic-frontend-design + $frontend-design + $ui-animation`.
- Next.js frontend: `$nextjs-app-router-patterns + $react-state-management + $tailwind-design-system + $anthropic-frontend-design`.
- Design system: `$design-system-patterns + $tailwind-design-system + $visual-design-foundations + $frontend-design`.
- Motion-heavy frontend: `$animation-designer + $ui-animation + $anthropic-frontend-design + $frontend-design`.
- Backend only: choose `$nodejs-backend-patterns`, `$fastapi-templates`, `$aspnet-core`, or `$backend-development` based on the stack.
- Secure backend: stack backend module + `$api-design-principles + $auth-implementation-patterns + $security-best-practices`.
- ASP.NET backend: `$aspnet-core + $api-design-principles + $security-best-practices`.
- Database/API contract: `$postgresql + $sql-optimization-patterns + $openapi-spec-generation + $api-design-principles`.
- Fullstack product: `$ui-ux-pro-max + $anthropic-frontend-design + frontend stack module + backend stack module + $api-design-principles`.
- Fullstack with visuals: `$ui-ux-pro-max + $anthropic-frontend-design + $frontend-design + backend stack module + imagegen`.
- ChatGPT Apps SDK app: `$chatgpt-apps + $openai-docs + $anthropic-frontend-design + $nodejs-backend-patterns`.
- Browser QA: `$playwright` or `$playwright-interactive`.
- Deploy: pick `$vercel-deploy`, `$netlify-deploy`, `$cloudflare-deploy`, or `$render-deploy`.

## User-Selected Combination

If the user names modules, use exactly that combination unless a missing safety module is clearly needed.

Examples:

- `Use $web-fullstack-app with $frontend-design only to audit CSS.`
- `Use $ui-ux-pro-max + $frontend-design to design a SaaS dashboard.`
- `Use $anthropic-frontend-design + $tailwind-design-system to build a landing page.`
- `Use $nextjs-app-router-patterns + $react-state-management to implement this Next.js dashboard.`
- `Use $nodejs-backend-patterns + $api-design-principles + $postgresql to design the backend.`
- `Use $fastapi-templates + $openapi-spec-generation to scaffold the API contract.`
- `Use $chatgpt-apps + $openai-docs to scaffold a ChatGPT app.`
- `Use $backend-development only to design the API.`
- `Use $frontend-design + $backend-development to wire the dashboard to real data.`
- `Use $figma-implement-design + $frontend-design + $playwright to implement and verify this Figma screen.`
- `Use $backend-development + $security-best-practices to design a secure auth API.`
- `Use $vercel-deploy to create a preview deployment.`

## Rules

- Load only the modules needed.
- Frontend choices should not invent backend contracts without documenting them.
- Backend choices should not assume UI behavior without naming loading/error/auth states.
- Explicit user-selected modules override presets.

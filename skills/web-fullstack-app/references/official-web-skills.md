# Downloaded Web Skills

These skills were downloaded from upstream skill repositories and should be preferred over locally written guidance when they match the task.

## Current Source Notes

- OpenAI `openai/skills` currently provides strong web-adjacent skills for browser QA, screenshots, Figma, security, ASP.NET, monitoring, and deployment.
- OpenAI `chatgpt-apps` is the official module for ChatGPT Apps SDK apps that combine MCP servers and widget UIs.
- OpenAI `frontend-skill` appeared in search cache, but it is not present in the live `openai/skills` `main` tree at the time of installation. Do not depend on it unless it returns upstream.
- Anthropic `frontend-design` is the best downloaded visual web design skill found for distinctive website/app UI work.
- `wshobson/agents` provides high-adoption practical frontend/backend engineering modules for Next.js, Tailwind, React state, Node.js, API design, FastAPI, OpenAPI, auth, PostgreSQL, and SQL optimization.

## Visual Design And Frontend

- `anthropic-frontend-design/` - use first for visually strong websites, landing pages, apps, prototypes, and UI that should avoid generic output.
- `frontend-design/` - use for local Deno tooling: style audits, token extraction/generation, palette/typography generation, component schemas, and accessibility analysis.
- `tailwind-design-system/` - use for Tailwind CSS design systems and component library structure.
- `nextjs-app-router-patterns/` - use for Next.js App Router/RSC apps.
- `react-state-management/` - use for React client/server state architecture.
- `web-component-design/` - use for reusable component architecture in React, Vue, and Svelte.
- `design-system-patterns/` - use for scalable design systems, tokens, themes, and component governance.
- `visual-design-foundations/` - use for hierarchy, typography, layout, color, and visual critique.
- `interaction-design/` - use for flows, affordances, feedback, and interaction behavior.

## Browser QA And Debugging

- `playwright/` - best general web development verification skill. Use for real browser navigation, form filling, screenshots, UI-flow debugging, and browser QA.
- `playwright-interactive/` - use for persistent browser sessions and fast iterative UI debugging.
- `screenshot/` - use for OS-level screenshot capture when browser/Figma-specific capture is not enough.

## Design To Code

- `figma-use/` - prerequisite for Figma MCP workflows.
- `figma-implement-design/` - use when implementing code from Figma.
- `figma-generate-design/` - use when creating/updating Figma screens from code or descriptions.

## ChatGPT Apps

- `chatgpt-apps/` - use for ChatGPT Apps SDK apps, MCP server scaffolds, widget UI, Apps bridge APIs, CSP/domain settings, local dev, and submission-oriented workflows.
- `openai-docs/` - use before Apps SDK/OpenAI API implementation to fetch current official docs and cite them.

## Security And Backend

- `security-best-practices/` - use for secure-by-default code, security reviews, and web frontend/backend security guidance.
- `aspnet-core/` - use for ASP.NET Core apps and APIs.
- `nodejs-backend-patterns/` - use for Node.js/TypeScript backend services.
- `fastapi-templates/` - use for FastAPI/Python APIs and async service structure.
- `api-design-principles/` - use for REST/GraphQL API design and contract review.
- `openapi-spec-generation/` - use for OpenAPI 3.1 specs and typed clients.
- `auth-implementation-patterns/` - use for authn/authz implementation.
- `postgresql/` - use for PostgreSQL schema/table/index design.
- `sql-optimization-patterns/` - use for SQL performance, indexes, and query tuning.
- `sentry/` - use for Sentry monitoring, tracing, and error reporting.

## Deployment

- `vercel-deploy/` - Vercel preview/production deployments.
- `netlify-deploy/` - Netlify deployments.
- `cloudflare-deploy/` - Cloudflare Workers, Pages, and platform services.
- `render-deploy/` - Render services and Blueprints.

## Local Supplemental Skills

Use `backend-development/` only when the stack is not covered by the downloaded backend modules or when generic backend architecture is needed across several stacks. Pair it with `security-best-practices/` whenever security matters.

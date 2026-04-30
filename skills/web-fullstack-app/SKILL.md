---
name: web-fullstack-app
description: Full bundled web application skill for designing, building, reviewing, testing, securing, and deploying frontend, backend, and fullstack web apps. Encapsulates downloaded official/high-adoption skills for Anthropic frontend-design, OpenAI ChatGPT Apps and OpenAI Docs, Playwright, screenshots, security, Figma, Vercel/Netlify/Cloudflare/Render deployment, Sentry, ASP.NET Core, Next.js App Router, Tailwind design systems, React state, Node.js backend patterns, API design, FastAPI, OpenAPI, auth, PostgreSQL, SQL optimization, plus local UIProMax, frontend-design tooling, UI animation, animation-designer, Image Gen, and backend-development fallback. Use for websites, landing pages, dashboards, SaaS apps, admin panels, e-commerce, blogs, ChatGPT Apps SDK apps, API services, authentication, databases, frontend/backend integration, accessibility, responsive design, browser QA, security, monitoring, and deployment. Supports standalone modules, preset combinations, and user-selected skill pairings.
---

# Web Fullstack App

## Overview

Use this as a general web app skill for frontend-only, backend-only, and fullstack work. It bundles the best relevant downloaded web skills found for visual design, frontend engineering, backend engineering, browser QA, security, observability, and deployment, while still supporting standalone module calls, preset combinations, and user-selected combinations instead of one fixed workflow.

## Quick Workflow

1. Identify scope: frontend-only, backend-only, or fullstack.
2. Read `references/module-composition-guide.md` and respect any user-selected modules.
3. Read `references/official-web-skills.md` to prefer downloaded official/high-adoption skills for visual design, frontend engineering, backend engineering, browser QA, security, Figma, deploy, monitoring, and ASP.NET.
4. Read `references/full-bundle-manifest.md` to choose bundled modules when no explicit module selection is given.
5. For visual/UI work, read `references/frontend-design-workflow.md`.
6. For backend/API/data/auth work, read `references/backend-workflow.md`.
7. For frontend-backend integration, read `references/fullstack-integration-guide.md`.
8. Load only the needed copied modules from `references/full-bundle/<module>/SKILL.md`.
9. Match the target repo's existing framework and conventions before adding dependencies.
10. Verify with the narrowest useful frontend/backend checks, or report why verification could not run.

## Core Rules

- Build the actual app/tool/dashboard/page requested, not a generic marketing shell unless the user asks for one.
- Prefer the existing framework and design system in the repo.
- Keep frontend validation and backend validation aligned; backend remains the authority for security.
- Make API contracts explicit before wiring UI to data.
- Handle loading, empty, error, unauthorized, and success states.
- Use accessible HTML, keyboard navigation, responsive layout, reduced motion, and contrast checks as defaults.
- Do not introduce third-party dependencies unless they materially reduce complexity or match existing stack patterns.

## Verification

Use `references/verification-guide.md` for common commands. Prefer repo-specific scripts when available.

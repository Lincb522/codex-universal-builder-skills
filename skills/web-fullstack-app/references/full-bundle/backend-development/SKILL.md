---
name: backend-development
description: General-purpose backend development skill for designing, implementing, reviewing, and improving server-side applications and APIs. Use for REST/JSON APIs, GraphQL, realtime services, authentication, authorization, databases, migrations, caching, queues, background jobs, security, observability, testing, deployment, and backend architecture in Node.js/TypeScript, Python/FastAPI, Go, or similar stacks.
---

# Backend Development

## Overview

Use this for backend-only work or as the backend half of a fullstack web app. It focuses on stable API contracts, secure data access, maintainable service boundaries, testability, and production readiness.

## Quick Workflow

1. Identify the stack, runtime, framework, database, hosting target, and existing repo patterns.
2. Read `references/backend-stacks.md` when choosing or adapting stack conventions.
3. Read `references/api-design.md` for API contracts, validation, errors, pagination, and versioning.
4. Read `references/data-auth-security.md` for database, migrations, auth, authorization, secrets, and security defaults.
5. Read `references/testing-observability-deployment.md` for tests, logging, monitoring, and deployment checks.
6. Implement the smallest backend surface that satisfies the request.
7. Verify with focused tests, type checks, lint, migrations dry-runs, or local server smoke checks.

## Core Rules

- Match the existing stack and local conventions before introducing a new framework or ORM.
- Validate all external input at the boundary.
- Keep route handlers thin; move business logic into services/use cases.
- Keep data access behind repositories or query modules when complexity grows.
- Use explicit authorization checks near protected actions, not only in UI.
- Never hardcode secrets. Use environment variables, secret stores, or local example files.
- Prefer structured errors and stable response shapes.
- Add or update tests for API behavior, security-sensitive flows, migrations, and nontrivial business logic.

## Output Expectations

For backend design work, provide:

- API contract.
- Data model or migration plan.
- Auth/security assumptions.
- Error and validation behavior.
- Verification plan.

For backend implementation work, edit the relevant files directly and run the narrowest useful checks.

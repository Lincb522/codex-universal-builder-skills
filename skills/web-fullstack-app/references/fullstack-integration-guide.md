# Fullstack Integration Guide

Use this when frontend and backend are both involved.

## Contract

Before implementation, define:

- Endpoint/method/path.
- Request schema.
- Response schema.
- Error schema.
- Auth/role requirements.
- Pagination/filtering/sorting.
- Caching/revalidation behavior.

## Type Sharing

Prefer shared types or generated clients when the stack supports it:

- OpenAPI.
- tRPC.
- GraphQL codegen.
- Shared TypeScript schemas.
- Zod schema inference.

Avoid duplicating manually drift-prone types across frontend and backend.

Use `openapi-spec-generation` when OpenAPI is the contract source, `api-design-principles` when designing or reviewing the resource model, and the relevant frontend/backend stack modules to wire the generated or shared types into the app.

## Data Fetching

- Use existing query/client patterns.
- Keep server state separate from UI state.
- Handle cancellation, retry, stale data, optimistic updates only when appropriate.
- Do not trust frontend validation as security.

## Authentication

Frontend should handle:

- logged-out state
- forbidden state
- token/session expiry
- redirect or re-auth UX

Backend should enforce:

- identity
- ownership
- role/scope permission
- CSRF/CORS/session security where applicable

## Verification

- Backend tests for API behavior.
- Frontend tests or smoke checks for UI states.
- End-to-end smoke test for the main flow when feasible.
- Browser verification with `playwright` or `playwright-interactive` for critical user flows.

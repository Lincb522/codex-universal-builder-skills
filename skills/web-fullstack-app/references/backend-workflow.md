# Backend Workflow

Use this for API, database, authentication, authorization, jobs, realtime, security, testing, and deployment.

## Workflow

1. Prefer downloaded stack modules when they match the repo: `nodejs-backend-patterns/SKILL.md`, `fastapi-templates/SKILL.md`, or `aspnet-core/SKILL.md`.
2. Load `api-design-principles/SKILL.md` for public API shape, REST/GraphQL conventions, errors, pagination, filtering, and versioning.
3. Load `auth-implementation-patterns/SKILL.md` for authentication and authorization work.
4. Load `postgresql/SKILL.md` and `sql-optimization-patterns/SKILL.md` for relational schema, indexes, and query performance.
5. Load `openapi-spec-generation/SKILL.md` when API contracts or generated clients matter.
6. Load `security-best-practices/SKILL.md` for secure defaults and review.
7. Load `sentry/SKILL.md` for observability, tracing, and error reporting.
8. Load `backend-development/SKILL.md` only as a generic supplemental backend module when no downloaded stack-specific backend skill fits.
9. Define API contract before coding frontend integration.
10. Define data model, migrations, indexes, and ownership rules.
11. Define authentication and authorization behavior.
12. Implement route/controller, validation schema, service logic, and data access.
13. Add tests for happy path, validation, auth failures, and edge cases.
14. Verify with repo-specific typecheck/test/build commands.

## Backend Defaults

- Validate all inputs server-side.
- Keep route handlers thin.
- Use transactions where data consistency matters.
- Use parameterized SQL or ORM-safe queries.
- Do not log secrets.
- Make error shapes stable.
- Add rate limits or abuse protection for auth and public mutation endpoints.
- Keep API contracts, validation schemas, and generated client types synchronized when the stack supports it.
- Prefer framework-native request validation, middleware, and test utilities before adding new libraries.

## API/UI Alignment

Every frontend data flow should know:

- Loading state.
- Empty state.
- Error state.
- Auth expired/unauthorized state.
- Success state.
- Retry behavior.

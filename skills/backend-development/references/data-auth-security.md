# Data, Auth, And Security

## Database

- Use migrations for schema changes.
- Make migrations reversible when practical.
- Add indexes for lookup, foreign key, uniqueness, and cursor pagination paths.
- Use transactions for multi-row consistency.
- Avoid N+1 queries on list endpoints.
- Store timestamps consistently, usually UTC.

## ORM And Query Builders

- Use the repo's existing ORM/query builder.
- Keep raw SQL parameterized.
- Avoid placing business rules only in ORM hooks when explicit service logic is clearer.

## Authentication

Common options:

- Session cookies for browser apps.
- JWT access tokens plus refresh strategy for distributed clients.
- OAuth/OIDC for third-party identity.
- API keys for server-to-server usage.

Security defaults:

- Hash passwords with modern password hashing if passwords are stored.
- Use secure, httpOnly, sameSite cookies for browser sessions.
- Rotate/expire tokens.
- Keep secrets out of logs and commits.

## Authorization

- Check ownership/roles/scopes server-side.
- Prefer deny-by-default for protected resources.
- Test cross-user access attempts.
- Separate authentication ("who are you") from authorization ("can you do this").

## Web Security

- CORS should be explicit, not `*` with credentials.
- Use CSRF protection for cookie-authenticated browser mutations.
- Rate-limit auth and abuse-prone endpoints.
- Sanitize untrusted HTML or avoid rendering it.
- Set security headers at the framework/proxy layer.
- Validate file uploads: type, size, scanning needs, storage location.

# Testing, Observability, And Deployment

## Testing

Use the narrowest useful test level:

- Unit tests for pure business logic.
- Integration tests for routes, repositories, and database behavior.
- Contract tests when clients depend on stable API shapes.
- Migration tests for risky schema changes.
- Security tests for authorization boundaries.

Include tests for:

- Validation failures.
- Unauthorized/forbidden access.
- Happy path.
- Edge cases and conflicts.

## Observability

- Use structured logs.
- Include request IDs or trace IDs.
- Log errors with context, not secrets.
- Add metrics for latency, error rate, throughput, queue depth, and background jobs.
- Add health/readiness endpoints when deploying services.

## Deployment

Check:

- Required environment variables.
- Database migrations.
- Build command.
- Start command.
- Runtime version.
- Static assets or uploads.
- CORS and public URL config.
- Secrets and connection strings.

## Verification Commands

Adapt to the repo:

```bash
npm test
npm run typecheck
npm run lint
npm run build
pytest
go test ./...
```

For local smoke checks, start the server and hit a health endpoint or a focused API route.

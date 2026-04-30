# Verification Guide

Use repo scripts first.

## Frontend

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

For Deno-based design tooling:

```bash
deno check <script.ts>
deno run --allow-read <script.ts> <input>
```

## Backend

```bash
npm run test
npm run typecheck
npm run lint
npm run build
deno test
pytest
go test ./...
dotnet test
```

## Fullstack Smoke

- Start dev server.
- Hit health/API endpoint.
- Open the app route.
- Verify loading, success, error, and auth states when feasible.
- Prefer official `playwright` or `playwright-interactive` for browser-flow verification.
- For typed contracts, verify OpenAPI/client generation or shared schema typecheck when present.

## Visual

Use browser screenshots or manual viewport checks for:

- 375px mobile
- tablet
- desktop
- dark/light mode
- keyboard focus
- reduced motion

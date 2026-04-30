# Backend Stacks

## Stack Selection

Prefer the existing repo stack. If creating from scratch, choose based on user needs:

- Node.js/TypeScript + Express/Fastify/Hono: simple APIs, broad ecosystem, fast iteration.
- Next.js API routes/server actions: fullstack React apps with colocated backend logic.
- NestJS: larger TypeScript teams that want structured modules and dependency injection.
- Python + FastAPI: data-heavy APIs, ML integrations, concise typed endpoints.
- Go + chi/gin/fiber: small deployable binaries, high concurrency, operational simplicity.
- Rails/Django/Laravel: batteries-included CRUD/admin/product apps when the ecosystem fits.

## TypeScript Defaults

- Use strict TypeScript.
- Keep schemas close to request boundaries with Zod/Valibot/Yup or framework validators.
- Use async route handlers with centralized error handling.
- Avoid global mutable state except stable clients/pools.
- Use generated or inferred types for database models when available.

## Python Defaults

- Use type hints and Pydantic models.
- Keep FastAPI dependencies small and explicit.
- Use async database clients only if the stack is async end-to-end.
- Keep settings in environment-backed config objects.

## Project Structure

For nontrivial APIs:

```text
src/
  routes/
  services/
  repositories/
  schemas/
  middleware/
  config/
  tests/
```

Adapt to the framework's established conventions.

# API Design

## Contract First

Define:

- Resource or action name.
- Method and path.
- Auth requirements.
- Request body/query/path params.
- Response shape.
- Error shape.
- Pagination/filter/sort rules.
- Idempotency behavior for mutations when relevant.

## REST Defaults

- Use nouns for resources: `/users`, `/projects/:id`.
- Use standard methods: GET, POST, PATCH, DELETE.
- Return `201` for created resources, `204` for successful no-content deletes.
- Use `400` validation, `401` unauthenticated, `403` unauthorized, `404` not found, `409` conflict, `422` semantic validation when the stack uses it.
- Keep response envelopes consistent.

## Validation

- Validate input at the API boundary.
- Reject unknown fields for sensitive mutations unless compatibility requires them.
- Normalize dates, IDs, enums, and booleans explicitly.
- Avoid trusting client-calculated totals, ownership, roles, or prices.

## Pagination

Prefer cursor pagination for mutable large collections. Offset pagination is acceptable for admin/small stable lists.

Include:

- `items`
- `nextCursor` or pagination metadata
- applied filters/sort when helpful

## Errors

Use stable machine-readable codes:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request.",
    "details": []
  }
}
```

Do not leak stack traces or secret values.

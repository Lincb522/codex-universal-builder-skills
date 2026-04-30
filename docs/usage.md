# Complete Usage Guide

## Three Ways To Use The Pack

### 1. One-shot orchestrator

Use an orchestrator when you want Codex to choose a workflow:

```text
Use $web-fullstack-app to create a fullstack SaaS admin app with auth, billing-ready data models, browser QA, and deployment guidance.
```

```text
Use $swift-apple-app to create a macOS menu bar app with SwiftUI, settings, persistence, and a polished icon.
```

### 2. Standalone module

Use a module when the task is narrow:

```text
Use $api-design-principles to review this REST API.
```

```text
Use $swiftui-performance-audit to investigate this janky SwiftUI list.
```

### 3. Custom skill blend

Use a blend when you know the stack:

```text
Use $nextjs-app-router-patterns + $react-state-management + $tailwind-design-system + $playwright to implement this dashboard.
```

```text
Use $fastapi-templates + $api-design-principles + $openapi-spec-generation + $security-best-practices to scaffold an API.
```

## Web Recipes

### Premium landing page

```text
Use $web-fullstack-app with $ui-ux-pro-max, $anthropic-frontend-design, $frontend-design, $ui-animation, and $playwright to build a premium landing page.
```

### Next.js product app

```text
Use $nextjs-app-router-patterns + $react-state-management + $tailwind-design-system + $api-design-principles + $playwright to build a typed product workspace.
```

### Node API

```text
Use $nodejs-backend-patterns + $api-design-principles + $auth-implementation-patterns + $security-best-practices to implement a secure API.
```

### FastAPI service

```text
Use $fastapi-templates + $openapi-spec-generation + $postgresql + $sql-optimization-patterns to create a Python API service.
```

### ChatGPT Apps SDK

```text
Use $chatgpt-apps + $openai-docs + $anthropic-frontend-design to build a ChatGPT Apps SDK app with an MCP server and widget UI.
```

## Apple Recipes

### Universal iOS/macOS app

```text
Use $swift-apple-app to create a universal SwiftUI app with platform-specific navigation and shared models.
```

### Animation-heavy SwiftUI feature

```text
Use $swiftui-animation + $swiftui-expert-skill + $ui-animation to build a matched-geometry transition.
```

### Performance review

```text
Use $swiftui-performance-audit + $swiftui-pro to review and improve runtime performance.
```

## Verification Recipes

### Browser QA

```text
Use $playwright to open the local app, verify the main flow, and capture screenshots.
```

### Security review

```text
Use $security-best-practices to review this frontend/backend change for common security issues.
```

### Deployment

```text
Use $vercel-deploy to create a Vercel deployment plan for this Next.js app.
```

## Working Rules

- Prefer existing repo conventions before adding dependencies.
- Use explicit API contracts before wiring UI to backend data.
- Verify with the smallest meaningful command set.
- Keep skill combinations lean; load only what the task needs.
- Restart Codex after installing or updating skills.

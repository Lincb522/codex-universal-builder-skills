# Frontend And Web Design Workflow

Use this for websites, landing pages, dashboards, admin panels, SaaS apps, blogs, e-commerce, and frontend UI.

## Workflow

1. Load `ui-ux-pro-max` for product fit, style, layout, UX rules, and accessibility priorities.
2. Load `anthropic-frontend-design` for distinctive art direction, hierarchy, responsive layout, imagery, and polished web UI execution.
3. Load `frontend-design` for design tokens, palette, typography, component specs, CSS/style audits, and accessibility analysis.
4. Load `tailwind-design-system`, `design-system-patterns`, or `web-component-design` when the work needs component-system structure.
5. Load `nextjs-app-router-patterns` and `react-state-management` for Next.js/React implementation details.
6. Load `ui-animation` for motion timing, easing, reduced motion, and interaction rules.
7. Load `animation-designer` for complex motion concepts and choreography.
8. Load `imagegen` when the page needs raster imagery, hero art, mockups, or texture assets.

## UI Expectations

- Build the requested usable page/app, not filler sections.
- Include responsive behavior for mobile, tablet, and desktop.
- Provide loading, empty, error, and disabled states for data-driven UI.
- Use semantic HTML.
- Keep keyboard navigation and focus states visible.
- Respect `prefers-reduced-motion`.
- Reserve space for async content to avoid layout shift.

## Frontend Implementation

- Match the existing stack: React, Next.js, Vue, Svelte, Astro, vanilla HTML/CSS, Tailwind, shadcn/ui, etc.
- Use existing components and tokens first.
- Keep component state local unless shared state is justified.
- Fetch data through existing client utilities when present.
- Do not hardcode backend URLs if the repo has environment/config patterns.
- For Next.js App Router, explicitly account for server/client component boundaries, loading/error files, cache/revalidation behavior, and route-level data fetching.
- For Tailwind, prefer a coherent token/theme system over one-off utility drift.

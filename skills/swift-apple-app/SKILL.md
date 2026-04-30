---
name: swift-apple-app
description: Full bundled general-purpose Swift app skill for creating, implementing, reviewing, and improving iOS, macOS, and universal Apple platform apps. Encapsulates copied capabilities for Swift style, iOS Swift development, SwiftUI expert guidance, SwiftUI patterns, SwiftUI animation, SwiftUI pro review, SwiftUI performance audit, UI/UX Pro Max, frontend-design, UI animation, animation-designer, and Image Gen. Use for new SwiftUI app creation, cross-platform iOS/macOS architecture, app UI, state management, networking, persistence, localization, accessibility, performance, animation, image assets, and code review. Supports standalone modules, preset combinations, and user-selected skill pairings.
---

# Swift Apple App

## Overview

Use this as a universal Swift app skill for iOS, macOS, and shared SwiftUI applications. It is not tied to one project: it includes a full copied skill bundle under `references/full-bundle/` and supports standalone module use, preset combinations, and user-selected combinations.

## Quick Workflow

1. Identify the target: iOS-only, macOS-only, or universal iOS/macOS.
2. Read `references/platform-guide.md` for platform structure and shared-vs-specific code rules.
3. Read `references/module-composition-guide.md` and respect any user-selected modules.
4. For new app creation, read `references/app-creation-workflow.md`.
5. For UI or design work, combine UIProMax, frontend-design, SwiftUI expert, and optional motion modules.
6. For animation or interaction work, read `references/motion-interaction-guide.md`.
7. For generated image assets, load bundled `imagegen` and save project-bound assets into the app workspace.
8. Load only the copied modules needed from `references/full-bundle/<module>/SKILL.md`.
9. Match the target repo's existing patterns before adding abstractions.
10. Verify with the narrowest useful Swift/Xcode command, or report why verification could not run.

## Core Rules

- Prefer SwiftUI for new UI unless the user asks for UIKit/AppKit.
- Keep shared business logic and models platform-neutral.
- Put platform-specific APIs behind `#if os(iOS)`, `#if os(macOS)`, availability checks, or dedicated platform files.
- Use `@MainActor` for UI-facing observable state.
- Prefer async/await and structured concurrency.
- Use accessibility, localization, Dynamic Type, keyboard navigation, and reduced-motion support as default quality bars.
- Do not introduce third-party dependencies unless the user asks or the existing project already uses them.
- For code edits, include Swift style rules even when not explicitly requested.

## Verification

See `references/verification-guide.md` for common commands. Prefer project-specific schemes when available.

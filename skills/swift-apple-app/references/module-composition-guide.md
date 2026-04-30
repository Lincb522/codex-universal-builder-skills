# Module Composition Guide

This skill supports standalone modules, presets, and custom combinations.

## Standalone Modules

- `$swift-style` - Swift code style.
- `$ios-swift-development` - iOS services, networking, persistence, architecture.
- `$swiftui-expert-skill` - SwiftUI implementation and platform APIs.
- `$swiftui-patterns` - state, navigation, Observation, environment.
- `$swiftui-animation` - native SwiftUI motion.
- `$swiftui-pro` - SwiftUI code review.
- `$swiftui-performance-audit` - performance diagnosis.
- `$ui-ux-pro-max` - UI/UX direction and audit.
- `$frontend-design` - tokens, palette, typography, accessibility/style analysis.
- `$animation-designer` - motion concepts and choreography.
- `$ui-animation` - timing/easing/reduced-motion rules.
- `$monologue-imagegen` or bundled `imagegen` - generated bitmap assets; use project-specific wrappers if available.

## Preset Combinations

- New app: `$swiftui-expert-skill + $swiftui-patterns + $ios-swift-development + $swift-style`.
- Universal iOS/macOS UI: `$swiftui-expert-skill + $swiftui-patterns + $swift-style`.
- Design system: `$ui-ux-pro-max + $frontend-design + $swiftui-expert-skill`.
- Motion: `$animation-designer + $ui-animation + $swiftui-animation + $swiftui-performance-audit`.
- Performance: `$swiftui-performance-audit + $swiftui-expert-skill + $swift-style`.
- Review: `$swiftui-pro + $swiftui-performance-audit` when needed.

## User-Selected Combinations

If the user names modules, use exactly that combination unless a missing safety module is clearly needed.

Examples:

- `Use $swift-apple-app with $swiftui-expert-skill + $swiftui-patterns to create a universal app shell.`
- `Use $ui-ux-pro-max + $frontend-design for the onboarding UI direction only.`
- `Use $animation-designer + $swiftui-animation for a macOS sidebar transition.`
- `Use $swiftui-performance-audit only to review list scrolling.`

## Rules

- Do not run every module automatically.
- Load only modules relevant to the task.
- Bundled copies make this skill self-contained; standalone installed skills are valid when invoked directly.
- Explicit user-selected combinations override presets.

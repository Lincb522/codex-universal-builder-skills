# Motion And Interaction Guide

Use this for animation, transitions, gestures, haptics, loading states, and interaction feedback.

## Module Roles

- UIProMax: decide whether motion supports UX.
- frontend-design: align motion with component states and tokens.
- animation-designer: design choreography and microinteractions.
- ui-animation: timing, easing, interruptibility, reduced-motion rules.
- swiftui-animation: SwiftUI implementation.
- swiftui-performance-audit: performance guardrails.

## SwiftUI Defaults

- Start with explicit `withAnimation`.
- Prefer native springs for app interactions.
- Keep motion brief and interruptible.
- Avoid animating large view trees.
- Respect reduced motion and provide non-motion state cues.
- For macOS, do not overuse touch-style bounce; support hover/focus/keyboard feedback.

## Translation

- Button feedback -> `ButtonStyle`, `scaleEffect`, `opacity`, haptics on iOS.
- Screen transitions -> `transition`, `NavigationStack`, matched geometry where justified.
- Loading -> progress/skeleton states that do not shift layout.
- Drag/gesture -> state-driven SwiftUI gestures with cancellation/reversal behavior.

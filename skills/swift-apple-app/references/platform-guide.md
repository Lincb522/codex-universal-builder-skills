# iOS And macOS Platform Guide

## App Shape

Choose one of three shapes:

- iOS-only: optimize for touch, compact screens, app lifecycle, permissions, background behavior.
- macOS-only: optimize for windows, menus, keyboard shortcuts, focus, toolbar/sidebar/table patterns.
- Universal iOS/macOS: share models, services, and most SwiftUI views; isolate platform-specific shell and controls.

## Recommended Structure

For universal SwiftUI apps:

```text
Sources/App/
  AppEntry/
  Shared/
    Models/
    Services/
    ViewModels/
    Views/
    DesignSystem/
  iOS/
    Views/
    PlatformServices/
  macOS/
    Views/
    PlatformServices/
  Resources/
```

Adapt to existing project structure when working in an existing repo.

## Shared Code

Good shared targets:

- Data models.
- API clients and repositories.
- Persistence abstractions.
- View models that do not depend on UIKit/AppKit.
- Design tokens.
- Reusable SwiftUI views with platform-neutral behavior.

## Platform-Specific Code

Separate:

- Camera/photos/files/security-scoped bookmarks.
- Push notifications and background modes.
- Menu commands and keyboard shortcuts.
- Window management.
- Sidebar/table/toolbar variants.
- UIKit/AppKit bridges.

Use:

```swift
#if os(iOS)
// iOS-only
#elseif os(macOS)
// macOS-only
#endif
```

Prefer small platform adapters over scattered conditionals in view bodies.

## SwiftUI State

- Use `@State` for view-local state.
- Use `@Observable` with `@State` for owned models on modern SwiftUI.
- Use `@Binding` only for child mutation of parent state.
- Use `@Environment` for app-wide dependencies and platform values.
- Keep UI-facing state on `@MainActor`.

## UX Defaults

- iOS: touch targets, Dynamic Type, safe areas, gestures, haptics.
- macOS: keyboard navigation, menus, focus rings, resizable windows, hover states.
- Universal: support both interaction models rather than treating macOS as a stretched iPad UI.

# App Creation Workflow

Use this when creating a new Swift app or adding a new app target.

## 1. Clarify App Shape

Determine:

- iOS, macOS, or universal.
- SwiftUI-only or mixed UIKit/AppKit.
- Minimum OS versions.
- Persistence needs.
- Network/API needs.
- Authentication and secrets.
- Localization and accessibility scope.

## 2. Create Architecture

Default to:

- SwiftUI app entry.
- Shared models/services/repositories.
- View models or observable feature models.
- Platform shell files for iOS/macOS differences.
- A small design-system layer for colors, typography, spacing, and components.

## 3. Build UI

Use:

- `ui-ux-pro-max` for UX and visual direction.
- `frontend-design` for token and component-system thinking.
- `swiftui-expert-skill` for implementation.
- `swiftui-animation` only when motion is central.

## 4. Data And Services

Use async/await. Keep networking in services/repositories, not views.

For persistence, choose the lightest appropriate layer:

- `UserDefaults` for small preferences.
- SwiftData/Core Data for structured local data.
- Files/Keychain for documents/secrets.

## 5. Platform Integration

iOS:

- permissions, background modes, notifications, widgets, share sheets, haptics.

macOS:

- commands, settings scene, menu bar, document/window behavior, keyboard shortcuts, drag/drop.

## 6. Verification

Create or run the smallest useful checks:

- Build the active scheme.
- Compile package targets.
- Run unit tests if present.
- Manually inspect UI-critical paths when visual output matters.

# Verification Guide

Use the narrowest reliable check for the repo.

## Xcode Project

```bash
xcodebuild -project App.xcodeproj -scheme App -destination 'generic/platform=iOS' CODE_SIGNING_ALLOWED=NO build
xcodebuild -project App.xcodeproj -scheme App -destination 'platform=macOS' build
```

## Workspace

```bash
xcodebuild -workspace App.xcworkspace -scheme App -destination 'generic/platform=iOS' CODE_SIGNING_ALLOWED=NO build
xcodebuild -workspace App.xcworkspace -scheme App -destination 'platform=macOS' build
```

## Swift Package

```bash
swift build
swift test
```

## Focused Checks

- Use `rg` to confirm symbols, localization keys, and call sites.
- Read touched call sites for compile risks.
- For UI, check iOS compact width, macOS resizable windows, Dynamic Type, dark mode, keyboard navigation, and reduced motion.

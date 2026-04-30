# Getting Started

Codex Universal Builder Skills is a complete local skill pack. It can be installed as a full suite or as focused profiles.

## Requirements

- Codex with local skills support.
- Git.
- Bash-compatible shell.
- Deno for the project website and validation task shortcuts.
- Python 3 for the validation script.

## Install Everything

```bash
git clone https://github.com/Lincb522/codex-universal-builder-skills.git
cd codex-universal-builder-skills
./scripts/install.sh all
```

Restart Codex after installation.

## Install Only One Profile

```bash
./scripts/install.sh web
./scripts/install.sh apple
./scripts/install.sh creative
./scripts/install.sh qa
./scripts/install.sh deploy
```

## Install Location

The installer uses:

```bash
${CODEX_HOME:-$HOME/.codex}/skills
```

Override it when needed:

```bash
CODEX_HOME=/tmp/codex-home ./scripts/install.sh web
```

## First Prompts

```text
Use $web-fullstack-app to build a production-ready marketing site with motion and Playwright verification.
```

```text
Use $swift-apple-app to scaffold a universal SwiftUI app for iOS and macOS.
```

```text
Use $anthropic-frontend-design + $tailwind-design-system to redesign this dashboard.
```

## Check The Install

After restarting Codex, ask:

```text
What web and Apple app skills are available?
```

You should see the orchestrators and standalone modules in the skills list.

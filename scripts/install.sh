#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST_ROOT="${CODEX_HOME:-$HOME/.codex}/skills"
PROFILE="${1:-all}"

WEB_SKILLS=(
  web-fullstack-app
  ui-ux-pro-max
  anthropic-frontend-design
  frontend-design
  tailwind-design-system
  nextjs-app-router-patterns
  react-state-management
  web-component-design
  design-system-patterns
  visual-design-foundations
  interaction-design
  nodejs-backend-patterns
  fastapi-templates
  aspnet-core
  backend-development
  api-design-principles
  openapi-spec-generation
  auth-implementation-patterns
  postgresql
  sql-optimization-patterns
  chatgpt-apps
  openai-docs
)

APPLE_SKILLS=(
  swift-apple-app
  ios-swift-development
  swift-style
  swiftui-expert-skill
  swiftui-patterns
  swiftui-pro
  swiftui-animation
  swiftui-performance-audit
)

CREATIVE_SKILLS=(
  imagegen
  ui-animation
  animation-designer
  ui-ux-pro-max
  anthropic-frontend-design
  frontend-design
)

QA_SKILLS=(
  playwright
  playwright-interactive
  screenshot
  security-best-practices
  sentry
)

DEPLOY_SKILLS=(
  vercel-deploy
  netlify-deploy
  cloudflare-deploy
  render-deploy
)

FIGMA_SKILLS=(
  figma-use
  figma-implement-design
  figma-generate-design
)

if [ "$PROFILE" = "list" ]; then
  find "$ROOT_DIR/skills" -mindepth 1 -maxdepth 1 -type d -exec basename {} \; | sort
  exit 0
fi

unique() {
  awk '!seen[$0]++'
}

profile_skills() {
  case "$PROFILE" in
    all)
      printf "%s\n" "${WEB_SKILLS[@]}" "${APPLE_SKILLS[@]}" "${CREATIVE_SKILLS[@]}" "${QA_SKILLS[@]}" "${DEPLOY_SKILLS[@]}" "${FIGMA_SKILLS[@]}" | unique
      ;;
    web)
      printf "%s\n" "${WEB_SKILLS[@]}" "${CREATIVE_SKILLS[@]}" "${QA_SKILLS[@]}" "${DEPLOY_SKILLS[@]}" "${FIGMA_SKILLS[@]}" | unique
      ;;
    apple)
      printf "%s\n" "${APPLE_SKILLS[@]}" "${CREATIVE_SKILLS[@]}" | unique
      ;;
    creative)
      printf "%s\n" "${CREATIVE_SKILLS[@]}" | unique
      ;;
    qa)
      printf "%s\n" "${QA_SKILLS[@]}" | unique
      ;;
    deploy)
      printf "%s\n" "${DEPLOY_SKILLS[@]}" | unique
      ;;
    *)
      echo "Unknown profile: $PROFILE" >&2
      echo "Use one of: all, web, apple, creative, qa, deploy, list" >&2
      exit 1
      ;;
  esac
}

mkdir -p "$DEST_ROOT"

installed=0
while IFS= read -r skill; do
  [ -n "$skill" ] || continue
  src="$ROOT_DIR/skills/$skill"
  dest="$DEST_ROOT/$skill"
  if [ ! -d "$src" ]; then
    echo "Missing skill directory: $src" >&2
    exit 1
  fi
  rsync -a --delete "$src/" "$dest/"
  echo "Installed $skill -> $dest"
  installed=$((installed + 1))
done < <(profile_skills)

echo
echo "Installed $installed skill(s) into $DEST_ROOT"
echo "Restart Codex to pick up new or updated skills."

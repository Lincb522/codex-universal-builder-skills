#!/usr/bin/env python3
"""Validate the local skill pack without third-party dependencies."""

from __future__ import annotations

from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
SKILLS = ROOT / "skills"
FRONTMATTER_RE = re.compile(r"^---\n(?P<body>.*?)\n---\n", re.DOTALL)


def parse_frontmatter(text: str) -> dict[str, str]:
    match = FRONTMATTER_RE.match(text)
    if not match:
        return {}

    data: dict[str, str] = {}
    for line in match.group("body").splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#") or ":" not in stripped:
            continue
        key, value = stripped.split(":", 1)
        data[key.strip()] = value.strip().strip('"').strip("'")
    return data


def validate_skill(path: Path) -> list[str]:
    errors: list[str] = []
    skill_md = path / "SKILL.md"
    if not skill_md.exists():
        return [f"{path.name}: missing SKILL.md"]

    text = skill_md.read_text(encoding="utf-8")
    metadata = parse_frontmatter(text)
    for key in ("name", "description"):
      if not metadata.get(key):
          errors.append(f"{path.name}: missing frontmatter field '{key}'")

    declared_name = metadata.get("name")
    if declared_name and not re.fullmatch(r"[a-z0-9][a-z0-9-]*", declared_name):
        errors.append(f"{path.name}: name should be lowercase kebab-case")

    if path.name != declared_name:
        errors.append(f"{path.name}: directory name differs from skill name '{declared_name}'")

    description = metadata.get("description", "")
    if len(description) > 1600:
        errors.append(f"{path.name}: description is very long ({len(description)} chars)")

    return errors


def main() -> int:
    if not SKILLS.exists():
        print(f"Missing skills directory: {SKILLS}", file=sys.stderr)
        return 1

    errors: list[str] = []
    skill_dirs = sorted(path for path in SKILLS.iterdir() if path.is_dir())
    for skill_dir in skill_dirs:
        errors.extend(validate_skill(skill_dir))

    if errors:
        print("Skill validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print(f"Validated {len(skill_dirs)} skills.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

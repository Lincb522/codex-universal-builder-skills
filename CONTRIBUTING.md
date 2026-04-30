# Contributing

Thanks for improving Codex Universal Builder Skills.

## Local Setup

```bash
git clone https://github.com/Lincb522/codex-universal-builder-skills.git
cd codex-universal-builder-skills
deno task validate
```

## Guidelines

- Keep skills self-contained.
- Keep `SKILL.md` concise and use `references/` for deep details.
- Preserve upstream license files.
- Add new skills to `docs/modules.md` and `scripts/install.sh`.
- Update `CHANGELOG.md` for user-visible changes.
- Do not include project-specific logs, recordings, crash reports, secrets, or generated build outputs.

## Validation

```bash
python3 scripts/validate_skills.py
```

## Pull Request Checklist

- [ ] Validation passes.
- [ ] Docs updated.
- [ ] Install profiles updated if needed.
- [ ] License and source notices preserved.

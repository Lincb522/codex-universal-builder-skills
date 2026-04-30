# Update Guide

## User Update

Pull the latest pack and reinstall:

```bash
git pull
./scripts/install.sh all
```

Restart Codex after reinstalling.

## Maintainer Update

When updating bundled skills:

1. Update or replace the relevant directory under `skills/`.
2. Preserve upstream license files and notices.
3. Run validation:

```bash
deno task validate
```

4. Check the website:

```bash
deno task site
```

5. Update `CHANGELOG.md`.
6. Commit and push.

## Versioning

Use simple semantic versions:

- Patch: docs, metadata, small skill wording fixes.
- Minor: new skills, new install profiles, new website sections.
- Major: breaking skill names, profile changes, or installer behavior changes.

## Adding A New Skill

1. Place the skill in `skills/<skill-name>/`.
2. Ensure `skills/<skill-name>/SKILL.md` has YAML frontmatter with `name` and `description`.
3. Add it to `scripts/install.sh` if it belongs to a profile.
4. Document it in `docs/modules.md`.
5. Mention the source in `NOTICE.md` if it came from another project.

## Removing A Skill

1. Remove the skill directory.
2. Remove it from install profiles.
3. Remove docs references.
4. Add a migration note in `CHANGELOG.md`.

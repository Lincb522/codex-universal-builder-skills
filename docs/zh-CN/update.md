# 更新说明

[English](../update.md) | 简体中文

## 用户更新

拉取最新版本并重新安装：

```bash
git pull
./scripts/install.sh all
```

重新安装后请重启 Codex。

## 维护者更新

更新打包技能时：

1. 更新或替换 `skills/` 下对应目录。
2. 保留上游 license 文件和 notices。
3. 运行验证：

```bash
deno task validate
```

4. 检查网站：

```bash
deno task site
```

5. 更新 `CHANGELOG.md`。
6. 提交并推送。

## 版本规则

使用简单语义化版本：

- Patch：文档、metadata、小范围技能描述修正。
- Minor：新增技能、新增安装组合、新增网站区块。
- Major：破坏性技能名、安装组合或安装器行为变化。

## 新增技能

1. 将技能放到 `skills/<skill-name>/`。
2. 确保 `skills/<skill-name>/SKILL.md` 有包含 `name` 和 `description` 的 YAML frontmatter。
3. 如果它属于某个安装组合，把它加入 `scripts/install.sh`。
4. 在 `docs/modules.md` 和 `docs/zh-CN/modules.md` 中记录。
5. 如果来自其他项目，在 `NOTICE.md` 里说明来源。

## 移除技能

1. 删除技能目录。
2. 从安装组合中移除。
3. 删除文档引用。
4. 在 `CHANGELOG.md` 增加迁移说明。

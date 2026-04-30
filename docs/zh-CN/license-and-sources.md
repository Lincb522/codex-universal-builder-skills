# 协议与来源

[English](../license-and-sources.md) | 简体中文

## 仓库协议

本仓库原创的胶水代码、文档、脚本、网站和项目图标使用 MIT License。

见 [LICENSE](../../LICENSE)。

## 打包技能协议

许多打包进来的技能包含上游 license 文件。复制或再分发某个技能时，请保留这些文件。

常见位置：

```text
skills/<skill-name>/LICENSE.txt
skills/<skill-name>/LICENSE.TXT
skills/<skill-name>/NOTICE.txt
skills/<skill-name>/SKILL.md
```

## 主要来源

- OpenAI skills repository：官方 Codex 技能，例如 Playwright、Figma、安全、部署、ChatGPT Apps、OpenAI Docs、Sentry 和 ASP.NET Core。
- Anthropic Claude Code repository：frontend-design 指南，本仓库中安装为 `anthropic-frontend-design`，以避免名称冲突。
- wshobson/agents：实用的前端、后端、API、数据库和设计系统技能模块。
- 本地原创编排技能：`web-fullstack-app`、`swift-apple-app` 以及配套工作流指南。

## 再分发规则

如果你只再分发其中一部分，请包含：

1. 被选中的技能目录。
2. 该技能自己的 license 和 notice 文件。
3. 如果包含本仓库原创文档、脚本、网站或编排材料，也要包含本仓库 MIT license。

# 入门指南

[English](../getting-started.md) | 简体中文

Codex Universal Builder Skills 是一个本地技能包。你可以一次安装完整套件，也可以按工作场景安装更轻的组合。

## 环境要求

- 支持本地 skills 的 Codex。
- Git。
- Bash 兼容 shell。
- Deno，用于项目网站和验证快捷命令。
- Python 3，用于验证脚本。

## 安装完整套件

```bash
git clone https://github.com/Lincb522/codex-universal-builder-skills.git
cd codex-universal-builder-skills
./scripts/install.sh all
```

安装后请重启 Codex。

## 只安装一个组合

```bash
./scripts/install.sh web
./scripts/install.sh apple
./scripts/install.sh creative
./scripts/install.sh qa
./scripts/install.sh deploy
```

## 安装位置

安装脚本默认写入：

```bash
${CODEX_HOME:-$HOME/.codex}/skills
```

需要安装到其他地方时：

```bash
CODEX_HOME=/tmp/codex-home ./scripts/install.sh web
```

## 第一次调用

```text
使用 $web-fullstack-app 创建一个生产可用的营销网站，包含动效和 Playwright 验证。
```

```text
使用 $swift-apple-app 搭建一个 iOS/macOS 通用 SwiftUI 应用。
```

```text
使用 $anthropic-frontend-design + $tailwind-design-system 重新设计这个仪表盘。
```

## 检查安装

重启 Codex 后可以询问：

```text
现在有哪些 web 和 Apple app 技能可以用？
```

你应该能看到主编排技能和独立模块。

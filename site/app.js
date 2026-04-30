const translations = {
  en: {
    "nav.modules": "Modules",
    "nav.install": "Install",
    "nav.recipes": "Recipes",
    "hero.eyebrow": "Codex skill orchestration pack",
    "hero.title": "One universal builder for web apps, Apple apps, and product-grade UI.",
    "hero.lede":
      "Install a complete skill system for fullstack web work, SwiftUI apps, motion, image assets, browser QA, security, Figma, observability, and deployment.",
    "hero.copy": "Copy install",
    "hero.repo": "View repository",
    "metrics.skills": "installable skills",
    "metrics.profiles": "install profiles",
    "metrics.orchestrators": "main orchestrators",
    "metrics.license": "repo license",
    "modules.eyebrow": "Composable by design",
    "modules.title": "Use the whole system or only the exact module you need.",
    "modules.web.title": "Web Fullstack",
    "modules.web.body":
      "Next.js, Tailwind, React state, Node.js, FastAPI, ASP.NET, API contracts, auth, PostgreSQL, SQL tuning, and deploy.",
    "modules.apple.title": "Apple Apps",
    "modules.apple.body":
      "Universal SwiftUI app creation, iOS/macOS patterns, Swift style, animation, performance audits, and verification.",
    "modules.design.title": "Design And Motion",
    "modules.design.body":
      "UIProMax, Anthropic frontend design, Deno design tooling, interaction design, animation, and image assets.",
    "modules.qa.title": "QA And Launch",
    "modules.qa.body":
      "Playwright, screenshot capture, security best practices, Sentry, Vercel, Netlify, Cloudflare, and Render.",
    "profiles.eyebrow": "Install profiles",
    "profiles.title": "Install only the surface area you want.",
    "profiles.body":
      "Profiles keep the setup lean for narrow workflows, while `all` gives Codex the complete cross-platform builder pack.",
    "copy.short": "Copy",
    "docs.eyebrow": "Bilingual documentation",
    "docs.title": "Read the same guide in English or Chinese.",
    "docs.en.title": "English docs",
    "docs.en.body": "README, usage guide, module catalog, update guide, and license notes.",
    "docs.zh.title": "Chinese docs",
    "docs.zh.body": "Chinese README, usage guide, module catalog, update guide, and open source notes.",
    "recipes.eyebrow": "Prompt recipes",
    "recipes.title": "Call skills directly from your Codex prompt.",
    "recipes.web": "Web product",
    "recipes.apple": "Apple app",
    "recipes.landing": "Landing page",
    "recipes.chatgpt": "ChatGPT app",
    "footer.usage": "Usage guide",
    "state.copied": "Copied",
  },
  zh: {
    "nav.modules": "模块",
    "nav.install": "安装",
    "nav.recipes": "调用模板",
    "hero.eyebrow": "Codex 技能编排包",
    "hero.title": "通用构建器：网页、Apple 应用与产品级 UI。",
    "hero.lede":
      "一次安装完整技能系统：全栈 Web、SwiftUI、动效、图片资产、浏览器 QA、安全、Figma、监控和部署都可以组合调用。",
    "hero.copy": "复制安装命令",
    "hero.repo": "查看仓库",
    "metrics.skills": "可安装技能",
    "metrics.profiles": "安装组合",
    "metrics.orchestrators": "主编排技能",
    "metrics.license": "仓库协议",
    "modules.eyebrow": "为组合而生",
    "modules.title": "可以一键调用全套，也可以只调用你需要的模块。",
    "modules.web.title": "网页全栈",
    "modules.web.body":
      "覆盖 Next.js、Tailwind、React 状态、Node.js、FastAPI、ASP.NET、API 契约、认证、PostgreSQL、SQL 优化和部署。",
    "modules.apple.title": "Apple 应用",
    "modules.apple.body":
      "支持通用 SwiftUI 应用创建、iOS/macOS 模式、Swift 风格、动画、性能审计和验证流程。",
    "modules.design.title": "设计与动效",
    "modules.design.body":
      "整合 UIProMax、Anthropic frontend-design、Deno 设计工具、交互设计、动画和 Image Gen 图片资产能力。",
    "modules.qa.title": "验证与发布",
    "modules.qa.body":
      "覆盖 Playwright、截图、安全最佳实践、Sentry、Vercel、Netlify、Cloudflare 和 Render。",
    "profiles.eyebrow": "安装组合",
    "profiles.title": "只安装当前工作真正需要的能力。",
    "profiles.body":
      "`all` 会安装完整跨平台技能包；也可以按 web、apple、creative、qa、deploy 等组合精简安装。",
    "copy.short": "复制",
    "docs.eyebrow": "中英文文档",
    "docs.title": "同一套使用说明，英文和中文都能直接阅读。",
    "docs.en.title": "English docs",
    "docs.en.body": "英文 README、完整使用方法、模块目录、更新指南和开源协议说明。",
    "docs.zh.title": "中文文档",
    "docs.zh.body": "中文 README、完整使用方法、模块目录、更新说明和开源协议说明。",
    "recipes.eyebrow": "提示词模板",
    "recipes.title": "直接在 Codex 提示词里调用技能。",
    "recipes.web": "网页产品",
    "recipes.apple": "Apple 应用",
    "recipes.landing": "落地页",
    "recipes.chatgpt": "ChatGPT 应用",
    "footer.usage": "使用指南",
    "state.copied": "已复制",
  },
};

const languageToggle = document.querySelector("[data-language-toggle]");
const copyButtons = document.querySelectorAll("[data-copy]");
const usageLink = document.querySelector("[data-doc-link='usage']");
const savedLanguage = window.localStorage.getItem("preferred-language");
let currentLanguage = savedLanguage === "zh" ? "zh" : "en";

function applyLanguage(language) {
  currentLanguage = language;
  const dictionary = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  for (const element of document.querySelectorAll("[data-i18n]")) {
    const key = element.getAttribute("data-i18n");
    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  }

  for (const button of copyButtons) {
    const localizedCopy = button.getAttribute(`data-copy-${language}`);
    if (localizedCopy) {
      button.setAttribute("data-copy", localizedCopy);
    }
  }

  if (usageLink) {
    usageLink.href =
      language === "zh"
        ? "https://github.com/Lincb522/codex-universal-builder-skills/blob/main/docs/zh-CN/usage.md"
        : "https://github.com/Lincb522/codex-universal-builder-skills/blob/main/docs/usage.md";
  }

  if (languageToggle) {
    languageToggle.textContent = language === "zh" ? "EN" : "中文";
    languageToggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  }

  window.localStorage.setItem("preferred-language", language);
}

languageToggle?.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
});

for (const button of copyButtons) {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy") ?? "";
    await navigator.clipboard.writeText(value);
    const key = button.getAttribute("data-i18n");
    const original = key ? translations[currentLanguage][key] : button.textContent;
    button.textContent = translations[currentLanguage]["state.copied"];
    window.setTimeout(() => {
      button.textContent = original;
    }, 1200);
  });
}

applyLanguage(currentLanguage);

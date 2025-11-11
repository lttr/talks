---
theme: default
title: Context Engineering and Claude Code
author: Lukáš Trumm
keywords: web,css,tailwind
colorSchema: light
themeConfig:
  primary: "var(--vhs-text)"
favicon: https://lukastrumm.com/favicon.ico
highlighter: shiki
fonts:
  sans: "Exo"
  mono: "JetBrains Mono"
htmlAttrs:
  lang: cs
---

<div class="text-center relative h-full flex flex-col justify-center items-center px-12 pt-8 pb-16">

<div class="mb-20">
  <h1 class="text-7xl font-bold mb-6 leading-none">
    <div class="text-gray-800 mb-2 flex items-center justify-center gap-5">
        Ovládání kontextu<br>a Claude Code
      </div>
  </h1>
</div>

<div class="absolute bottom-6 text-center">
  <div class="text-3xl font-semibold text-gray-700">Lukáš Trumm</div>
  <div class="text-xl font-semibold text-gray-600"><span class="line-through">Software</span> Context engineer</div>
</div>

</div>

---

# Vývoj modelů 2025

<v-clicks>

- chytřejší model
  - méně záleží na promptu
  - více na kontextu
- více nástrojů
  - více dat
  - více šumu

</v-clicks>

---

<FullHeightImage>
  <img src="/anthropic-context-vs-prompt.png" alt="Context vs Prompt" />
</FullHeightImage>

<div class="text-center">
<Source text="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" />
</div>

---
layout: quote
---

# DEMO: Claude.ai Chat

---
layout: two-cols-header
---

# Agenti

::left::

**AGENTS.md for Codex**

```text
# Vue Component Conventions

- Use <script setup lang="ts"> so
  setup context stays type-safe.

- Reach for ref() before reactive()
  for simpler reactivity.
```

více odvozuje

::right::

**CLAUDE.md for Claude**

```text
# Vue Components

- ALWAYS use `<script setup lang="ts">`

- PREFER ref() over reactive()
```

více následuje vzory

---
# layout: quote
---

<h1 class="text-center mt-10">
  <span
    class="text-5xl">Díky!</span>
</h1>

<div class="mb-10 mt-16">
  <div class="text-3xl font-semibold text-gray-700">Lukáš Trumm</div>
</div>

&#8594; https://bsky.app/profile/lukastrumm.com

&#8594; https://lukastrumm.com/talks

<div class="absolute right-16 bottom-16 text-right">

  <PoweredBySlidev />

</div>

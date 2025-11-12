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

<div v-click="1">

- chytřejší modely
  - méně záleží na promptu
  - více na kontextu

</div>

<div v-click="3" class="mt-37">

- více nástrojů
  - více dat
  - více šumu

</div>

<div v-click="2" class="absolute left-20 top-55">
  <img src="/commit-command.png" alt="Commit command" class="h-22" />
</div>

<div v-click="4" class="absolute right-110 top-30">
  <img src="/tools-1.png" alt="Tools 1" />
</div>

<div v-click="4" class="absolute right-40 top-35">
  <img src="/tools-2.png" alt="Tools 2" />
</div>

<div v-click="4" class="absolute right-30 top-90">
  <img src="/tools-3.png" alt="Tools 3" />
</div>

---

<FullHeightImage>
  <img src="/anthropic-context-vs-prompt.png" alt="Context vs Prompt" />
</FullHeightImage>

<div class="text-center">
<Source text="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" />
</div>

---
layout: center
---

# DEMO - Claude Desktop Chat

## Task: Personalised YouTube Summary

---

<img src="/claude-project.png" alt="Claude Project" class="max-h-full max-w-full object-contain mx-auto" />

---

<img src="/claude-youtube-summary.png" alt="Claude YouTube Summary" class="max-h-full max-w-full object-contain mx-auto" />

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
layout: center
---

# DEMO - Claude Code

## Task: Vytvoření nové funkce ve webové aplikaci

---
layout: two-cols-header
---

::left::

**Claude Chat - Project**

- Claude's system prompt
- System tools
- User's prompt

<hr class="m-5! max-w-50">

- User's instructions
- User's memory
- Project's memory
- MCP tools
- Project instructions
- Project files
- Message history

::right::

**Claude Code's context**

- Claude Code's system prompt
- System tools
- Memory files (user, project, folder specific)
- MCP tools definitions
- Custom commands
- Skills descriptions
- Agents descriptions
- File references
- Message history
- User's prompt

---
layout: quote
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

---
theme: default
title: Tailwind 4 vs CSS 6
author: Lukáš Trumm
keywords: web,css,tailwind
colorSchema: light
themeConfig:
  primary: "var(--vhs-magenta)"
favicon: https://lukastrumm.com/favicon.ico
highlighter: shiki
fonts:
  sans: "Inter, system-ui, sans-serif"
  mono: "JetBrains Mono, Fira Code, monospace"
htmlAttrs:
  lang: cs
---

<div class="text-center relative h-full flex flex-col justify-center items-center px-12 py-16">

<div class="mb-12">
  <h1 class="text-7xl font-bold mb-6 leading-none">
    <div class="text-gray-800 mb-2 flex items-center justify-center gap-4">Tailwind <span class="text-8xl font-black" style="background: linear-gradient(45deg, oklch(74.6% .16 232.661), #38bdf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 2px 4px rgba(56, 189, 248, 0.2); filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.3));">4</span></div>
    <div class="text-4xl text-gray-500 font-normal mb-2">vs</div>
    <div class="text-gray-800 flex items-center justify-center gap-4">CSS <span class="text-8xl font-black" style="background: linear-gradient(45deg, rebeccapurple, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 2px 4px rgba(102, 51, 153, 0.2); filter: drop-shadow(0 0 6px rgba(102, 51, 153, 0.3));">6</span></div>
  </h1>
</div>

<div class="absolute bottom-12 left-12 text-left">
  <div class="text-3xl font-semibold text-gray-700">Lukáš Trumm</div>
  <div class="text-xl text-gray-500">Software Engineer</div>
</div>

<div class="absolute bottom-12 right-12">
  <img src="/frontkon-logo.svg" alt="FrontCon 25" class="w-32 h-auto opacity-80" />
</div>

</div>

---

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
:root {
  --vhs-pink: #e056fd;
}
```

---

# Knihovna Puleo CSS

<hr>

<div>

&#8594; https://github.com/lttr/puleo

</div>

<div class="flex w-[50ch] mx-auto">

![](/puleo.png)

</div>

---

# Shrnutí

<hr>

- nativní podpora v prohlížečích se dost posunula
- techniky a nástroje nejsou přímočaré nebo standardizované<br>
  (narozdíl třeba od <span class="vhs-badge">Tailwind</span>)
- CSS je mocné a vlastní design je možné tvořit rychle<br>
  (možné zatím neznamená jednoduché)

---
layout: quote
---

<h1 class="text-center">
Otázky?
</h1>

<br>

![](/lt-talks.gif)

&#8594; https://lukastrumm.com/talks/

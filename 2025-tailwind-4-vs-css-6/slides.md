---
theme: default
title: Tailwind 4 vs CSS 6
author: Lukáš Trumm
keywords: web,css,tailwind
colorSchema: light
themeConfig:
  primary: "var(--vhs-pink)"
favicon: https://lukastrumm.com/favicon.ico
highlighter: shiki
fonts:
  sans: "Inter, system-ui, sans-serif"
  mono: "JetBrains Mono, Fira Code, monospace"
htmlAttrs:
  lang: cs
---

<div class="text-center title-slide">
<div class="corner-shapes"></div>

# Tailwind 4 vs CSS 6

<b>Lukáš Trumm</b>

Software engineer

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

---
theme: default
title: CSS se stále zlepšuje - využijme toho!
author: Lukáš Trumm
keywords: web,css
colorSchema: light
themeConfig:
  primary: "var(--pink-9)"
favicon: https://lukastrumm.com/favicon.ico
highlighter: shiki
fonts:
  sans: Roboto Slab
  mono: Fira Mono
htmlAttrs:
  lang: cs
---

<div class="text-center">

# CSS se stále zlepšuje<br>&ndash; využijme toho!

<br>
<b>Lukáš Trumm</b>

Frontend vývojář v Quanti

</div>

---
layout: quote
---

<div class="text-center">

## ...využil jsem toho pro vývoj nového design systému<br>bez preprocesorů a externích knihoven

</div>

---

# Mám rád nové technologie, ale je tohle nutné?

- za 2 roky přepsat <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- použít novou, "daleko lepší" knihovnu <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- jít all-in přístupem (Tailwind) <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- použít alespoň 1x za hodinu `!important` <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- používat syntaktické workaroundy (BEM) <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- podporovat pouze 2 poslední verze prohlížečů <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- bojovat proti kaskádě a specificitě <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" /><fe-close class="w-8 h-8 relative -bottom-1 text-red-700" /><fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />

---

# Požadavky

- jednodušší předání od designéra
- konzistentnost
- responzivita od hodinek po ultra-wide
- ze základu umožnit poskládat různé projekty (jako lego)
- funkční i když minimální v základu, možnost později cokoliv změnit
- připravenost na RTL, dark mode a další

---
layout: center
---

# Řešení: omezit možnosti

---

# Omezit možnosti

<Arrow x1="155" y1="300" x2="260" y2="300" width="3" color="var(--pink-9)" />
<Arrow x1="480" y1="300" x2="540" y2="300" width="3" color="var(--pink-9)" />

<div class="flex gap-20 mt-4">
  <div>
    <p>libovolné hodnoty</p>
    <code>#f9fbe7</code><br>
    <code>#e8ed9c</code><br>
    <code>#d2df4e</code><br>
    <code>#c2ce34</code><br>
    <code>#b5bb2e</code><br>
    <code>#a7a827</code><br>
    <code>#999621</code><br>
    <code>#8c851c</code><br>
    <code>#7e7416</code><br>
    <code>#6d6414</code><br>
    <code>#5d5411</code><br>
    <code>#4d460e</code><br>
    <code>#36300a</code><br>
  </div>
  <div>
    <p>fyzické hodnoty</p>
    <code>--gray-0: #f8f9fa;</code><br>
    <code>--gray-1: #f1f3f5;</code><br>
    <code>--gray-2: #e9ecef;</code><br>
    <code>--gray-3: #dee2e6;</code><br>
    <code>--gray-4: #ced4da;</code><br>
    <code>--gray-5: #adb5bd;</code><br>
    <code>--gray-6: #868e96;</code><br>
    <code>--gray-7: #495057;</code><br>
    <code>--gray-8: #343a40;</code><br>
    <code>--gray-9: #212529;</code><br>
    <code>--gray-10: #16191d;</code><br>
  </div>
  <div>
    <p>sémantické hodnoty</p>
    <code>--text-color-1: var(--gray-12);</code><br>
    <code>--surface-1: var(--gray-1);</code><br>
    <code>--surface-2: var(--gray-2);</code><br>
    <code>--surface-3: var(--gray-3);</code><br>
    <code>--accent-color: var(--brand-color);</code><br>
    <code>--focus-color: var(--brand-color);</code><br>
    <code>--link-color: var(--blue-8);</code><br>
    <code>--error-alert-color: var(--red-11);</code><br>
  </div>
</div>

---
layout: two-cols-header
---

# Nástroje - PostCSS

::left::

- import
- nesting
- custom media queries <br>
  `@media (--tablet)`
- new colors
- dark-theme-class

::right::

```js
//...
{
  stage: false,
  autoprefixer: true,
  features: {
    "color-function": true, // Baseline: Newly available since 5/2023
    "color-mix": true, // Baseline: Newly available since 5/2023
    "custom-media-queries": true, // Draft standard: Media queries level 5
    "media-query-ranges": true, // Baseline: Newly available since 3/2023
    "nesting-rules": true, // Baseline: Newly available since 12/2023
    "oklab-function": true, // Baseline: Newly available since 5/2023
    "relative-color-syntax": true, // Baseline: Limited availability
  }
}
```

---
layout: two-cols-header
---

# Nástroje - scoped CSS

::left::

Single File Component (SFC)

```vue
<template>
  <div class="list">
    <div class="item">
      <slot class="slot"></slot>
    </div>
  </div>
</template>

<style scoped>
.list {
}
.item {
}
</style>
```

::right::

Zkompilovaný výstup

```css
/* ... */

.list[data-v-7ba5bd90] {
}
.item[data-v-7ba5bd90] {
}
```

---

# Nástroje - native scoped CSS

<div class="max-w-xl mx-auto mt-[3rem]">

```html
<div class="list">
  <div class="item">
    <slot class="slot"></slot>
  </div>
</div>
```

```css
@scope (.list) to (.slot) {
  /* Scoped styles target only inside `.card` but not inside `.slot` */
  :scope {
  }

  .item {
  }
}
```

</div>

---

# Techniky

- Open Props
- Utopia
- Every Layout
- ITCSS

---

# Open Props

<div>

![](/open-props.png)

</div>

---

# Modulární škály

<br>

<div class="absolute right-20 top-10">

![](/utopia.svg)

</div>

<div class="flex gap-8">

  <div class="max-[20ch]">

![](/desktop-scale.png)

  </div>

![](/utopia-tool.png)

</div>

```css
:root {
  /* 18.0px => 20.0px */
  --space-4: clamp(1.125rem, 1.08rem + 0.22vw, 1.25rem);
  /* 27.0px => 30.0px */
  --space-5: clamp(1.688rem, 1.62rem + 0.33vw, 1.875rem);
}
```

---

# Every Layout

<div class="absolute right-25 top-10">

![](/every-layout-logo.png)

</div>

<div class="ms-10 max-w-[60%]">

![](/every-layouts.png)

</div>

---

# ITCSS

<div class="h-100 grid place-items-center text-black">

![ITCSS](/inverted-triangle.svg)

</div>

---

# CSS vlastnosti

- style scoped
- layers `@import url('knihovna.css') layer(base)`
- custom properties
- funkce `clamp()`
- `:where()`
- logické vlastnosti (`padding-inline`)
- nesting

---

# Ukázka

<div class="grid grid-cols-2 h-full">

```html
<div class="card p-flow">
  <h2 class="heading">Project</h2>
  <p class="description">Enter new project name</p>
  <div class="form-field">
    <label class="p-secondary-text-bold">Name</label>
    <input type="text" />
  </div>
  <div class="p-cluster">
    <button>Cancel</button>
    <button>Submit</button>
  </div>
</div>

<style scoped>
  .card {
    border-radius: var(--radius-default);
    padding: var(--space-4);
  }

  .heading {
    font-size: var(--font-size-body);
  }
  /* ... */
</style>
```

<Iframe html-file="card-normal" />

</div>

---

# Ukázka přizpůsobení - CondensedCard

<div class="grid grid-cols-2 h-full">

```html
<style>
  :root {
    --space-1: 2px;
    --space-2: 0.3rem;
    --space-3: 0.5rem;
    --space-4: 0.7rem;
  }
</style>
```

<Iframe html-file="card-condensed" />

</div>

---

# Ukázka přizpůsobení - TinyCard

<div class="grid grid-cols-2">

```html
<style>
  :root {
    --font-size--1: 0.8rem;
    --font-size-0: 0.9rem;
  }
</style>
```

<Iframe html-file="card-tiny" />

</div>

---

# Knihovna Puleo CSS

<div>

&#8594; https://github.com/lttr/puleo

</div>

<div class="flex w-[50ch] mx-auto">

![](/puleo.png)

</div>

---

# Shrnutí

- nativní podpora v prohlížečích se dost posunula
- techniky a nástroje nejsou přímočaré nebo standardizované<br>
  (narozdíl třeba od Tailwindu)
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

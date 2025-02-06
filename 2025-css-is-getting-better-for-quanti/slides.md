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
  sans: Montserrat
  mono: Fira Mono
htmlAttrs:
  lang: cs
---

<div class="text-center">

# CSS se stále zlepšuje<br>&ndash; využijme toho!

<br>
<b>Lukáš Trumm</b>

pro Quanti

</div>

---
layout: cover
---

# tldr;

<br>

- ### CSS jde použít a je to skvělý jazyk

<br>

- ### Mnoho lidí mu nerozumí a/nebo ho nechce používat

---

# O čem to bude

- Architektura stylování bez preprocesorů nebo frameworků
- Techniky, které takový styl umožňují
- Mylné představy a špatná srovnávání

## A o čem moc ne

- Detaily nových vlastností v CSS

---

# Mám rád nové technologie, ale je tohle nutné?

- za 2 roky přepsat <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- použít novou, "daleko lepší" knihovnu <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- jít all-in přístupem (Tailwind; některé knihovny komponent) <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- použít alespoň 1x za hodinu `!important` <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- používat syntaktické workaroundy (BEM) <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- podporovat pouze 2 poslední verze prohlížečů <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />
- bojovat proti kaskádě a specificitě <fe-close class="w-8 h-8 relative -bottom-1 text-red-700" />

---

# Požadavky na stylovací systém

- trvanlivost
- jednodušší předání od designéra
- konzistentnost
- responzivita od hodinek po ultra-wide
- ze základu umožnit poskládat různé projekty (jako lego)
- funkční i když minimální v základu, možnost později cokoliv změnit
- adaptivnost - připravenost na RTL, dark mode a další

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
    <p>(design tokens)</p>
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

# Nedostatky CSS

<br>

### Zanořování pravidel a media queries &rarr; <strong>nesting</strong>

```css
.parent {
  /* parent rules */
  .child {
    /* child of parent rules */
  }
}

@media (min-width: 768px) {
  .parent {
    /* some rules */
  }
}

.parent {
  @media (min-width: 768px) {
    /* some rules */
  }
}
```

---

# Nedostatky CSS

<br>

### Omezení CSS pravidel na komponentu &rarr; <strong>scoping</strong>

```html
<div class="list">
  <div class="item">
    <slot class="slot"></slot>
  </div>
</div>

<style>
  @scope (.list) to (.slot) {
    /* Scoped styles target only inside `.card` but not inside `.slot` */
    :scope {
    }

    .item {
    }
  }
</style>
```

---

# Nedostatky CSS

<br>

### Proměnné &rarr; <strong>custom properties</strong>

```css
:root {
  --brand-color: var(--blue-7);
}

.stack {
  --stack-space: var(--space-5);
}

@container style(--theme-x) {
}

@media (--mobile) {
}

@property --accent-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rebeccapurple;
}
```

---

# Nedostatky CSS

<br>

### Nedosažitelné a špatně se chovající barvy &rarr; <strong>color spaces, oklab()</strong>

```css
.my-gradient {
  --hdr-gradient: linear-gradient(
    to right in oklab,
    oklch(70% 0.5 340) 0%,
    oklch(90% 0.5 200) 100%
  );
  --sdr-gradient: linear-gradient(to right, #ff00fa 0%, #0ff 100%);

  background: var(--hdr-gradient);
}
```

<style>
.my-gradient {
  --hdr-gradient: linear-gradient(
    to right in oklab,
    oklch(70% 0.5 340) 0%,
    oklch(90% 0.5 200) 100%
  );
  --sdr-gradient: linear-gradient(to right, #ff00fa 0%, #0ff 100%);
  --my-gradient: var(--hdr-gradient);

  background: var(--my-gradient);
}
</style>

<div class="flex mt-3 gap-3 justify-center">
  <div class="my-gradient w-100 h-20 grid items-center p-5" style="--my-gradient: var(--sdr-gradient)">sdr</div>
  <div class="my-gradient w-100 h-20 grid items-center p-5">hdr</div>
</div>

---

# Nedostatky CSS

<br>

### Priorita pravidel je moc složitá &rarr; <strong>cascading layers, :where()</strong>

```css
:where(body) {
  background: var(--bg-color-body);
}

@import "./base.css" layer(base);
@import "./theme.css" layer(theme);
```

---

# Nedostatky CSS

<br>

### Lokální responzivita &rarr; <strong>container queries, clamp()</strong>

```css
form {
  container-type: inline-size;
}

@container (10em <= width <= 20em) {
  /* styles */
}
```

---

# Nedostatky CSS

<br>

### Preference uživatelů &rarr; <strong>prefers-color-scheme, prefers...</strong>

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-color-1: var(--gray-1);
  }
}

@media (prefers-reduced-motion: no-preference) {
  ...
    transition: outline-offset 145ms var(--ease-2);
  ...
}
```

---

# Nedostatky CSS

<br>

### Různorodé jazyky &rarr; <strong>logical properties</strong>

```css
.card {
  margin-inline: var(--space-4);
  margin-block: var(--space-6);
  max-inline-size: var(--size-content-2);
}
```

---
layout: two-cols-header
---

# Nástroje - PostCSS

::left::

- @import závislostí
- de-nesting
- custom media queries <br>
  `@media (--tablet)`
- dark-theme-class
- ...

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
    "relative-color-syntax": true, // Baseline: Newly available since 9/2024
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

# Ukázka přizpůsobení - TinyCard

<div class="grid grid-cols-2">

```html
<style>
  :root {
    --space-1: 2px;
    --space-2: 0.3rem;
    --space-3: 0.5rem;
    --space-4: 0.7rem;
    --radius-default: 2rem;
    --button-height-default: 1.8rem;
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

- Nativní podpora v prohlížečích se dost posunula
- Techniky a nástroje nejsou přímočaré nebo standardizované<br>
  (narozdíl třeba od Tailwindu)
- CSS je mocné a vlastní design je možné tvořit rychle<br>
  (možné nemusí znamenat jednoduché)

---
layout: quote
---

<h1 class="text-center">
Otázky?
</h1>

<br>

![](/lt-talks.gif)

&#8594; https://lukastrumm.com/talks/

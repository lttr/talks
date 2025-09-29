---
theme: default
title: Tailwind 4 vs CSS 6
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

<div class="mb-12">
  <h1 class="text-7xl font-bold mb-6 leading-none">
    <div class="text-gray-800 mb-2 flex items-center justify-center gap-5">
        <span>Tailwind</span> <TailwindFour class="text-8xl" />
      </div>
    <div class="text-4xl text-gray-500 font-normal mb-2">vs</div>
    <div class="text-gray-800 flex items-center justify-center gap-5">
      <span>CSS</span> <CssSix class="text-8xl" />
      </div>
  </h1>
</div>

<div class="absolute bottom-6 left-12 text-left">
  <div class="text-3xl font-semibold text-gray-700">Lukáš Trumm</div>
  <div class="text-xl font-semibold text-gray-600"><span class="line-through">Software</span> Context engineer</div>
</div>

<div class="absolute bottom-6 right-12">
  <img src="/frontkon-logo.svg" alt="FrontCon 25" class="w-32 h-auto opacity-80" />
</div>

</div>

---
layout: quote
---

<h2 class="text-center" style="text-wrap: balance; line-height: 1.5;">
Myslím, že jsem nenapsal ani jednu řádku frontendového kódu v posledních 3 měsících.
</h2>

<div class="mt-8 text-lg text-gray-600 text-right">
Autor Base44 - platformy prodané za 80 mil. dolarů
</div>

<!--
Pokud je vaším cílem zaujmout investory do AI technologií, můžete jít klidně domů... ale možná jste tu proto, že vás frontend technologie baví, tak pojďme na to!
-->

---
layout: quote
---

<div class="text-center text-[7rem]">
🙋🏻
</div>

<!--
Zvedněte prosím ruku, kdo má radši práci na projektu, kde se používá Tailwind, než čisté CSS nebo vlasntí CSS framework. Kdo má naopak radši projekty, kde je CSS.

Fajn a teď ruce dolů, kdo většinu svého času, pracuje na projektu, kde je Tailwind.
Kdo většinu svého času, pracuje na projektu, kde není Tailwind.
-->

---
layout: quote
---

# CSS se stále zlepšuje<br>&ndash; využijme toho!

<!--
- Minulý jsem mluvil na meetupu frontendistů o tom, že CSS se stále zlepšuje.
- Zkoumal jsem, zda jde postavit design systém jen pomocí čistého, moderního CSS.
- A ano jde to!
-->

---
layout: center
---

<h1 class="flex justify-center items-center">
  <span class="text-7xl">Moderní CSS <CssSix class="text-7xl" /></span>
</h1>

<div class="flex justify-center mt-25">
  <img class="max-w-[18rem]" src="/baseline-wordmark.svg" />
</div>

---

# CSS <CssSix />

<div class="absolute right-20 text-right text-md font-semibold">
    Kaskáda a specificita
</div>

<div class="max-w-xl">

````md magic-move
```css
@media (prefers-color-scheme: dark) {
  html:not(.is-light) {
    --text-color: var(--gray-light);
  }
}
```

```css
@layer theme {
  @media (prefers-color-scheme: dark) {
    html:not(.is-light) {
      --text-color: var(--gray-light);
    }
  }
}
```

```css
@layer theme {
  @media (prefers-color-scheme: dark) {
    html:not(.is-light) {
      --text-color: var(--gray-light);
    }
  }
}
/* custom text color */
@layer theme {
  @media (prefers-color-scheme: dark) {
    html {
      --text-color: white;
    }
  }
}
```

```css
@layer theme {
  @media (prefers-color-scheme: dark) {
    html:where(not(.is-light)) {
      --text-color: var(--gray-light);
    }
  }
}
/* custom text color */
@layer theme {
  @media (prefers-color-scheme: dark) {
    html {
      --text-color: white;
    }
  }
}
```
````

</div>

<BaselineCard feature="Cascade layers" available="widely" />

<!--
Co je to teda CSS 6: CSS má fůru nových vlastností. Rozhodně víc, než kolik
se vejde do jedné přednášky, nicméně vypíchnu tady pár, které mají nějaký
specifický vliv na naše srovnání, v dalších přednáškách se můžete těšit na
další.
-->

---
layout: two-cols-header
---

# CSS <CssSix />

::left::

Scoping

```css
@scope (.card) {
  :scope {
    background-color: plum;
  }

  a {
    text-decoration: none;
  }
}
```

::right::

<p>&nbsp;</p>

<div class="flex flex-col gap-6">
  <div class="bg-[plum] p-4 max-w-[22ch] rounded-lg shadow-md">
    <div class="text-lg font-semibold">Nadpis karty</div>
    <p class="text-xs leading-4! font-normal!">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" class="border-0! text-gray-800 text-md leading-6! w-full block text-right mt-8">Link &rarr;</a>
  </div>
  <div class="bg-gray-200 p-4 text-md">
    Normální text upozorňující na <a class="underline border-0!" href="#">link</a>.
  </div>
</div>

<BaselineCard feature="@scope" available="limited" />

<!--
Dekorace odkazu je nastylovaná pouze v mé komponentě. Všimněte si, že není nutné
pojmenovávat žádnou CSS třídu, protože styly jsou omezené na mojí komponentu.
-->

---
layout: two-cols-header
---

# CSS <CssSix />

::left::

```html
<nav>
  <ul class="submenu">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    ...
  </ul>
</nav>
```

```css
/* 7+ items */
.submenu:has(li:nth-last-child(n + 7)) {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

::right::

<div class="w-full pr-10">

<v-switch>
  <template #0>

 <ExampleHas :should-break="false" />

  </template>
  <template #1>

 <ExampleHas :should-break="true" />

  </template>
</v-switch>

</div>

<BaselineCard feature="has" available="newly" />

<!--
HAS je takové nenápadné klíčové slovo, je trochu schované támhle v tom
druhém bloku kódu.
HAS: pomůže se vyhnout javascriptu, vyřeší problém elegantně
Co tento kód dělá? Pokud má submenu více než 7 prvků, tak jej zobrazí ve dvou
sloupcích.
-->

---
layout: content-center
---

# Tailwind <TailwindFour />

<table class="text-lg max-w-3xl mt--10">
  <thead>
    <tr>
      <th class="pb-4 pr-8 text-left font-medium"></th>
      <th class="pb-4 pr-6 font-medium">v3.4</th>
      <th class="pb-4 pr-6 font-medium">v4.0</th>
      <th class="pb-4 font-medium">Improvement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="py-4 pr-8 text-gray-700">Full build</td>
      <td class="py-4 pr-6 font-mono">378ms</td>
      <td class="py-4 pr-6 font-mono">100ms</td>
      <td class="py-4 font-semibold">3.78x</td>
    </tr>
    <tr>
      <td class="py-4 pr-8 text-gray-700">Incremental rebuild with new CSS</td>
      <td class="py-4 pr-6 font-mono">44ms</td>
      <td class="py-4 pr-6 font-mono">5ms</td>
      <td class="py-4 font-semibold">8.8x</td>
    </tr>
  </tbody>
</table>

---
layout: two-cols-header
---

# Tailwind <TailwindFour />

::left::

v3

```css
.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}
```

::right::

v4

```css
@layer theme {
  :root {
    --spacing: 0.25rem;
  }
}

@layer utilities {
  .mx-5 {
    margin-inline: calc(var(--spacing) * 5);
  }
}
```

---

<v-switch>
  <template #0>

# Tailwind <TailwindFour />

Tailwind config

  </template>
  <template #1>

# CSS <CssSix />

Custom framework

  </template>
</v-switch>

````md magic-move {at:1}
```css
@theme {
  /* 4.5px => 5.0px */
  --spacing-1: clamp(0.281rem, 0.27rem + 0.05vw, 0.313rem);
  /* 9.0px => 10.0px */
  --spacing-2: clamp(0.563rem, 0.54rem + 0.11vw, 0.625rem);
  /* 13.5px => 15.0px */
  --spacing-3: clamp(0.844rem, 0.81rem + 0.16vw, 0.938rem);
  /* 18.0px => 20.0px */
  --spacing-4: clamp(1.125rem, 1.08rem + 0.22vw, 1.25rem);
  /* 27.0px => 30.0px */
  --spacing-5: clamp(1.688rem, 1.62rem + 0.33vw, 1.875rem);
}
```

```css
:root {
  /* 4.5px => 5.0px */
  --space-1: clamp(0.281rem, 0.27rem + 0.05vw, 0.313rem);
  /* 9.0px => 10.0px */
  --space-2: clamp(0.563rem, 0.54rem + 0.11vw, 0.625rem);
  /* 13.5px => 15.0px */
  --space-3: clamp(0.844rem, 0.81rem + 0.16vw, 0.938rem);
  /* 18.0px => 20.0px */
  --space-4: clamp(1.125rem, 1.08rem + 0.22vw, 1.25rem);
  /* 27.0px => 30.0px */
  --space-5: clamp(1.688rem, 1.62rem + 0.33vw, 1.875rem);
}
```
````

---
layout: content-center
---

# Co má smysl porovnávat?

<FullHeightImage>
  <ObrazekAbstrakce />
</FullHeightImage>

---

# Custom CSS framework

- scoping stylů
- vrstvení stylů
- škály pro typografii, mezery, velikosti, barvy
- sady hodnot pro stíny, okraje, radiusy atp.
- pomocné třídy
- možná grid systém

---
layout: quote
---

# Problémy a řešení

---
layout: two-cols-header
---

# Scoping

::left::

<v-switch>
<template #0>
<div class="max-w-md">
```html
<div class="rounded-3xl bg-white p-10 shadow-2xl ring-1 ring-gray-900/10">
  <h2 class="text-base/7 font-semibold text-indigo-600">Card title</h3>
  ...
</div>
```
</div>
</template>
<template #1>
```html
<div
  class="rounded-3xl bg-white p-10
  shadow-2xl ring-1 ring-gray-900/10"
>
  <h2
    class="text-base/7 font-semibold
    text-indigo-600"
  >
    Card title
  </h3>
  ...
</div>
```

</template>
</v-switch>

::right::

```vue
<template>
  <div class="card">
    <h2 class="title">Card title</h2>
    ...
</template>

<style scoped>
.card {
  ...
}

.title {
  ...
}
</style>
```

---
layout: two-cols-header
---

# Naming is hard

::left::

```html
<div
  class="rounded-3xl bg-white p-10
  shadow-2xl ring-1 ring-gray-900/10"
>
  <h2
    class="text-base/7 font-semibold
    text-indigo-600"
  >
    Card title
  </h3>
  ...
</div>
```

::right::

```vue
<template>
  <div class="card">
    <h2 class="title">Card title</h2>
    ...
</template>

<style scoped>
.card {
  ...
}

.title {
  ...
}
</style>
```

---

<SlidevVideo autoplay>
  <source src="/add-classes.mp4" type="video/mp4" />
</SlidevVideo>

---
layout: two-cols-header
---

# Naming is hard

::left::

```html
<div
  class="rounded-3xl bg-white p-10
  shadow-2xl ring-1 ring-gray-900/10"
>
  <h2
    class="text-base/7 font-semibold
    text-indigo-600"
  >
    Card title
  </h3>
  ...
</div>
```

::right::

```vue
<template>
  <div class="card">
    <h2 class="title">Card title</h2>
    ...
</template>

<style scoped>
.card {
  ...
}

.title {
  ...
}
</style>
```

---
layout: two-cols-header
---

# Konzistence - CSS

::left::

```css
:root {
  --text-color-1: var(--gray-1);
  --text-color-2: var(--gray-4);

  --positive-color: var(--green-6);
  --negative-color: var(--red-6);

  --brand-color: var(--blue-7);
  --link-color: var(--brand-color);

  --font-size-0: 1rem;
  --font-size-1: 1.25rem;
  --font-size-2: 1.5rem;
  ...
}
```

::right::

```css
.heading-1 {
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-headings);
}

.heading-2 {
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-headings);
}
```

---

# Konzistence - Tailwind

<div class="grid grid-cols-2 gap-8">

<!-- prettier-ignore-start -->

```html {all|2|3|4|5}
<div class="
    max-w-[200px]
    rounded-md
    px-4
    bg-gray-200
  "
>
  <h2>My card component</h2>
</div>
```

```css {all|none|2|3|4-5}{at:1}
@theme {
  --radius: var(--radius-md);
  --spacing: 0.4rem;
  --color-surface-1:
      var(--color-slate-200);
}
```

<!-- prettier-ignore-end -->

</div>

---
layout: two-cols-header
---

# Konzistence - Tailwind

::left::

HTML

```html
<div class="p-101">...</div>
```

::right::

Vygenerované CSS

```css
.p-101 {
  padding: calc(var(--spacing) * 101);
}
```

---

# Rychlý vývoj

**Tailwind je rychlý pokud**

- znáte všechny potřebné třídy a syntax

---
layout: quote
---

# Adam Wathan (video)

---

<SlidevVideo autoplay>
  <source src="/remember-the-syntax.mp4" type="video/mp4" />
</SlidevVideo>

---

# Rychlý vývoj

**Tailwind je rychlý pokud**

<v-clicks>

- znáte všechny potřebné třídy a syntax
- design není předem pevně daný
- píšete styly ručně, _nebo používáme AI nástroj bez dalšího kontextu_

</v-clicks>

---

# AI - Prompt

<PromptExample />

---
layout: quote
---

<div class="rounded-xl ring-1 ring-gray-400 p-7 mb-7">

<div class="text-left text-2xl text-gray-600 mr-12 mb-2">
  research.md
</div>

<h1 class="text-left!">
Custom CSS: Rejected due <br>to development time constraints
</h1>

</div>

<div class="text-right text-2xl text-gray-600 mr-12">
&mdash; Claude Code
</div>

---
layout: two-cols-header
---

# Filozofie

::left::

<span class="font-normal">Definujte výchozí hodnoty, které <span class="text-2xl font-semibold text-cyan-800" style="color: light-blue">nejsou</span> užitečné<br>bez dalšího stylování</span>

<v-click at="1">

## Tailwind

</v-click>

::right::

<span class="font-normal">Definujte výchozí hodnoty, které <span class="text-2xl font-semibold text-purple-800" style="color: light-blue">jsou</span> užitečné<br>bez dalšího stylování</span>

<v-click at="1">

## Custom CSS framework

</v-click>

---

<PricingTailwind class="mt-4" />

<!--
Porovnání zdrojáků 1
Pojme na srovnání na jedné vcelku jednoduché komponentě - předplatné SAAS služby
-->

---

<<< @/snippets/pricing-card-tailwind.html

<!--
Porovnání zdrojáků 2
-->

---

<<< @/snippets/pricing-card-puleo.html

<!--
Porovnání zdrojáků 3
-->

---

<<< @/snippets/pricing-card-puleo-styles.vue

<!--
Porovnání zdrojáků 4
-->

---
layout: two-cols-header
---

# Závěry

TODO vennův diagram

::left::

Tailwind

- <v-click at="1">e-shop</v-click>
- <v-click at="2">line of business aplikace</v-click>
- <v-click at="3">website</v-click>

::right::

Custom CSS

- <v-click at="1">e-shop</v-click>
- <v-click at="2">line of businees aplikace</v-click>
- <v-click at="3">website</v-click>

---
layout: two-cols-header
---

# Závěry

::left::

Tailwind

<v-clicks>

- mám knihovnu komponent
- nechci toho moc vymýšlet
- nevadí mi hromada tříd

</v-clicks>

::right::

Custom CSS

<v-clicks>

- poběží i za 10 let
- je výhodné nemít build step
- white label projekty

</v-clicks>

---
layout: quote
---

<div class="text-center">

# TLDR: Oba přístupy fungují!

</div>

<div class="text-center text-xl text-gray-600">
Jen lidé mají často vyhraněné názory
</div>

<!--
Nebudu vás dlouho napínat, Tailwind i CSS jsou dospělé technologie a je možné je pro většinu situací použít úspěšně.
A sice na to mají lidi vyhraněné názory, ale není potřeba se za to na ně zlobit.
-->

---
layout: image
image: /state-of-css.png
backgroundSize: 35rem
---

---
# layout: quote
---

<h1 class="text-center">
  <span
    class="text-5xl"
    style="
      background: linear-gradient(45deg, rebeccapurple, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 2px 4px rgba(102, 51, 153, 0.2);
      filter: drop-shadow(0 0 6px rgba(102, 51, 153, 0.3));
    "
    >Díky!</span
  >
</h1>

<div class="mb-10 mt-16">
  <div class="text-3xl font-semibold text-gray-700">Lukáš Trumm</div>
</div>

&#8594; https://bsky.app/profile/lukastrumm.com

&#8594; https://lukastrumm.com/talks

&#8594; https://github.com/lttr/puleo

<div class="absolute right-16 bottom-16 text-right">

  <PoweredBySlidev />

</div>

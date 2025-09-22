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

<div class="text-center relative h-full flex flex-col justify-center items-center px-12 py-16">

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

<div class="absolute bottom-12 left-12">
  <div class="text-3xl font-semibold text-gray-700">Lukáš Trumm</div>
</div>

<div class="absolute bottom-12 right-12">
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
-->

---
layout: content-center
---

# Co má smysl porovnávat?

<FullHeightImage>
  <ObrazekAbstrakce />
</FullHeightImage>

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

# Tailwind <TailwindFour />

<div class="grid grid-flow-col gap-8">

<div class="max-w-xl">

**v3**

```css
.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}
```

</div>

<div>

**v4**

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

</div>

</div>

---

# Tailwind <TailwindFour />

````md magic-move
```css
/* Custom framework */

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

```css
/* Tailwind config */

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
````

---
layout: quote
---

<h1 class="text-center">
Otázky?
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

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

<div class="text-center">

# CSS se stále zlepšuje<br>&ndash; využijme toho!

</div>

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

<h1 class="text-center">
 Co má smysl porovnávat?
  </h1>

<FullHeightImage>
  <ObrazekAbstrakce />
</FullHeightImage>

---

# Čím jsou nové verze specifické?

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="bg-blue-50 p-6 rounded-lg">
<h3 class="text-2xl font-semibold mb-4 text-gray-800">Tailwind 4</h3>

- ⚡ **Rychlost buildu** - nový engine
- 🎨 **CSS variables** - dynamické vlastnosti
- 📦 **Größer CSS** na výstupu (kvůli variables)
- 🔄 **Lepší dev experience**

</div>

<div class="bg-purple-50 p-6 rounded-lg">
<h3 class="text-2xl font-semibold mb-4 text-gray-800">CSS 6 (moderní CSS)</h3>

- 🎯 **Container queries** - responzivní komponenty
- 🎨 **CSS layers** - kaskáda pod kontrolou
- 🔍 **:has()** - parent selector
- 🏗️ **CSS nesting** - vnořené selektory
- 🎪 **CSS scoping** - izolace stylů

</div>

</div>

---

# Typické mýty

<div class="space-y-6 text-xl">

- 🚀 **"Tailwind je rychlejší na vývoj"**
- 🎨 **"CSS není konzistentní"**
- ⚡ **"Tailwind má lepší výkon"**
- 🤔 **"S CSS musím více rozhodovat"**

</div>

<div class="mt-12 text-center text-2xl">
Pojďme si to ověřit na konkrétních příkladech! 👀
</div>

---
layout: two-cols-header
---

# Řízení scopu

::left::

**Tailwind**

```html
<div class="card">
  <h2 class="card-title">Titulek</h2>
  <p class="card-text text-gray-600">Text karty</p>
</div>
```

```css
.card {
  @apply bg-white p-6 rounded-lg;
}
.card-title {
  @apply text-xl font-bold;
}
.card-text {
  @apply mt-2;
}
```

::right::

**CSS 6**

```html
<div class="card">
  <h2>Titulek</h2>
  <p>Text karty</p>
</div>
```

```css
@scope (.card) {
  :scope {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: bold;
  }
  p {
    margin-top: 0.5rem;
    color: #6b7280;
  }
}
```

---
layout: two-cols-header
---

# Přepisování stylů

::left::

**Tailwind**

```html
<!-- Base button -->
<button class="btn-primary">Základní</button>

<!-- Danger variant -->
<button
  class="btn-primary bg-red-500
               hover:bg-red-600"
>
  Nebezpečné
</button>
```

```css
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600
         px-4 py-2 rounded;
}
```

::right::

**CSS 6**

```html
<!-- Base button -->
<button class="btn primary">Základní</button>

<!-- Danger variant -->
<button class="btn danger">Nebezpečné</button>
```

```css
@layer components {
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
  .primary {
    background: blue;
  }
  .danger {
    background: red;
  }
}
```

---
layout: two-cols-header
---

# Responsivní design

::left::

**Tailwind**

```html
<div
  class="grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-4"
>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

::right::

**CSS 6 - Container Queries**

```html
<div class="card-grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

```css
.card-grid {
  container-type: inline-size;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@container (min-width: 400px) {
  .card-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@container (min-width: 600px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---
layout: two-cols-header
---

# Generování pomocí AI

::left::

**Prompt:** _"Vytvoř modální okno s tlačítkem pro zavření"_

**Tailwind výstup:**

```html
<div
  class="fixed inset-0 bg-black bg-opacity-50
           flex items-center justify-center"
>
  <div
    class="bg-white p-6 rounded-lg
             max-w-md w-full mx-4"
  >
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold">Titulek</h2>
      <button class="text-gray-500 hover:text-gray-700">✕</button>
    </div>
    <p>Obsah modálu</p>
  </div>
</div>
```

::right::

**CSS výstup:**

```html
<dialog class="modal">
  <div class="modal-content">
    <header class="modal-header">
      <h2>Titulek</h2>
      <button class="close-btn">✕</button>
    </header>
    <p>Obsah modálu</p>
  </div>
</dialog>
```

```css
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  max-width: 28rem;
}
/* ... */
```

---

# Čitelnost kódu

<div class="space-y-8 mt-8">

<div class="bg-green-50 p-4 rounded border-l-4 border-green-500">
<strong>Tailwind:</strong> Rychlé psaní, AI-friendly, méně souborů
</div>

<div class="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
<strong>CSS:</strong> Sémantické názvy, oddělené concerns, lepší pro code review
</div>

</div>

<div class="mt-12">

```html
<!-- Tailwind - vše na jednom místě -->
<button
  class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded
               transition-colors duration-200 focus:ring-2 focus:ring-blue-300"
>
  <!-- CSS - sémantické -->
  <button class="btn btn-primary"></button>
</button>
```

</div>

---

# Separation of Concerns

<div class="grid grid-cols-2 gap-8 mt-8">

<div>
<h3 class="text-xl font-semibold mb-4">Tradiční pohled</h3>

```
HTML = struktura
CSS = prezentace
JS = chování
```

<div class="mt-4 text-green-600">✓ Čistě oddělené</div>
</div>

<div>
<h3 class="text-xl font-semibold mb-4">Komponentový pohled</h3>

```
Komponenta = struktura +
             prezentace +
             chování
```

<div class="mt-4 text-blue-600">✓ Co-located</div>
</div>

</div>

<div class="mt-12 p-4 bg-gray-100 rounded-lg">
<strong>Realita:</strong> Záleží na architektuře projektu, ne na technologii!
</div>

---

# Design system & konzistence

<div class="space-y-6 text-lg">

**Tailwind výhody:**

- 🎨 Předpřipravené design tokens
- 📏 Konzistentní spacing/sizing
- 🎯 Utility-first = méně custom CSS

**CSS výhody:**

- 🎨 Custom design tokens (`--color-primary`)
- 📐 CSS custom properties pro konzistenci
- 🎯 CSS layers pro kontrolu kaskády

</div>

<div class="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
<strong>Výsledek:</strong> Oba přístupy umožňují konzistentní design systém
</div>

---

# Různé pohledy na věc

<div class="space-y-8 text-xl">

🚀 **Prototyp, prezentační web**

<div class="text-lg text-gray-600 ml-8">→ Kód mě vůbec nezajímá, rychlost je klíčová</div>

🏗️ **Design systém, dlouhodobý projekt**

<div class="text-lg text-gray-600 ml-8">→ Čitelnost kódu je stále klíčová</div>

🔧 **Ekosystém projektu**

<div class="text-lg text-gray-600 ml-8">→ Používám build step? React? Vue? Ruby?</div>

</div>

---

# Pro jaký projekt se co hodí?

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="bg-blue-50 p-6 rounded-lg">
<h3 class="text-2xl font-semibold mb-4 text-gray-800">Tailwind</h3>

- 🤖 **Default pro AI modely**
- 📚 **Default pro knihovny komponent**
- ⚡ **Rychlý prototyping**
- 👥 **Týmy s různými CSS skills**
- 🎨 **Konzistentní design bez designéra**

</div>

<div class="bg-purple-50 p-6 rounded-lg">
<h3 class="text-2xl font-semibold mb-4 text-gray-800">Custom CSS</h3>

- 🏷️ **White label produkty**
- 🎨 **Unikátní design identity**
- 📖 **Dlouhodobé projekty**
- 🔧 **Speciální požadavky**
- 👨‍💻 **Silné CSS skills v týmu**

</div>

</div>

---

# State of CSS 2024

<div class="text-center">

<div class="text-6xl mb-8">📊</div>

<div class="text-2xl mb-6">
Co vývojáři nejvíce používají pro styling?
</div>

<div class="text-4xl font-bold text-blue-600 mb-4">
Tailwind CSS: #1
</div>

<div class="text-lg text-gray-600">
https://stateofcss.com/2024/
</div>

</div>

---

# Učení a základy

<div class="space-y-6 text-lg">

**⚠️ Riziko přeskočení základů:**

- 📚 **CSS fundamenty** - box model, flexbox, grid
- 🏗️ **Architektura stylování** - BEM, SMACSS, ITCSS
- 🎨 **Teorie Tailwindu** - utility-first philosophy

</div>

<div class="mt-12 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
<strong>Doporučení:</strong> Bez ohledu na volbu technologie je dobré rozumět CSS základům!
</div>

---

# Závěry

<div class="space-y-6 text-xl">

✅ **Oba přístupy jsou zralé a použitelné**

🤔 **Volba závisí na:**

- Typu projektu
- Týmových preferencích
- Ekosystému
- Dlouhodobých cílech

🎯 **Není to black/white:**

- Můžete kombinovat oba přístupy
- Důležitá je konzistence v rámci projektu

</div>

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

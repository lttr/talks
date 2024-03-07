---
theme: default
title: Výkonnost webu s moderními frameworky
author: Lukas Trumm
keywords: web,performance,javascript,core-web-vitals
colorSchema: light
themeConfig:
  primary: "#dd2786"
favicon: https://lukastrumm.com/favicon.ico
fonts:
  sans: Montserrat
  mono: Fira Mono
htmlAttrs:
  lang: cs
---

# Výkonnost webu<br>s moderními frameworky

<br>
Lukáš Trumm

Frontend architekt v Quanti

<!--
sdf
-->

---
src: ./pages/loading0.md
---

---
src: ./pages/loading1.md
---

---
src: ./pages/loading2.md
---

---
src: ./pages/loading3.md
---

---
layout: center
---

<h1 class="" style="font-size: 5rem;">
Proč?
</h1>

---
layout: two-cols-header
clicks: 10
---

<style scoped>
.two-cols-header {
  grid-template-rows: auto 1fr;
}
</style>

# Proč?

<style scoped>
.slidev-vclick-hidden {
  display: none;
}
</style>

::left::

<v-clicks depth="2">

- Proč je web pomalý?
  - hodně JavaScriptu
  - komplexita vývoje
- Proč to řešit?
  - abychom nemuseli čekat
  - aby se lidi vůbec dostali k tomu,<br>
    co potřebují
- Proč stále vznikají nové frameworky?<br>
  Co furt řeší?
  - vývojáři to chtějí mít dokonalé a nikdo<br>
    to nechce staré
  - jeden jazyk pro vývoj na serveru i v&nbsp;prohlížečích

</v-clicks>

::right::

<div v-click=[2,3]>

![](/medium.png)

<div class="text-gray-600 text-sm">

https://medium.com

</div>

</div>

<div v-click=[3,4]>

<Transform scale="0.8" class="ml-4">
  <img src="/roadmap.png" />
</Transform>

<div class="absolute right-0 bottom-0 text-sm text-gray-600 bg-white px-2 shadow-md">
<a href="https://roadmap.sh/frontend">roadmap.sh/frontend</a>
</div>

</div>

---

# Výkonnost webu

<div class="font-bold">

- Čas do prvního načtení stránky
- Svižnost přechodu mezi stránkami
- Rychlost reakce na kliknutí
- Plynulost skrolování
- Poskakování stránky během načítání

</div>

<br>
<br>

<v-click>
<div class="text-gray-600">

- Konverze
- Umístění ve vyhledávačích
- Nároky na hardware
- ...

</div>
</v-click>

---
clicks: 2
---

<style scoped>
.two-cols-header {
  grid-template-rows: auto;  
  grid-template-columns: 15ch 1fr;
}
</style>

# Moderní <v-click at="0">meta-</v-click>frameworky

|                                |                                                                                                                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <logos-React /> React          | <v-click at="0">&#8594; &nbsp; <logos-Nextjs-icon width="auto" /> Next </v-click>                                                                                    |
| <logos-Vue /> Vue              | <v-click at="0">&#8594; &nbsp; <logos-Nuxt-icon width="auto" /> Nuxt </v-click>                                                                                      |
| <logos-Angular-icon /> Angular | <v-click at="0">&#8594; &nbsp; <logos-Analog width="auto" /> Analog </v-click>                                                                                       |
| <logos-Svelte-icon /> Svelte   | <v-click at="0">&#8594; &nbsp; <logos-SvelteKit width="auto" /> SvelteKit </v-click>                                                                                 |
| <logos-Solidjs-icon /> Solid   | <v-click at="0">&#8594; &nbsp; <logos-Solidjs-icon width="auto" /> SolidStart </v-click>                                                                             |
| <logos-Qwik-icon /> Qwik       | <v-click at="0">&#8594; &nbsp; <logos-Qwik-icon width="auto" /> QwikCity </v-click>                                                                                  |
|                                |                                                                                                                                                                      |
|                                | <span class="text-gray-600"> <v-click at="1">&nbsp; <logos-Laravel /> Laravel &nbsp; <logos-Phoenix /> Phoenix &nbsp; <logos-dotnet /> Blazor ... </v-click> </span> |

---

# Měření výkonnosti

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/)

<br>
<br>

### Lighthouse

<Transform scale="0.8">

![Lighthouse](/lighthouse.png)

</Transform>

---

### Page Speed Insights

![Page Speed Insights](/page-speed-insights.png)

---

# Core Web Vitals

<style scoped>
.three {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>

<div class="three mt-3rem">
<img src="/lcp.svg" />
<img src="/fid.svg" />
<img src="/cls.svg" />
</div>

<div class="absolute left-3.5rem bottom-3.5rem text-sm">

Zdroj: [web.dev/articles/vitals](https://web.dev/articles/vitals)

</div>

---

# Core Web Vitals (12. 3. 2024 !)

<style scoped>
.three {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
</style>

<div class="three mt-3rem">
<img src="/lcp.svg" />
  <Transform scale="0.9" origin="center top" class="self-end mb-1ex"> <img src="/inp.svg" /> </Transform>
<img src="/cls.svg" />
</div>

<div class="absolute left-3.5rem bottom-3.5rem text-sm">

Zdroj: [web.dev/articles/vitals](https://web.dev/articles/vitals)

</div>

---
layout: quote
---

<h1 class="text-center">
Otázky?
</h1>

---

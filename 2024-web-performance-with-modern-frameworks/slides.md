---
theme: default
title: Výkonnost webu s moderními frameworky
author: Lukas Trumm
keywords: web,performance,javascript,core-web-vitals
colorSchema: light
themeConfig:
  primary: "#dd2786"
favicon: https://lukastrumm.com/favicon.ico
highlighter: shiki
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

# Proč?

<style scoped>
.slidev-vclick-hidden {
  display: none;
}
</style>

::left::

<v-clicks depth="2">

- Je to složitý!
- Proč je web pomalý?
  - hodně JavaScriptu
  - komplexita vývoje
- Proč to řešit?
  - abychom nemuseli čekat
  - aby se lidi vůbec dostali k tomu,<br>
    co potřebují
- Proč stále vznikají nové frameworky?
  - vývojáři to chtějí mít dokonalé a nikdo<br>
    to nechce staré
  - jeden jazyk pro vývoj na serveru i v&nbsp;prohlížečích

</v-clicks>

::right::

<div v-click=[3,4]>

![](/medium.png)

<div class="text-gray-600 text-sm">

https://medium.com

</div>

</div>

<div v-click=[4,5]>

<Transform scale="0.8" class="ml-4">
  <img src="/roadmap.png" />
</Transform>

<div class="absolute right-0 bottom-0 text-sm text-gray-600 bg-white px-2 shadow-md">
<a href="https://roadmap.sh/frontend">roadmap.sh/frontend</a>
</div>

</div>

<div v-click=[9,10]>

![](/bicycle.jpg)

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

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) &ndash; v prohlížeči
- [WebPageTest](https://www.webpagetest.org/) &ndash; reálná zařízení po světě
- [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/) &ndash; Google data z Chromu

<br>
<br>

### Lighthouse

<Transform scale="0.8">

![Lighthouse](/lighthouse.png)

</Transform>

---

### Page Speed Insights <span class="ml-3 text-sm">(RUM data, 75. percentil)</span>

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

<Source text="web.dev/articles/vitals" href="https://web.dev/articles/vitals" />

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

<div class="absolute left-3.5rem bottom-3.5rem">

<Source text="web.dev/articles/vitals" href="https://web.dev/articles/vitals" />

</div>

---

# Largest Contentful Paint (LCP)

<br>

![](/lcp-example.png)

<Source text="web.dev/lcp" href="https://web.dev/lcp" />

---

# Cumulative Layout Shift (CLS)

<Transform scale="0.9">

<video controls="" loop="" muted="" poster="/layout-instability-poster.png" width="658" height="510">
  <source src="https://web.dev/static/articles/cls/video/web-dev-assets/layout-instability-api/layout-instability2.webm" type="video/webm; codecs=vp8">
</video>

</Transform>

<Source text="web.dev/cls" href="https://web.dev/cls" />

---

# Interaction to Next Paint (INP)

## & First Input Delay (FID)

<br>

**Příklad:** V baru &ndash; čekání na objednaný drink

- FID: čas do začátku přípravy prvního drinku
  - ale limonáda se připravuje rychleji než koktejl
- INP: čas na přípravu samotnou všech drinků po dobu návštěvy baru

<Source text="Harry Roberts" href="https://topenddevs.com/podcasts/javascript-jabber/episodes/unpacking-core-web-vitals-jsj-620" />

---

# Demo Lighthouse

Zběžná analýza dvou e-shopů

<br>

- [czc.cz](https://www.czc.cz/)
- [rohlik.cz](https://www.rohlik.cz/)

<br>

### Postup

1. Google Chrome
1. Incognito mode (bez doplňků)
1. DevTools, záložka Lighthouse
1. Mode: Navigation, Device: Mobile, click Analyze

---

# Specifika JavaScriptových frameworků

<v-clicks>

- velká míra kontroly nad chováním v prohlížeči = příliš mnoho možností
- každých pár měsíců nebo let změna
- příliš snadné přidat mnoho nepotřebných závislostí

</v-clicks>

---

## Kontrola nad způsobem renderování HTML

<div class="mt-7">
  
<style scoped>
.slidev-vclick-hidden {
  display: none;
}
</style>

<img src="/rendering-client.svg" v-click.hide />
<img src="/rendering-server.svg" v-after />

</div>

<Source text="Nuxt documentation" href="https://nuxt.com/docs/guide/concepts/rendering" />

---
layout: two-cols-header
clicks: 11
---

<style scoped>
.slidev-vclick-hidden {
  display: none;
}
</style>

# Zrychlení načítání JS aplikací a webů

::left::

<v-clicks depth="2">

- redukce množství JavaScriptu
  - využít code splitting a lazy loading
  - omezit použití externích knihoven
  - izolovat skripty třetích stran
  - zkoumat Islands of (non)interactivity a další techniky
- redukce množství dat
- typ renderování HTML
- použití CDNky
- optimalizace obrázků a fontů
- vhodný efekt při načítání dat
- ...

</v-clicks>

::right::

<div v-click=[2,3]>

```vue
<LazyReviewsComponent />
```

</div>

<div v-click=[5,6]>

```
- ReviewsComponent.vue
- NonInterativeComponent.server.vue
- BrowserOnlyComponent.client.vue
```

</div>

<div v-click=[6,7]>

```ts
export default defineCachedEventHandler(
  async (event) => {
    const urls = [
      /* some urls */
    ]
    return Promise.all(
      urls.map(
        /* several expensive requests */
        (url) => fetch(url).then((r) => r.json()),
        /* error handling etc. */
      ),
    )
  },
  { maxAge: 300 },
)
```

</div>

<div v-click=[7,8]>

CSR, SSR, SSG, ISR, SWR, PPR

<br>

![](/ppr.avif)

<br>
<Source href="https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model" text="Vercel engineering blog" />

</div>

<div v-click=[9,10]>

```vue
<NuxtImg src="/photo.jpg" />
```

</div>

<div v-click=[10,11]>

<Transform scale="0.7">
  <Skeleton />
</Transform>

</div>

<!--
* redukce použití JavaScriptu - lze použít BE framework, nebo zkusit nový Qwik
* noviny: above the fold, code splitting
-->

---

# Demo on CrUX data

- Chrome User Experience Report
- <a href="https://lookerstudio.google.com/u/0/reporting/55bc8fad-44c2-4280-aa0b-5f3f0cd3d2be/page/M6ZPC?params=%7B%22df44%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580WordPress%25EE%2580%2580Nette%2520Framework%25EE%2580%2580Next.js%25EE%2580%2580Laravel%25EE%2580%2580Wix%25EE%2580%2580Nuxt.js%25EE%2580%2580Qwik%22,%22df48%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Nuxt.js%22,%22df33%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Czechia%22,%22df47%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Top%25201M%22%7D">Core web vitals report</a>

<Source href="http://cwvtech.report/" text="cwvtech.report" />

---

# Shrnutí

- měř
- omez JavaScript v prohlížeči
- zvol framework uvážlivě
- drž složitost na uzdě

---
layout: quote
---

<h1 class="text-center">
Otázky?
</h1>

![](/lt-talks.gif)

&#8594; https://lukastrumm.com/talks/

---


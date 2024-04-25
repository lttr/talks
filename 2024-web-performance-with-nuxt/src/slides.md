---
theme: default
title: Výkonnost webu s Nuxt frameworkem
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

# Výkonnost webu

## s Nuxt frameworkem a jemu podobnými

<br>
<br>
Lukáš Trumm

Quanti

---

# Oťukávačka

1. Víš co jsou Core Web Vitals?
1. Víš co je hydratace (v kontextu webových frameworků)?

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
- Proč je web pomalý? Milion důvodů...
  - hodně JavaScriptu
  - komplexita vývoje
- Proč to řešit?
  - abychom nemuseli čekat
  - aby se lidi vůbec dostali k tomu,
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

- Čas do prvního načtení stránky (TTFB, FCP, LCP)
- Svižnost přechodu mezi stránkami (SPA)
- Rychlost reakce na kliknutí (FID, INP)
- Plynulost skrolování (Scroll-driven animations API)
- Poskakování stránky během načítání (LCP)

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

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) &ndash; Synthetic monitoring (v prohlížeči, CI nebo cli)
- [WebPageTest](https://www.webpagetest.org/) &ndash; reálná zařízení po světě
- [Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/) &ndash; Google data z Chromu
- Vlastní měření (např. Newrelic, Sentry, ...) &ndash; Real User Monitoring

<br>
<br>

### Lighthouse

<Transform scale="0.8">

![Lighthouse](/lighthouse.png)

</Transform>

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

- [czc.cz](https://www.czc.cz/) (LCP s Cookie modálem a bez něj)
- [rohlik.cz](https://www.rohlik.cz/) (Nevyužitý JavaScript)

<br>

### Postup

1. Google Chrome
1. Incognito mode (bez doplňků)
1. DevTools, záložka Lighthouse
1. Mode: Navigation, Device: Mobile, click Analyze

---

### Page Speed Insights <span class="ml-3 text-sm">(RUM data, 75. percentil)</span>

![Page Speed Insights](/page-speed-insights.png)

---

### Newrelic - příklad 1

![Newrelic example](/newrelic1.png)

---

### Newrelic - příklad 2

![Newrelic example](/newrelic2.png)

---

# Měření výkonnosti &ndash; shrnutí

- Syntetické měření během vývoje, kontrola chyb (podobně jako linting)
- RUM během provozu
- Vybrat jen některé metriky (Google udělal za nás: Core Web Vitals)

---

# Demo CrUX data

- Chrome User Experience Report
- <a href="https://lookerstudio.google.com/u/0/reporting/55bc8fad-44c2-4280-aa0b-5f3f0cd3d2be/page/M6ZPC?params=%7B%22df44%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580WordPress%25EE%2580%2580Nette%2520Framework%25EE%2580%2580Next.js%25EE%2580%2580Laravel%25EE%2580%2580Wix%25EE%2580%2580Nuxt.js%25EE%2580%2580Qwik%22,%22df48%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Nuxt.js%22,%22df33%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Czechia%22,%22df47%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Top%25201M%22%7D">Core web vitals report</a>

<Source href="http://cwvtech.report/" text="cwvtech.report" />

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

# Zrychlujeme (nezpomalujeme)

### Takový metaframework už za nás dělá řadu věcí...

<br>

- Route/component based code splitting
- Code minification
- File name hashing for long-term caching
- CSS inlining
- Less transpilation for modern browsers
- Tree shaking
- Prefetching
- Image/Picture component

---

# Zrychlujeme - redukce množství JavaScriptu 1

- využít code splitting a lazy loading ([Nuxt docs](https://nuxt.com/docs/guide/directory-structure/components#dynamic-imports))

```vue
<LazyReviewsComponent />
```

<br>

```js
const lazyDependency = await import("./lazy-loaded-code.js")
```

<br>

- lazy hydration ([nuxt-lazy-hydrate module](https://github.com/Baroshem/nuxt-lazy-hydrate))

```vue
<LazyHydrationWrapper :when-visible="{ rootMargin: '50px' }">
  <!-- content -->
</LazyHydrationWrapper>
```

---

# Zrychlujeme - redukce množství JavaScriptu 2

- Islands of (non)interactivity ([Nuxt docs](https://nuxt.com/docs/guide/directory-structure/components#server-components))

```bash
- ReviewsComponent.vue
- NonInterativeComponent.server.vue
- BrowserOnlyComponent.client.vue
```

<br>

- omezit použití externích knihoven
- izolovat skripty třetích stran
- omezit množství globálních skriptů (např. Nuxt plugins)

---

# Zrychlujeme - redukce množství JavaScriptu 3

- přesun kódu na server ([Nuxt server API routes](https://nuxt.com/docs/guide/directory-structure/server#server-routes), middlewares)
- redukce množství dat (overfetching)

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

---

# Zrychlujeme - typ renderování

- CSR, SSR, SSG, ISR, SWR, PPR

<div style="max-width: 55vw">

![](/ppr.avif)

</div>

<Source href="https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model" text="Vercel engineering blog" />

---

# Zrychlujeme - obrázky a fonty

- optimalizace obrázků ([nuxt/image](https://image.nuxt.com/)) a fontů ([nuxt/fonts](https://github.com/nuxt/fonts))

<br>

Příklad NuxtImg s CMS Storyblok

```vue
<NuxtImg
  width="200"
  format="webp"
  provider="storyblok"
  src="https://a.storyblok.com/f/39898/3310x2192/e4ec08624e/demo-image.jpeg"
/>
```

---
layout: two-cols-header
---

# Zrychlujeme - zdánlivě

::left::

- vhodný efekt při načítání dat

::right::

<Transform scale="0.7">
  <Skeleton />
</Transform>

---

# Shrnutí

- trpělivost, je to spousta malých kroků, ne jedna výhra
- řeš hned od začátku
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

---

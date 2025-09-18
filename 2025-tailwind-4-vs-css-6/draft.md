## Titulek

Tailwind 4 vs CSS 6

## Popis přednášky

V čem je silný Tailwind 4 a kde ho naopak předčí CSS 6? Volné pokračování mé přednášky z meetupu frontendistů na téma "CSS se stále zlepšuje - využijme toho!". Srovnání reálné praxe s vanilla CSS a s Tailwindem. Jak je to s udržovatelností, s generováním pomocí AI nebo s učící křivkou?

## Základní myšlenky

- ukázat vybrané klíčové novinky a proč jsou důležité (název přednášky obsahuje verze)
- specifikovat co lze a má smysl porovnávat (slovo 'vs' slibuje porovnání)
- oba přístupy jsou použitelné na většinu use casů velmi dobře, jen vyžadují trochu jiné znalosti (vennův diagram)
- ukázat řešení dílčích problémů a vyvrácení některých mýtů názornou ukázkou kódu obou přístupů
- uvést příklady fungování s AI tooly, srovnání vstupů a výstupů
- učinit závěry ohledně toho jak a kde použít co, ne jen "it depends"

## Draft osnovy (25 min)

Úvod (2 min)

- Perlička na úvod (1 min)
- Představení a zmínka o mé přednášce na meetupu před rokem (1 min)
  - kde jsem rozebíral, zda jde postavit design systém jen pomocí čistého, moderního CSS - a ano jde

Popis problematiky (7 min)

- TLDR: Oba přístupy fungují, jen lidé mají často vyhraněné názory (1 min)
  - Tailwind i CSS a frameworky nad tím postavené jsou dospělé
- Co má smysl porovnávat (2 min)
  - Tailwind už je systém má tedy smysl ho porovnávat jedině s nějakým jiným systémem postaveným nad CSS - typicky custom frameworkem
- Čím jsou nové verze specifické (2 min)
  - Tailwind 4 - rychlost buildu, přibyla podpora dynamických CSS vlastností, např. variables, čímž může být CSS na výstupu větší
  - CSS 6 - podpora vlastností, které mění hru - layers, scoping, nesting, has, container queries
- Typické mýty (2 min)
  - rychlost vývoje, konzistence, výkon, nutnost rozhodování

Ukázky řešení (12 min)

- Řízení scopu
- Potřeba komponent
- Přepisování a přizpůsobování stylů
- Nutnost vymýšlet jména class
- Čitelnost
- Separation of concerns
- Design system, dodržení konzistence
- Generovatelnost pomocí AI
- Udržovatelnost, code review, AI refaktoring, škálování

Závěry (4 min)

- Různé pohledy na věc
  - prototyp, prezentační web pro jednoduché použití - kód mě vůbec nezajímá
  - design systém, dlouhodobý projekt - čitelnost kódu je stále klíčová
  - ekosystém - používám build step? píšu React? Vue? Ruby?
- Pro jaký typ projektu se co hodí
  - TW - default pro AI modely, default pro mnoho veřejných knihoven komponent, ...
  - CSS - White label products, ...
- Učení - vliv přeskočení základů CSS, architektury stylování a teorie Tailwindu
- Jedna informace ze State of CSS
- Závěr, zmínka State of CSS

## Perličky

- Autor projektu Base44 - vibe coding platformy (pro full stack projekty), která byla prodaná za 80 mil. dolarů:
  - "Myslím, že jsem nenapsal jedinou řádku frontendového kódu v posledních 3 měsících."
  - Pokud je vaším cílem zaujmout investory do AI technologií, můžete jít klidně domů... ale možná jste tu proto, že vás frontendový technologie baví, tak pojďme na to
  - zkráceno, zdroj: https://www.lennysnewsletter.com/p/the-base44-bootstrapped-startup-success-story-maor-shlomo
- State of CSS, https://stateofcss.com/

---
routeAlias: loading3
---

<main class="grid">
  <section style="grid-area: 1/1">

  <Transform scale="0.7">
    <Skeleton />
    <p class="text-red font-bold">An unexpected error occured, sorry.</p>
  </Transform>

  </section>

  <section style="grid-area: 1/1">

  <div class="grid grid-cols-2 gap-3">
    <div class="p-2rem border-2 flex">
      <LoadingSpinner />
    </div>
    <div class="p-2rem border-2 flex">
      <LoadingSpinner />
    </div>
    <div class="p-2rem border-2 flex">
      <LoadingSpinner />
    </div>
  </div>

  </section>

</main>

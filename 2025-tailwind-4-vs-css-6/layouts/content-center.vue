<template>
  <div class="slidev-layout content-center">
    <slot />
  </div>
</template>

<style scoped>
.content-center {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  place-items: center;
}
</style>

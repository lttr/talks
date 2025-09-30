<template>
  <div class="absolute bottom-10 right-16">
    <div
      class="max-w-[18ch] rounded-md border bg-white bg-opacity-60 px-4 py-3"
    >
      <div class="text-md mb-3">{{ feature }}</div>
      <img
        v-if="available === 'limited'"
        src="/baseline-limited-word.svg"
      />
      <img
        v-else-if="available === 'widely'"
        src="/baseline-widely-word.svg"
      />
      <img
        v-else-if="available === 'newly'"
        src="/baseline-newly-word.svg"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  feature: string
  available: "limited" | "widely" | "newly"
}>()
</script>

<style scoped></style>

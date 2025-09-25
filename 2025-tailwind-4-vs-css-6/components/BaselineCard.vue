<template>
  <div class="absolute bottom-10 right-16">
    <div
      class="max-w-[18ch] rounded-md border bg-white bg-opacity-60 px-4 py-3"
    >
      <div class="text-md mb-3">{{ feature }}</div>
      <img :src />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"

const { available } = defineProps<{
  feature: string
  available: "limited" | "widely" | "newly"
}>()

const src = computed(() => {
  switch (available) {
    case "limited":
      return "/baseline-limited-word.svg"
    case "widely":
      return "/baseline-widely-word.svg"
    case "newly":
      return "/baseline-newly-word.svg"
  }
})
</script>

<style scoped></style>

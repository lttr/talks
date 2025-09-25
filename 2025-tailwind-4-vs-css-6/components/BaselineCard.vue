<template>
  <div class="absolute right-16 bottom-10">
    <div
      class="max-w-[18ch] px-4 py-3 border rounded-md bg-white bg-opacity-60"
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

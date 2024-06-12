<template>
  <iframe class="w-full h-full min-h-[40ex]" :src></iframe>
</template>

<script lang="ts" setup>
import { computed } from "vue"

const props = defineProps<{
  htmlFile: string
}>()

const src = computed(() => `${props.htmlFile}.html`)
</script>

<style scoped></style>

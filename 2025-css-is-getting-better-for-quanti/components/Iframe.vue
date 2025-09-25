<template>
  <iframe class="h-full min-h-[40ex] w-full" :src></iframe>
</template>

<script lang="ts" setup>
import { computed } from "vue"

const props = defineProps<{
  htmlFile: string
}>()

const src = computed(() => `${props.htmlFile}.html`)
</script>

<style scoped></style>

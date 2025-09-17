<template>
  <p class="text-sm">
    Zdroj: <a :href>{{ text }}</a>
  </p>
</template>

<script lang="ts" setup>
defineProps(["href", "text"])
</script>

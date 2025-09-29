<template>
  <pre class="mx-auto max-w-3xl" v-html="text"></pre>
</template>

<script setup lang="ts">
const text = `
  Add CSS styling to the provided HTML using Custom CSS framework.

  &lt;requirements&gt;
  - Create semantic CSS classes and apply them to HTML elements
  - ONLY use existing CSS custom properties from the Custom CSS framework
  &lt;/requirements&gt;

  &lt;context&gt;
  Whole Custom CSS framework:
  <code>[the source code ~10k tokens]</code>
  &lt;/context&gt;

  &lt;examples&gt;
  ...
  &lt;/examples&gt;
`
</script>

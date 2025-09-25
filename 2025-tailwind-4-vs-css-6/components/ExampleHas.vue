<template>
  <nav class="fade-in mt-7">
    <ul>
      <li class="wrapper">
        <a href="#">Products &darr;</a>
        <ul class="submenu" :class="{ 'submenu-break': shouldBreak }">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
          <li><a href="#">Item 5</a></li>
          <li v-if="shouldBreak"><a href="#">Item 6</a></li>
          <li v-if="shouldBreak"><a href="#">Item 7</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  shouldBreak: boolean
}>()
</script>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 0.6s ease-in-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.wrapper {
  display: grid;
  justify-content: end;

  transition: width 0.5s ease-in-out;

  > a {
    display: block;
    text-align: end;
    padding-block: 0.3rem;
  }
}

.submenu {
  background-color: rgba(116, 185, 255, 0.3);
  padding-inline: 1rem;
  padding-block: 0.7rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.3);
  width: fit-content;

  li {
    margin: 0;
    padding-inline: 0.8rem;
    padding-block: 0.1rem;
  }
}

.submenu:has(li:nth-last-child(n + 7)) {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

a {
  border: none;
}

li::marker {
  content: "" !important;
}
</style>

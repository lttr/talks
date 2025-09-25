<template>
  <nav class="mt-7 fade-in">
    <ul>
      <li class="wrapper">
        <a href="#">Products &darr;</a>
        <ul class="submenu" :class="{ 'submenu-break': shouldBreak }">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
          <li><a href="#">Item 5</a></li>
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
  background-color: rgba(116, 185, 255, 0.2);
  padding-inline: 0.3rem;
  padding-block: 0.7rem;
  border-radius: 0.5rem;
  width: 10ch;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
}

.submenu:has(li:nth-last-child(n + 7)) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 25ch;
}

.submenu-break:has(li:nth-last-child(n + 5)) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 25ch;
}

a {
  border: none;
}

li::marker {
  content: "" !important;
}
</style>

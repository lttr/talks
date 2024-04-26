<template>
  <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 48px;
  height: 48px;
  margin: 6px;
  border: 6px solid #2a2a2a;
  border-radius: 50%;
  animation: lds-ring 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #2a2a2a transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.25s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.2s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.1s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

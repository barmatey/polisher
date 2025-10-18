<script setup lang="ts">
import {LOGO} from "../logo.ts";
</script>

<template>
  <div
      :style="{
        'padding': '2rem',
        'background': '#213547',
        'color': '#fafafa',
        'height': '100%',
        'border-top-left-radius': '1rem',
        'border-bottom-left-radius': '1rem',
      }"
  >
    <h1>{{ LOGO }}</h1>
  </div>
</template>

<style scoped>
.temp {
  background: #213547;
  border-top-left-radius: 1rem;
}
</style>
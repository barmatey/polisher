<script setup lang="ts">
import {LOGO} from "../logo.ts";
import MyH1 from "../atoms/my-h1.vue";
import MyH2 from "../atoms/my-h2.vue";
import FlexWrapper from "../atoms/flex-wrapper.vue";
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
    <flex-wrapper direction="column" :row-gap="4">
      <my-h1>{{ LOGO }}</my-h1>
      <my-h2>Translate</my-h2>
    </flex-wrapper>

  </div>
</template>

<style scoped>
.temp {
  background: #213547;
  border-top-left-radius: 1rem;
}
</style>
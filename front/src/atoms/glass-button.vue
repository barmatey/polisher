<script setup lang="ts">
import {Button} from "primevue";

interface P {
  label: string
  outlined?: boolean
}

const p = withDefaults(defineProps<P>(), {
  outlined: false,
})

</script>

<template>
  <button
      class="flex items-center justify-center"
      :class="{
        'glass-btn': !p.outlined,
        'outlined-glass-btn': p.outlined,
      }"
  >
    {{ p.label }}
  </button>
</template>

<style>

</style>
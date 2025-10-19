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
      class="glass-btn"
  >
    {{ p.label }}
  </button>
</template>

<style>

</style>
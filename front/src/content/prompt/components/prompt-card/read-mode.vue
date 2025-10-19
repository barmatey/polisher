<script setup lang="ts">
import type {Prompt} from "../../domain.ts";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()
</script>

<template>
  <div class="flex justify-between">
    <div>{{ p.prompt.title }}</div>
    <div>{{ p.prompt.hotkey }}</div>
  </div>

</template>

<style scoped>

</style>
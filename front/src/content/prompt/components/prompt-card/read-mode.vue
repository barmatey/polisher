<script setup lang="ts">
import type {Prompt} from "../../domain.ts";
import SimpleMenu from "../../../../atoms/simple-menu.vue";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()
</script>

<template>
  <div class="flex justify-between">
    <div>{{ p.prompt.title }}</div>
    <div class="flex gap-1">
      <div>{{ p.prompt.hotkey }}</div>
      <simple-menu/>
    </div>
  </div>

</template>

<style scoped>

</style>
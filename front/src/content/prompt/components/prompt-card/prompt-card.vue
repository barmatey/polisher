<script setup lang="ts">
import type {Prompt} from "../../domain.ts";
import ReadMode from "./read-mode.vue";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()
</script>

<template>
  <read-mode :prompt="p.prompt"/>
</template>

<style scoped>

</style>
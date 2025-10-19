<script setup lang="ts">
import type {Prompt} from "../../domain.ts";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()
</script>

<template>
  {{ p.prompt }}
</template>

<style scoped>

</style>
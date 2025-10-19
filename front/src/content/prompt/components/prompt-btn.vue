<script setup lang="ts">
import GlassButton from "../../../atoms/glass-button.vue";

interface P {
  label: string
}

const p = withDefaults(defineProps<P>(), {})
</script>

<template>
  <glass-button :label="p.label"/>
</template>

<style scoped>

</style>
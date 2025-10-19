<script setup lang="ts">
import MyButton from "../atoms/my-button.vue";

interface P {
  label: string
}

const p = withDefaults(defineProps<P>(), {})
</script>

<template>
  <my-button :label="p.label" :glass="true"/>
</template>

<style scoped>

</style>
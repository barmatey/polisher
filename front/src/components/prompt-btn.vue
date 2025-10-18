<script setup lang="ts">
import {Button} from "primevue";

interface P {
  label: string
}

const p = withDefaults(defineProps<P>(), {})
</script>

<template>
  <Button :label="p.label"/>
</template>

<style scoped>

</style>
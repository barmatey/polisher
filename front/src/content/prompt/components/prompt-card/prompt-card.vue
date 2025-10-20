<script setup lang="ts">
import type {Prompt} from "../../domain.ts";
import ReadMode from "./read-mode.vue";
import {ref} from "vue";
import EditMode from "./edit-mode.vue";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()

const isEditMode = ref(false)
</script>

<template>
  <edit-mode :prompt="p.prompt" v-if="isEditMode"/>
  <read-mode :prompt="p.prompt" v-else/>
</template>

<style scoped>

</style>
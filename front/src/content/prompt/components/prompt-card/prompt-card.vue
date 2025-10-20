<script setup lang="ts">
import type {Prompt} from "../../domain.ts";
import ReadMode from "./read-mode.vue";
import EditMode from "./edit-mode.vue";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()

const isEditMode = defineModel("editMode", {default: false})

function handleClickOnEdit() {
  isEditMode.value = true
}

function cancelEditing() {
  isEditMode.value = false
}
</script>

<template>
  <edit-mode
      @click-on-cancel="cancelEditing"
      :prompt="p.prompt"
      v-if="isEditMode"
  />
  <read-mode
      @click-on-edit="handleClickOnEdit"
      :prompt="p.prompt"
      v-else
  />
</template>

<style scoped>

</style>
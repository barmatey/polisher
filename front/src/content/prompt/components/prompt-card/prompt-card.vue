<script setup lang="ts">
import type {Prompt} from "../../domain.ts";
import ReadMode from "./read-mode.vue";
import EditMode from "./edit-mode.vue";
import {ref} from "vue";

interface P {
  prompt: Prompt
  editing?: boolean
}

const p = withDefaults(defineProps<P>(), {
  editing: false,
})

const isEditMode = ref(p.editing)

const e = defineEmits<{
  (e: "edit"): void
  (e: "cancel"): void
  (e: "updated", item: Prompt): void
}>()

function handleEdit() {
  isEditMode.value = true
  e("edit")
}

function handleCancel() {
  isEditMode.value = false
  e("cancel")
}

function handleUpdated(item: Prompt) {
  e("updated", item)
  isEditMode.value = false
}

</script>

<template>
  <edit-mode
      @cancel="handleCancel"
      @updated="handleUpdated"
      :prompt="prompt"
      v-if="isEditMode"
  />
  <read-mode
      @edit="handleEdit"
      :prompt="prompt"
      v-else
  />
</template>

<style scoped>

</style>
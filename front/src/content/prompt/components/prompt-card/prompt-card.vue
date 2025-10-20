<script setup lang="ts">
import type {Prompt} from "../../domain.ts";
import ReadMode from "./read-mode.vue";
import EditMode from "./edit-mode.vue";
import {ref} from "vue";

interface P {
  prompt: Prompt
  editing?: boolean
}

const p =withDefaults(defineProps<P>(), {
  editing: false,
})

const isEditMode = ref(p.editing)

const e = defineEmits(["editModeOpened", "editModeClosed"])

function handleEdit() {
  isEditMode.value = true
  e("editModeOpened")
}

function handleCancel() {
  isEditMode.value = false
  e("editModeClosed")
}
</script>

<template>
  <edit-mode
      @click-on-cancel="handleCancel"
      :prompt="prompt"
      v-if="isEditMode"
  />
  <read-mode
      @click-on-edit="handleEdit"
      :prompt="prompt"
      v-else
  />
</template>

<style scoped>

</style>
<script setup lang="ts">
import type {Prompt} from "../../domain.ts";
import SimpleMenu from "../../../../atoms/simple-menu.vue";

interface P {
  prompt: Prompt
}

const p = defineProps<P>()

const e = defineEmits<{
  (e: "edit"): void
}>()

function handleClickOnEdit() {
  e("edit")
}
</script>

<template>
  <div class="flex justify-between items-center">
    <div>{{ p.prompt.title }}</div>
    <div class="flex gap-3 items-center">
      <div>{{ p.prompt.hotkey }}</div>
      <simple-menu
          @edit="handleClickOnEdit"
      />
    </div>
  </div>

</template>

<style scoped>

</style>
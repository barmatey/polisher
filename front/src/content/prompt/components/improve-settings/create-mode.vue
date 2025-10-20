<script setup lang="ts">
import type {ImproveContext} from "./types.ts";
import SaveCancel from "../../../../atoms/save-cancel.vue";

const context = defineModel<ImproveContext>({required: true})

function handleClickOnCancel() {
  context.value.mode = "read"
}
</script>

<template>
  <div>
    <save-cancel
        @click-on-cancel="handleClickOnCancel"
    />
  </div>
</template>

<style scoped>

</style>
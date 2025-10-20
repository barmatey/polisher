<script setup lang="ts">

import GlassButton from "./glass-button.vue";

const e = defineEmits(["cancel", "save"])

function handleClickOnCancel() {
  e("cancel")
}

function handleClickOnSave() {
  e("save")
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <glass-button label="Save" @click="handleClickOnSave"/>
    <glass-button label="Cancel" outlined @click="handleClickOnCancel"/>
  </div>
</template>

<style scoped>

</style>
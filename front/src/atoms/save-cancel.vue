<script setup lang="ts">

import GlassButton from "./glass-button.vue";

const e = defineEmits(["clickOnCancel"])

function handleClickOnCancel() {
  e("clickOnCancel")
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <glass-button label="Save"/>
    <glass-button label="Cancel" outlined @click="handleClickOnCancel"/>
  </div>
</template>

<style scoped>

</style>
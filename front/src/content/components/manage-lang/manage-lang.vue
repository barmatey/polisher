<script setup lang="ts">
import {Dialog} from "primevue";
import AddBtn from "./add-btn.vue";
import {ref} from "vue";
import {WINDOW_PADDING, WINDOW_WIDTH} from "../../config.ts";

const showManageWindow = ref(false)
</script>

<template>
  <div>
    <add-btn @click="() => showManageWindow = !showManageWindow"/>
    <Dialog
        header="Manage Languages"
        v-model:visible="showManageWindow"
        position="topright"
        :style="{
          'width': `${WINDOW_WIDTH - WINDOW_PADDING}rem`
        }"
    >
      <div>Hello</div>
    </Dialog>
  </div>
</template>

<style scoped>

</style>
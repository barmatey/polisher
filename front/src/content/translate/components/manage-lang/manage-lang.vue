<script setup lang="ts">
import {Dialog} from "primevue";
import AddBtn from "./add-btn.vue";
import {ref} from "vue";
import {WINDOW_PADDING, WINDOW_WIDTH} from "../../../config.ts";

const showManageWindow = ref(true)
</script>

<template>
  <div>
    <add-btn/>
    <Dialog
        header="Manage Languages"
        v-model:visible="showManageWindow"
        position="topright"
        modal
        :style="{
          'width': `${WINDOW_WIDTH - WINDOW_PADDING * 2}px`
        }"
    >
      <div>Hello</div>
    </Dialog>
  </div>
</template>

<style scoped>

</style>
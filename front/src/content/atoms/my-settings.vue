<script setup lang="ts">
import {WINDOW_PADDING, WINDOW_WIDTH} from "../config.ts";
import {Button} from "primevue";
import {ref} from "vue";
import {Dialog} from "primevue";

const showWindow = ref(false)
</script>

<template>
  <div>
    <Button
        @click="() => showWindow = !showWindow"
        label="Settings"
        size="small"
        outlined
        style="height: 2rem"
    />
    <Dialog
        header="Manage Languages"
        v-model:visible="showWindow"
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
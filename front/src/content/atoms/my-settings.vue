<script setup lang="ts">
import {WINDOW_PADDING, WINDOW_WIDTH} from "../config.ts";
import {ref} from "vue";
import {Dialog} from "primevue";
import IconCog from "../../assets/icons/icon-cog.vue";

const showWindow = ref(false)
</script>

<template>
  <div>
    <icon-cog
        @click="() => showWindow = !showWindow"
        stroke-width="1.5"
        class="cursor-pointer"
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
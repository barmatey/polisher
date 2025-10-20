<script setup lang="ts">
import MySettings from "../../../../atoms/my-settings.vue";
import {computed, onMounted, ref} from "vue";
import {getPromptService} from "../../services.ts";
import ReadMode from "./read-mode.vue";
import CreateMode from "./create-mode.vue";
import UpdateMode from "./update-mode.vue";
import type {ImproveContext} from "./types.ts";

const context = ref<ImproveContext>({
  mode: "read",
  prompts: [],
  updateTarget: null
})

const title = computed(() => ({
      read: "Improve Settings",
      create: "Create Prompt",
      update: "Update Prompt",
    }[context.value.mode]) as string
)

const currentView = computed(() => ({
  read: ReadMode,
  create: CreateMode,
  update: UpdateMode,
}[context.value.mode]));


function clear() {

}

onMounted(async () => {
  context.value.prompts = await getPromptService().getAllImprovePrompts()
})
</script>

<template>
  <my-settings :title="title" @dialog-closed="clear">
    <component
        :is="currentView"
        v-model="context"
    />
  </my-settings>
</template>

<style scoped>

</style>
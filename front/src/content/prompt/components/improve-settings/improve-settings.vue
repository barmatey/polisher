<script setup lang="ts">
import MySettings from "../../../../atoms/my-settings.vue";
import {computed, onMounted, ref} from "vue";
import {getPromptService} from "../../services.ts";
import ReadMode from "./read-mode.vue";
import CreateMode from "./create-mode.vue";
import UpdateMode from "./update-mode.vue";
import type {ImproveContext} from "./types.ts";
import type {Prompt} from "../../domain.ts";

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


function handleCreated(item: Prompt) {
  context.value.prompts.push(item)
  context.value.mode = "read"
}

function handleDeleted(item: Prompt) {
  context.value.prompts = context.value.prompts.filter(x => x.id !== item.id)
  context.value.mode = "read"
}

function handleUpdated(item: Prompt) {
  context.value.prompts = context.value.prompts.map(x => x.id === item.id ? item : x)
  context.value.mode = "read"
}

function clear() {
  context.value = {
    mode: "read",
    prompts: [],
    updateTarget: null
  }
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
        @created="handleCreated"
        @updated="handleUpdated"
        @deleted="handleDeleted"
    />
  </my-settings>
</template>

<style scoped>

</style>
<script setup lang="ts">
import MySettings from "../../../../atoms/my-settings.vue";
import {computed, ref} from "vue";
import ReadMode from "./read-mode.vue";
import CreateMode from "./create-mode.vue";
import UpdateMode from "./update-mode.vue";
import type {ImproveContext} from "./types.ts";
import type {Prompt} from "../../domain.ts";
import type {Mode} from "../../../shared/types.ts";

const prompts = defineModel<Prompt[]>("prompts", {default: () => []})
const mode = ref<Mode>("read")
const updateTarget = ref<Prompt | null>(null)

const context = computed<ImproveContext>(() => ({
  mode: mode.value,
  prompts: prompts.value,
  updateTarget: updateTarget.value,
}))

const title = computed(() => ({
      read: "Settings",
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
  prompts.value.push(item)
  clear()
}

function handleDeleted(item: Prompt) {
  prompts.value = prompts.value.filter(x => x.id !== item.id)
  clear()
}

function handleUpdated(item: Prompt) {
  prompts.value = prompts.value.map(x => x.id === item.id ? item : x)
  clear()
}

function handleCancel() {
  clear()
}

function handleEdit(target: Prompt) {
  updateTarget.value = target
  mode.value = "update"
}

function handleBuild() {
  mode.value = "create"
}

function clear() {
  mode.value = "read"
  updateTarget.value = null
}


</script>

<template>
  <my-settings :title="title" @dialog-closed="clear">
    <component
        :is="currentView"
        :context="context"
        @created="handleCreated"
        @updated="handleUpdated"
        @deleted="handleDeleted"
        @cancel="handleCancel"
        @edit="handleEdit"
        @build="handleBuild"
    />
  </my-settings>
</template>

<style scoped>

</style>
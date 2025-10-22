<script setup lang="ts">
import IconPencil from "../assets/icons/icon-pencil.vue";
import IconTrash from "../assets/icons/icon-trash.vue";
import GlassButton from "./glass-button.vue";
import {ref} from "vue";

const e = defineEmits(["edit", "delete"]);

const deleteClicked =ref(false)


const handleDelete = () => {
  if (!deleteClicked.value) {
    deleteClicked.value = true
    return
  }
}


</script>

<template>
  <div class="flex items-center gap-1">
    <icon-pencil
        stroke-width="0.75"
        class="cursor-pointer"
        :style="{
        transition: '0.2s',
      }"
    />

    <div class="relative">
      <icon-trash
          stroke-width="0.75"
          class="cursor-pointer relative"
          :style="{
            transition: '0.2s',
          }"
          @click="handleDelete"
      />
      <div
          v-if="deleteClicked"
          :style="{
            position: 'absolute',
            right: 0,
            top: '1.7rem',
            background: 'var(--core-background)',
            padding:'0.5rem 0.75rem',
            borderRadius: '6px',
            width: 'max-content',
            zIndex: 10,
          }"
      >
        <div>
          Are you sure?
        </div>
        <div class="flex gap-2 mt-2">
          <glass-button label="Cancel" outlined @click="() => deleteClicked = false"/>
          <glass-button label="Delete"/>
        </div>
      </div>
    </div>
  </div>
</template>
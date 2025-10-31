<script setup lang="ts">
import IconPencil from "../assets/icons/icon-pencil.vue";
import IconTrash from "../assets/icons/icon-trash.vue";
import GlassButton from "./glass-button.vue";
import {ref, onMounted, onUnmounted} from "vue";

const e = defineEmits(["edit", "delete"]);

const deleteClicked = ref(false);
const popupRef = ref<HTMLElement | null>(null);

const handleDelete = () => {
  if (!deleteClicked.value) {
    deleteClicked.value = true;
    return;
  }
};

const handleEdit = () => {
  e("edit", e);
}


const handleClickOutside = (event: MouseEvent) => {
  if (
      popupRef.value &&
      !popupRef.value.contains(event.target as Node)
  ) {
    deleteClicked.value = false;
  }
};

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    deleteClicked.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('keydown', handleEscapeKey);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
  document.removeEventListener('keydown', handleEscapeKey);
});
</script>

<template>
  <div class="flex items-center gap-1">
    <icon-pencil
        @click="handleEdit"
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
          ref="popupRef"
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
          <glass-button label="Delete" @click="() => $emit('delete')"/>
        </div>
      </div>
    </div>
  </div>
</template>
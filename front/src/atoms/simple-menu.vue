<script setup lang="ts">
import IconPencil from "../assets/icons/icon-pencil.vue";
import IconTrash from "../assets/icons/icon-trash.vue";
import { useConfirm } from "primevue/useconfirm";

const emit = defineEmits(["edit", "delete"]);

const confirm = useConfirm();

const handleDelete = (event: any) => {
  console.log('Hande Delete', event.currentTarget);
  confirm.require({
    target: event.currentTarget,
    message: 'Are you sure you want to delete?',
    acceptClass: 'p-button-danger',
    rejectProps: {
      label: 'Cancel',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Delete',
      severity: 'danger'
    },
    accept: () => {
      emit("delete");
    },

  });
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
    <div>
      <icon-trash
          stroke-width="0.75"
          class="cursor-pointer relative"
          :style="{
            transition: '0.2s',
          }"
          @click="(ev: any) => handleDelete(ev)"
      />
      <div class="p-3 absolute right-0" style="background: var(--core-background);)">
        Are you sure?
      </div>
    </div>
  </div>
</template>
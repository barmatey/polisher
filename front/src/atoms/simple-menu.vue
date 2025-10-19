<script setup lang="ts">
import {ref} from "vue";
import {Button} from "primevue";
import {Menu} from "primevue";

const menu = ref();
const items = ref([
  {
    label: "Edit",
  },
  {
    label: "Delete",
  }
])

const toggle = (event: any) => {
  menu.value.toggle(event);
};
</script>


<template>
  <div class="card flex justify-center">
    <Button
        type="button"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        size="small"
        rounded
        outlined
        label="x"
    />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true"/>
  </div>
</template>


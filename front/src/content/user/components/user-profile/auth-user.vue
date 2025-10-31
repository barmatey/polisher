<script setup lang="ts">
import MySettings from "../../../../atoms/my-settings.vue";
import {useUserStore} from "../../store.ts";
import IconLogout from "../../../../assets/icons/icon-logout.vue";

const store = useUserStore()
</script>

<template>
  <div>
    <my-settings icon="user" title="User">
      <div class="flex flex-col gap-3">
        <div class="flex justify-between gap-2 flex-wrap">
          <div>{{ store.user?.email }}</div>
          <icon-logout stroke-width="1"/>
        </div>
      </div>
    </my-settings>
  </div>
</template>

<style scoped>

</style>
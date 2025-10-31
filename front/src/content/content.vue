<script setup lang="ts">
import {LOGO} from "../logo.ts";
import MyH1 from "../atoms/my-h1.vue";
import PromptBtn from "./prompt/components/prompt-btn.vue";
import {WINDOW_PADDING} from "./config.ts";
import PromptSettings from "./prompt/components/prompt-settings/prompt-settings.vue";
import UserProfile from "./user/components/user-profile/user-profile.vue";
import {ConfirmPopup} from "primevue";
</script>

<template>
  <div
      :style="{
        'background': 'var(--core-background)',
        'color': 'white',
        'padding': `${WINDOW_PADDING}rem`,
        'height': '100%',
        'border-top-left-radius': '1rem',
        'border-bottom-left-radius': '1rem',
      }"
  >
    <div class="flex flex-col gap-6">
      <div class="flex justify-between items-center">
        <my-h1>{{ LOGO }}</my-h1>
        <div class="flex gap-2">
          <prompt-settings/>
          <user-profile/>
        </div>
      </div>


      <div>
        <div class="flex flex-wrap gap-2 mt-3">
          <prompt-btn label="Laconic"/>
          <prompt-btn label="Churchill"/>
        </div>

      </div>

    </div>

    <ConfirmPopup/>
  </div>
</template>

<style scoped>

</style>
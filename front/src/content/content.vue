<script setup lang="ts">
import {LOGO} from "../logo.ts";
import MyH1 from "../atoms/my-h1.vue";
import PromptBtn from "./prompt/components/prompt-btn.vue";
import {WINDOW_PADDING} from "./config.ts";
import PromptManager from "./prompt/components/prompt-manager/prompt-manager.vue";
import UserProfile from "./user/components/user-profile/user-profile.vue";
import {ConfirmPopup} from "primevue";
import {onMounted, ref} from "vue";
import type {Prompt} from "./prompt/domain.ts";
import {getPromptService} from "./prompt/services.ts";
import {isAuthenticated} from "./user/store.ts";
import MySub from "./sub/components/my-sub/my-sub.vue";
import SelectedText from "./text/components/selcted-text/selected-text.vue";

const prompts = ref<Prompt[]>()

onMounted(async () => {
  prompts.value = await getPromptService().getAll()
})
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
          <my-sub/>
          <user-profile/>
          <prompt-manager
              v-if="isAuthenticated()"
              v-model:prompts="prompts"
          />
        </div>
      </div>


      <div>
        <div class="flex flex-wrap gap-2 mt-3">
          <prompt-btn
              :label="item.title"
              v-for="item in prompts"
          />
        </div>

      </div>

    </div>

    <selected-text/>
    <ConfirmPopup/>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {LOGO} from "../logo.ts";
import MyH1 from "./atoms/my-h1.vue";
import MyH2 from "./atoms/my-h2.vue";
import PromptBtn from "./components/prompt-btn.vue";
import {WINDOW_PADDING} from "./config.ts";
import TranslateStrategySelector from "./components/translate-strategy-selector.vue";
import MyH3 from "./atoms/my-h3.vue";
import TranslateSettings from "./components/translate-settings.vue";
import ImproveSettings from "./components/improve-settings.vue";
import UserProfile from "./components/user-profile/user-profile.vue";

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
        <user-profile/>
      </div>

      <div>
        <div class="flex justify-between items-center">
          <my-h2>Translate</my-h2>
          <translate-settings/>
        </div>
        <div class="flex flex-wrap gap-2 mt-3">
          <prompt-btn label="English"/>
          <prompt-btn label="Russian"/>
          <prompt-btn label="Chinese"/>
        </div>

        <div class="mt-4">
          <my-h3>Strategy:</my-h3>
          <translate-strategy-selector class="mt-2"/>
        </div>
      </div>

      <div/>

      <div>
        <div class="flex justify-between items-center">
          <my-h2>Improve</my-h2>
          <improve-settings/>
        </div>
        <div class="flex flex-wrap gap-2 mt-3">
          <prompt-btn label="Laconic"/>
          <prompt-btn label="Churchill"/>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>

</style>
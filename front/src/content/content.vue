<script setup lang="ts">
import {LOGO} from "../logo.ts";
import MyH1 from "./atoms/my-h1.vue";
import MyH2 from "./atoms/my-h2.vue";
import PromptBtn from "./components/prompt-btn.vue";
import ManageLang from "./components/manage-lang/manage-lang.vue";
import {WINDOW_PADDING} from "./config.ts";
</script>

<template>
  <div
      :style="{
        'padding': `${WINDOW_PADDING}rem`,
        'background': '#213547',
        'color': '#fafafa',
        'height': '100%',
        'border-top-left-radius': '1rem',
        'border-bottom-left-radius': '1rem',
      }"
  >
    <div class="flex flex-col gap-4">
      <my-h1>{{ LOGO }}</my-h1>

      <div>
        <div>
          <my-h2>Translate</my-h2>
          <div class="flex flex-wrap gap-2 mt-2">
            <prompt-btn label="English"/>
            <prompt-btn label="Russian"/>
            <prompt-btn label="Chinese"/>
            <manage-lang/>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.temp {
  background: #213547;
  border-top-left-radius: 1rem;
}
</style>
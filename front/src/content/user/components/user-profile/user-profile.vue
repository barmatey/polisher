<script setup lang="ts">
import AuthUser from "./auth-user.vue";
import UnauthUser from "./unauth-user.vue";
import {isAuthenticated} from "../../store.ts";


function getComponent() {
  return isAuthenticated()
      ? AuthUser
      : UnauthUser
}
</script>

<template>
  <component :is="getComponent()"/>
</template>

<style scoped>

</style>
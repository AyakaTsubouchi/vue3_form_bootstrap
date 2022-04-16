<template>
  <div>
    <div v-if="isLoggedIn===false">
      <h1>Can I have your name?</h1>
    </div>
    <div v-else>
      <h1>Hi! {{ userName }} :)</h1>
    </div>
  </div>
</template>

<script>
import { store } from "@/store.js";
export default {
  computed: {
    userName() {
      return store.userName;
    },
    isLoggedIn(){
      return store.isLoggedIn
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
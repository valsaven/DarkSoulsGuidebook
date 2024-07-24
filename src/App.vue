<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MainMenu from './components/MainMenu.vue';
</script>

<template>
  <div class="header">
    <RouterLink to="/">
      <h1>Dark Souls Guidebook</h1>
    </RouterLink>
  </div>

  <MainMenu />
  <RouterView />
</template>

<style>

</style>

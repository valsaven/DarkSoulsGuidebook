<template>
  <!-- Header  -->
  <div class="header">
    <router-link to="/">
      <h1>Dark Souls Guidebook</h1>
    </router-link>
  </div>

  <!-- Body -->
  <the-menu />

  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheMenu from './views/TheMenu.vue';

export default defineComponent({
  name: 'App',
  components: {
    'the-menu': TheMenu,
  },
});
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

body,
h1,
p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

a:visited {
  color: inherit;
}

p {
  text-shadow: 0 0 .2em #fff;
}

.header {
  background-color: #212121;
  color: white;
  padding: 20px;
}

body {
  background: #303030;
  color: #fff;
  text-align: center;
}

#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  margin: 0 auto;
  max-width: 100%;
  text-align: center;
}
</style>

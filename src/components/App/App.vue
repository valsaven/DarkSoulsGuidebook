<template>
  <div class="App" id="app">
    <Header></Header>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../Header/Header.vue';

  export default {
    name: 'app',
    components: {
      'Header': Header
    },
    data () {
      return {}
    }
  }
</script>


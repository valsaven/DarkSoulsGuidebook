<template>
  <div class="App" id="app">
    <Header></Header>
    <div class="main-menu">
      {{item}}
      <a v-for="item in menuItems" :src="item.alt">
          <div class="content-item">
            <img :src="item.img" :alt="item.alt"/>
          <p>{{item.title}}</p>
          </div>
      </a>
    </div>
  </div>
</template>

<style src="./style.css"></style>

<script>
  import Vue from 'vue';
  import Header from '../Header/Header.vue';

  export default {
    name: 'app',
    components: {
      'Header': Header
    },
    data () {
      return {
        menuItems: [
          { title: 'CHARACTERS', img: '', alt: 'characters' },
          { title: 'WEAPONS', img: '', alt: 'weapons' },
          { title: 'ARMOR', img: '', alt: 'armor' },
          { title: 'MAGIC', img: '', alt: 'magic' },
          { title: 'ITEMS', img: '', alt: 'items' },
          { title: 'ONLINE PLAY', img: '', alt: 'online' },
          { title: 'STATS', img: '', alt: 'stats' },
          { title: 'LOCATIONS', img: '', alt: 'locations' },
        ],
      }
    }
  }
</script>


<template>
  <div
    id="menu"
    class="Menu"
  >
    <div class="main-menu">
      <router-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.alt"
      >
        <div class="content-item">
          <img
            :alt="item.alt"
            :src="item.img"
          >
          <p class="glow"> {{ item.title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { icons } from '../images';
import { ref } from 'vue';

const menuItems = ref([
  { title: 'CHARACTERS', img: icons.Solaire, alt: 'characters' },
  { title: 'WEAPONS', img: icons.Weapons, alt: 'weapons' },
  { title: 'ARMOR', img: icons.Armor, alt: 'armor' },
  { title: 'MAGIC', img: icons.Spells, alt: 'magic' },
  { title: 'ITEMS', img: icons.Items, alt: 'items' },
  { title: 'ONLINE PLAY', img: icons.Soapstone, alt: 'online' },
  { title: 'STATS', img: icons.Stats, alt: 'stats' },
  { title: 'LOCATIONS', img: icons.Locations, alt: 'locations' },
]);
</script>

<style>
.main-menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 0;
}
</style>

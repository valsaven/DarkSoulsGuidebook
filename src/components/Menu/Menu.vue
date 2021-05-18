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
            :src="item.img"
            :alt="item.alt"
          >
          <p>{{ item.title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import './style.css';

// Images
import Solaire from '../../assets/icons/menu/Solaire.png';
import Weapons from '../../assets/icons/menu/Weapons.png';
import Armor from '../../assets/icons/menu/Armor.png';
import Spells from '../../assets/icons/menu/Spells.png';
import Items from '../../assets/icons/menu/Items.png';
import Soapstone from '../../assets/icons/menu/Soapstone.png';
import Stats from '../../assets/icons/menu/Stats.png';
import Locations from '../../assets/icons/menu/Locations.png';

const icons = {
  Solaire,
  Weapons,
  Armor,
  Spells,
  Items,
  Soapstone,
  Stats,
  Locations,
};

export default {
  name: 'App',
  data() {
    return {
      menuItems: [
        { title: 'CHARACTERS', img: icons.Solaire, alt: 'characters' },
        { title: 'WEAPONS', img: icons.Weapons, alt: 'weapons' },
        { title: 'ARMOR', img: icons.Armor, alt: 'armor' },
        { title: 'MAGIC', img: icons.Spells, alt: 'magic' },
        { title: 'ITEMS', img: icons.Items, alt: 'items' },
        { title: 'ONLINE PLAY', img: icons.Soapstone, alt: 'online' },
        { title: 'STATS', img: icons.Stats, alt: 'stats' },
        { title: 'LOCATIONS', img: icons.Locations, alt: 'locations' },
      ],
    };
  },
};
</script>

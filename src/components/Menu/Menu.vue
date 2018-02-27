<template>
  <div class="Menu" id="menu">
    <div class="main-menu">
      {{item}}
      <router-link :to="item.alt" v-for="item in menuItems">
        <div class="content-item">
          <img :src="item.img" :alt="item.alt"/>
          <p>{{item.title}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style src="./style.scss"></style>

<script>
// Images
import Solaire from '../../assets/MenuIcons/Solaire.png';
import Weapons from '../../assets/MenuIcons/Weapons.png';
import Armor from '../../assets/MenuIcons/Armor.png';
import Spells from '../../assets/MenuIcons/Spells.png';
import Items from '../../assets/MenuIcons/Items.png';
import Soapstone from '../../assets/MenuIcons/Soapstone.png';
import Stats from '../../assets/MenuIcons/Stats.png';
import Locations from '../../assets/MenuIcons/Locations.png';

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
  name: 'app',
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

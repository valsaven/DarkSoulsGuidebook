import { createRouter, createWebHashHistory } from 'vue-router';

import Menu from '../components/Menu/Menu.vue';
import Characters from '../components/Characters.vue';
import Weapons from '../components/Weapons.vue';
import Armor from '../components/Armor.vue';
import Magic from '../components/Magic.vue';
import Items from '../components/Items.vue';
import Online from '../components/Online.vue';
import Stats from '../components/Stats.vue';
import Locations from '../components/Locations.vue';

const routes = [
  { path: '/', component: Menu },
  { path: '/characters', component: Characters },
  { path: '/weapons', component: Weapons },
  { path: '/armor', component: Armor },
  { path: '/magic', component: Magic },
  { path: '/items', component: Items },
  { path: '/online', component: Online },
  { path: '/stats', component: Stats },
  { path: '/locations', component: Locations },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

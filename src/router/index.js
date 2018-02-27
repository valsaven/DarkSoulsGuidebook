import Vue from 'vue';
import Router from 'vue-router';
import Menu from '../components/Menu/Menu.vue';
import Characters from '../components/Characters.vue';
import Weapons from '../components/Weapons.vue';
import Armor from '../components/Armor.vue';
import Magic from '../components/Magic.vue';
import Items from '../components/Items.vue';
import Online from '../components/Online.vue';
import Stats from '../components/Stats.vue';
import Locations from '../components/Locations.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Menu', component: Menu },
    { path: '/characters', name: 'Characters', component: Characters },
    { path: '/weapons', name: 'Weapons', component: Weapons },
    { path: '/armor', name: 'Armor', component: Armor },
    { path: '/magic', name: 'Magic', component: Magic },
    { path: '/items', name: 'Items', component: Items },
    { path: '/online', name: 'Online Play', component: Online },
    { path: '/stats', name: 'Stats', component: Stats },
    { path: '/locations', name: 'Locations', component: Locations },
  ],
});

import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from './views/NotFound.vue';

import TheCategory from './components/TheCategory.vue';

export const routesNames = [
  'characters',
  'weapons',
  'armor',
  'magic',
  'items',
  'online',
  'stats',
  'locations',
];

const routes = [
  { path: '/:category', name: 'main', component: TheCategory },
  { path: '/404', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  const isHomePage = to.fullPath === '/';
  const isThisPage404 = !isHomePage && !routesNames.includes(<string>to.params.category);

  if (to.fullPath === '/404') {
    return;
  }

  if (isThisPage404) {
    next('/404');
  } else {
    next();
  }
});

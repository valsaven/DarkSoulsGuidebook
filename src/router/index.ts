import { createRouter, createWebHistory } from 'vue-router';

export const routesNames = ['characters', 'weapons', 'armor', 'magic', 'items', 'online', 'stats', 'locations'];

const routes = [
  {
    path: '/',
    name: 'home',
    component: {
      template: '<div></div>',
    },
  },
  {
    path: '/:category',
    name: 'main',
    component: () => import('../components/TheCategory.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for 404
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isHomePage = to.path === '/';
  const category = to.params.category
    ? Array.isArray(to.params.category)
      ? to.params.category[0]
      : to.params.category
    : '';
  const isThisPage404 = !isHomePage && category && !routesNames.includes(category);

  if (to.path === '/404') {
    return next();
  }

  if (isThisPage404) {
    next('/404');
  } else {
    next();
  }
});

export default router;

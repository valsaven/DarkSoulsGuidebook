import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Menu from '@/components/Menu/Menu';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu,
    },
  ],
});

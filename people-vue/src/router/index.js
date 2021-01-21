import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/pages/create-people/CreatePeopleComponent'),
  },
  {
    path: '/list-peoples',
    name: 'list',
    component: () => import('../components/pages/list-people/ListPeopleComponent'),
  },
  {
    path: '/edit-people/:id',
    name: 'update',
    component: () => import('../components/pages/edit-people/EditPeopleComponent'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // Quando houver carregamento de uma página inicial, então usar o NProgress:
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Completando a animação da rota do NProgress
  NProgress.done();
});

export default router;

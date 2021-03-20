import { createWebHistory, createRouter } from 'vue-router'
import componentsRoutes from './components'

import MainPage from '@/pages/Index.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  ...componentsRoutes,
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

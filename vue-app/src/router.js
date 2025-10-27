import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '@/components/page-not-found.vue'

const routes = [
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('./views/products/products.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/about.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

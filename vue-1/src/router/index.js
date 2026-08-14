import { createRouter, createWebHistory } from 'vue-router'
import ProductTable from '../components/ProductTable/Index.vue'

const routes = [
  {
    path: '/',
    redirect: '/product-table'
  },
  {
    path: '/product-table',
    name: 'ProductTable',
    component: ProductTable
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

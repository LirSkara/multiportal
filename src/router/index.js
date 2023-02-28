import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import AdvView from '../views/AdvView.vue'
import MarketView from '../views/MarketView.vue'
import CategoryView from '../views/CategoryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/adv',
    name: 'adv',
    component: AdvView
  },
  {
    path: '/market',
    name: 'market',
    component: MarketView
  },
  {
    path: '/category/:href/:id',
    name: 'category',
    component: CategoryView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

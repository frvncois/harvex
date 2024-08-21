import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import MarketplaceView from '../views/MarketplaceView.vue'
import MessagesView from '../views/MessagesView.vue'
import SettingsView from '../views/SettingsView.vue'
import ProductView from '../views/ProductView.vue'
import ListingView from '../views/ListingView.vue'
import { auth } from '@/firebase.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: { title: 'Dashboard', requiresAuth: true }
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: MarketplaceView,
      meta: { title: 'Marketplace', requiresAuth: true }
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessagesView,
      meta: { title: 'Messages', requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { title: 'Settings', requiresAuth: true }
    },
    {
      path: '/listing',
      name: 'listing',
      component: ListingView,
      meta: { title: 'My Listing', requiresAuth: true }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
      meta: { title: 'Product', requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = auth.currentUser

  if (requiresAuth && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router

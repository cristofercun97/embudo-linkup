import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Resolve current auth state before every navigation
let resolvedUser = undefined
const authReady = new Promise(resolve => {
  const unsub = onAuthStateChanged(auth, user => {
    resolvedUser = user
    unsub()
    resolve(user)
  })
})

router.beforeEach(async to => {
  if (resolvedUser === undefined) await authReady
  if (to.meta.requiresAuth && !resolvedUser) return '/login'
  if (to.name === 'Login' && resolvedUser) return '/'
})

// Keep resolvedUser fresh after initial load
onAuthStateChanged(auth, user => { resolvedUser = user })

export default router

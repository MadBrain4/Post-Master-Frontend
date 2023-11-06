import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/authStore'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
    meta: {
      requireAuth: false,
      isAuth: false,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requireAuth: false,
      isAuth: false,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
    meta: {
      requireAuth: false,
      isAuth: true,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue'),
    meta: {
      requireAuth: false,
      isAuth: true,
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashboardView.vue'),
    meta: {
      requireAuth: true,
      isAuth: false,
    }
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/PostsView.vue'),
    meta: {
      requireAuth: true,
      isAuth: false,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  const jwt = authStore.jwt
  const needAuth = to.meta.requireAuth
  const isAuth = to.meta.isAuth

  if (!jwt && needAuth) {
    next({ name: 'login' })
  } else if (jwt && isAuth) {
    next({name: 'dashboard'})
  } else {
    next()
  }
})

export default router

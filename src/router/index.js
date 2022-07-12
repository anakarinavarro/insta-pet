import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      accessLevel: 'public',
    },
  },
  {
    path: '/LoginView',
    name: 'LoginView',

    component: () => import('../views/LoginView.vue'),
    meta: {
      accessLevel: 'public',
    },
  },
  {
    path: '/AccountView',
    name: 'AccountView',

    component: () => import('../views/AccountView.vue'),
    meta: {
      accessLevel: 'private',
    },
  },
  {
    path: '/TimeLineView',
    name: 'TimeLineView',

    component: () => import('../views/TimeLineView.vue'),
    meta: {
      accessLevel: 'private',
    },
  },
  {
    path: '/WelcomView',
    name: 'WelcomeView',

    component: () => import('../views/WelcomeView.vue'),
    meta: {
      accessLevel: 'private',
    },
  },
  {
    path: '/PetTabView.vue',
    name: 'PetTabView',
    component: () => import('../views/PetTabView.vue'),
    meta: {
      accessLevel: 'private',
    },
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('../views/ErrorView.vue'),
    meta: {
      accessLevel: 'public',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const accessLevel = to.meta.accessLevel
  const activeLogin = store.getters['users/activeLogin']

  if (accessLevel === 'public') {
    next()
  } else if (accessLevel === 'private') {
    if (activeLogin) {
      next()
    } else {
      next('/')
    }
  }
})

export default router

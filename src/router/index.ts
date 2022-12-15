import { child } from 'firebase/database'
import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from 'vuefire'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/rooms',
            component: () => import('../views/Rooms.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
          path: '/rooms/:id',
          component: () => import('../views/Room.vue'),
      }
    ]
})

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return {
        path: '/sign-in',
        query: {
          redirectTo: to.fullPath,
        },
      }
    }
  }
})

export default router
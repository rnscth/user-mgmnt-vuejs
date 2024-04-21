import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '@/views/UsersView.vue'
import GroupsView from '@/views/GroupsView.vue'
import AdminsView from '@/views/AdminsView.vue'
import DisplayUserView from '@/views/DisplayUserView.vue'
import LoginView from '@/views/LoginView.vue'
import { getToken, isAuthenticated } from './auth'
import ApiService from '@/api/service'

const routes = [
    {
      path: '/users',
      name: 'users',
      component: UsersView,
      meta: { requiresAuth: true },
    },
    {
      path: '/displayUser/:userId',
      name: 'DisplayUser',
      component: DisplayUserView,
      meta: { requiresAuth: true },
    },
    {
      path: '/groups',
      name: 'Groups',
      component: GroupsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { requiresAuth: false },
    },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Redirect to login if not authenticated
    if (!isAuthenticated()) {
      next({ name: 'Login' });
    } else { 
      const token = getToken()
      // console.log(token)
      ApiService.setToken(token)
      next();
    }
  } else {
    next();
  }
});


export default router

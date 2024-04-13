import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '@/views/UsersView.vue'
import GroupsView from '@/views/GroupsView.vue'
import AdminsView from '@/views/AdminsView.vue'
import DisplayUserView from '@/views/DisplayUserView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/displayUser',
      name: 'displayUser',
      component: DisplayUserView
    },
    {
      path: '/groups',
      name: 'groups',
      component: GroupsView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminsView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router

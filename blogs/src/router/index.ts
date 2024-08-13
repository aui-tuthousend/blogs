import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Sheet from '../components/sheet.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sheet/:jurusan/:periode',
      name: 'Sheet',
      component: Sheet
    },
  ]
})

export default router

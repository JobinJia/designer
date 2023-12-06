import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: '/designer',
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home/HomeView.vue'),
    },
    {
      path: '/designer',
      name: 'Designer',
      component: () => import('@/views/Designer/DesignerPage.vue'),
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/MainComponent.vue')
    },
    {
      path: '/poject/:slug',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import('../views/NotFound.vue')
  }
  ]
})

export default router

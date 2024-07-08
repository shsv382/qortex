import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/Home.page.vue'),
    },
    {
      path: '/artist/:id',
      name: 'artist',
      component: () => import('./pages/Artist.page.vue'),
      props: true,
    },
    {
      path: '/album/:id',
      name: 'album',
      component: () => import('./pages/Album.page.vue'),
      props: true,
    },
    {
      path: '/song/:id',
      name: 'song',
      component: () => import('./pages/Song.page.vue'),
      props: true,
    },
  ],
})

export default router

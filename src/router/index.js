import NotFound from '@/components/NotFound'

import Top from '@/components/Top'
import AboutUs from '@/components/AboutUs'
// import Search from '@/components/Search'

import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about_us',
      name: 'AboutUs',
      component: AboutUs
    },
    // {
    //   path: '/search',
    //   name: 'Search',
    //   component: Search
    // },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

export default router

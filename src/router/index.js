import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/app-home.vue'
import About from '../components/app-about.vue'
import Skills from '../components/app-skills.vue'
import Work from '../components/app-work.vue'
import Contact from '../components/app-contact.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router

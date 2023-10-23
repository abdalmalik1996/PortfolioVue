import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/HomeView.vue')
const About = () => import('../views/AboutView.vue')
const Skills = () => import('../views/SkillsView.vue')
const Work = () => import('../views/WorkView.vue')
const Contact = () => import('../views/ContactView.vue')

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'skills',
    path: '/skills',
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
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

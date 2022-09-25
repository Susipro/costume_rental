import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeControl from '../views/HomeControl.vue'
import SuitsForEvents from '../views/SuitsForEvents.vue'; 
import Customes from '../views/Customes.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeControl,
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
      path: '/customes',
      name: 'customes',
      component: Customes,
    },
    {
      path: '/suitsforevents',
      name: 'suitsforevents',
      component: SuitsForEvents,
    },
  ]
})

export default router

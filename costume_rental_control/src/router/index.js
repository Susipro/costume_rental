import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HomeControl from '../views/HomeControl.vue'
import SuitsForEvents from '../views/SuitsForEvents.vue'; 
import Costumes from '../views/Costumes.vue'; 
import AdultCostumes from '../views/AdultCostumes.vue';
import KidsCostumes from '../views/KidsCostumes.vue';
import Suits from '../views/Suits.vue';
import Dresses from '../views/Dresses.vue';
import RentForm from '../views/RentForm.vue';
import RentalList from '../views/RentalList.vue';
import RentalListCostumes from '../views/RentalListCostumes.vue';
import RentalListSuitsForEvents from '../views/RentalListSuitsForEvents.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeControl,
        
    },
    // component: () => import('../views/AboutView.vue')
    {
      path: '/costumes',
      name: 'costumes',
      component: Costumes,
    },
    {
      path: '/suitsforevents',
      name: 'suitsforevents',
      component: SuitsForEvents,
    },
    {
      path: '/adultcostumes',
      name: 'adultcostumes',
      component: AdultCostumes,
    },
    {
      path: '/kidscostumes',
      name: 'kidscostumes',
      component: KidsCostumes,
    },
    {
      path: '/suits',
      name: 'suits',
      component: Suits,
    },
    {
      path: '/dresses',
      name: 'dresses',
      component: Dresses,
    },
    {
      path: '/rentform',
      name: 'rentform',
      component: RentForm,
    },
    {
      path: '/rentallist',
      name: 'rentallist',
      component: RentalList,
    },
    {
      path: '/rentallistcostumes',
      name: 'rentallistcostumes',
      component: RentalListCostumes,
    },
    {
      path: '/rentallistsuits',
      name: 'rentallistsuits',
      component: RentalListSuitsForEvents,
    },
  ]
})

export default router


import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue'; 
import LoginPage from '../views/LoginPage.vue'; 
import DashboardPage from '../views/DashboardPage.vue';

const routes = [
  { path: '/home', component: HomePage }, 
  { path: '/login', component: LoginPage }, 
  { path: '/dashboard', component: DashboardPage } 
];

const router = createRouter({
  history: createWebHistory(), 
  routes 
});

export default router;
// Importa funçoes
import { createRouter, createWebHistory } from 'vue-router';

//Importar componentes
import LoginPage from '../views/LoginPage.vue'; 
import DashboardPage from '../views/DashboardPage.vue';


// Define as rotas da aplicação
const routes = [
  { path: '/', component: LoginPage }, 
  { path: '/dashboard', component: DashboardPage } 
];


const router = createRouter({
  history: createWebHistory(), 
  routes 
});

// Exporta o router para ser usado na aplicação
export default router;

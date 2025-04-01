import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; //Rota criada
import 'bootstrap/dist/css/bootstrap.min.css'; //Bootstrap


createApp(App).use(router).mount('#app'); //criar app e usar router


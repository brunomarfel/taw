<template>

  <div id="app">
   
    <MyHeader />
    
    <router-view />

    <MyFooter />

  </div>

</template>


<script>

import MyHeader from './components/MyHeader.vue';  
import MyFooter from './components/MyFooter.vue';  

export default {
  name: 'App',
  components: {
    MyHeader,  
    MyFooter  
  }
};

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: blue;
  font-weight: bold;
}

nav a.router-link-active {
  color: rgb(207, 80, 80);
}

.form-container {
  max-width: 800px;  /* Limita a largura do formulário */
  margin: 0 auto;    /* Centraliza o formulário */
  padding: 40px;     /* Espaçamento interno */
  border: 1px solid #ccc;  /* Borda do formulário */
  border-radius: 8px; /* Bordas arredondadas */
}

form {
  padding: 15px;
}

</style>


<template>

    <header>

      <h2>Projeto Teste</h2>

      <nav>
        <router-link to="/home">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
      </nav>

    </header>

  </template>
  
  <script>
  export default {
    name: 'MyHeader'  
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #4D6376;
    color: #F4F4F4;
    margin-bottom: 50px;
  }
  
  header h2 {
    margin: 0;
  }
  
  header nav {
    display: flex;
  }
  
  header nav a {
    color: #F4F4F4;
    margin-left: 15px;
  }
  
  header nav a:hover {
    color: #131313;
  }
  </style>
  
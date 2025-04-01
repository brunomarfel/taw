<template>
  <div id="app">
    <header>
      <h2>Teste</h2>
      <nav>
        <router-link to="/">Login</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
      </nav>
    </header>

    <!-- Conteúdo da página -->
    <router-view />

    <footer>

      <p>Desenvolvido por Bruno França</p>
      <p>Abril 2025</p>
      
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
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

/* Header */
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

/* Footer */
footer {
  background-color: #4D6376;
  color: #f4f4f4; 
  padding: 20px;  
  margin-top: 50px;
}

.form-container {
  max-width: 800px;  /* Limita a largura do formulário */
  margin: 0 auto;    /* Centraliza o formulário */
  padding: 40px;     /* Espaçamento interno */
  border: 1px solid #ccc;  /* Borda do formulário */
  border-radius: 8px; /* Bordas arredondadas */
}

form {
  padding: 20px;
}





</style>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/hechizos">Hechizos</router-link>|
      <router-link to="/personajes">Personajes</router-link>|
      <router-link to="/libros">Libros</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #0c2425;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #f5f5f5;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ffa928;
}
</style>

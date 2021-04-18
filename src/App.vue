<template>
  <div id="app">
    <div id="nav">
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <router-link to="/">BEER</router-link>
        </b-navbar-brand>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
  background-color: black;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
  text-decoration: none;
}
</style>

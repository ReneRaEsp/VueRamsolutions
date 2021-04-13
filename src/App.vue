<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/portafolio">Portafolio</router-link>
    </div>
    <router-view />-->
    <Index />
  </div>
</template>

<script>
import Index from "./components/layout/Index.vue";
export default {
  components: {
    Index,
  },
};
</script>

<style>
#app {
  padding: 0;
  overflow-x: hidden;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 15px;
  font-family: "Sarabun", Helvetica;
}
</style>

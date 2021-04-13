<template>
  <div class="index">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.index {
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>

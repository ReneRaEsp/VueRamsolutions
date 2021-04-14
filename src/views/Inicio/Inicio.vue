<template>
  <div class="inicio">
    <Seccion1 />
    <Seccion2 />
    <Seccion3 />
  </div>
</template>

<script>
import Seccion1 from "./components/Seccion1.vue";
import Seccion2 from "./components/Seccion2.vue";
import Seccion3 from "./components/Seccion3.vue";
export default {
  components: {
    Seccion1,
    Seccion2,
    Seccion3,
  },
};
</script>

<style>
.inicio {
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>

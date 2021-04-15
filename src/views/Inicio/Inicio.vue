<template>
  <div class="inicio">
    <Seccion1 />
    <Seccion2 />
    <Seccion3 />
    <Seccion4 />
  </div>
</template>

<script>
import Seccion1 from "./components/Seccion1.vue";
import Seccion2 from "./components/Seccion2.vue";
import Seccion3 from "./components/Seccion3.vue";
import Seccion4 from "./components/Seccion4.vue";
export default {
  components: {
    Seccion1,
    Seccion2,
    Seccion3,
    Seccion4,
  },
};
</script>

<style>
.inicio {
  padding: 0;
  margin: 0;
  width: 100%;
}
@media screen and (max-width: 450px) {
  * {
    font-size: 12px;
  }
}
</style>

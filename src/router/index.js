import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Raiz",
    component: () =>
      import(/* webpackChunkName: "Raiz" */ "../views/Inicio/Inicio.vue"),
  },
  {
    path: "/Inicio",
    name: "Inicio",
    component: () =>
      import(/* webpackChunkName: "Inicio" */ "../views/Inicio/Inicio.vue"),
  },
  {
    path: "/portafolio",
    name: "Portafolio",
    component: () =>
      import(
        /* webpackChunkName: "Portafolio" */ "../views/Portafolio/Portafolio.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

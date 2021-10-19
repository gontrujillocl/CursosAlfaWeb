import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);

const routes = [
 
  {
    path: "/",
    name: "Ingresar",
    component: () => import("../views/Ingresar.vue"),
  },
 
  {
    path: "/Inicio",
    name: "Inicio",
    component: () => import("../views/Inicio.vue"),
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: () => import("../views/Cursos.vue"),
    children: [
      {
        path: "/cursos/agregar",
        name: "AgregarCurso",
        component: () => import("../views/AgregarCurso.vue"),

      },
      {
        path: ":id", 
        name: "DetallesCurso", 
        component: () => import("../views/EditarCursos.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

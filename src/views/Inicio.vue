<template>
  <div>
     <div> <img width="100%" src="../assets/vuezfond.jpg"></div> 
    <Nav @toggle-drawer="drawer = !drawer" />
    <Lateral v-model="drawer" />
    <h1 class="text-center my-5">Lista de cursos</h1>
    <br />
    <v-container>
      <v-row>
        <v-col
          v-for="curso in $store.state.cursos.data"
          :key="curso.id"
          cols="12"
          sm="3"
          md="4"
        >
          <MostrarCursos :value="curso" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Lateral from "../components/Lateral.vue";

import Store from "../store";

export default {
  name: "Inicio",
  data: () => ({
    drawer: false,
  }),
  components: {
    Nav,
    Lateral,
    MostrarCursos: () => import("../components/cursos/MostrarCursos.vue"),
  },

  beforeRouteEnter(to, from, next) {
    Store.dispatch("cursos/getAllCursos");
    next();
  },
};
</script>

<style></style>

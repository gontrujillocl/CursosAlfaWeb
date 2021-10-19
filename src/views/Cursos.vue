<template>
  <div>
      <div> <img width="100%" src="../assets/laptopim.jpg"></div> 
    <Nav @toggle-drawer="drawer = !drawer" />
    <Lateral v-model="drawer" />
    
    <v-container>
      <v-layout align-center justify-space-between>
        <v-flex shrink>
          <h1 class="pl-5 my-5">Resumen de Cursos</h1>
            <v-btn class="ml-5 mb-5" color="error" to="/cursos/agregar">Nuevo Curso</v-btn>
        </v-flex>
      
        <br />
      </v-layout>
      <router-view></router-view>
      <Table />
    </v-container>
  </div>
</template>

<script>
import Store from "../store";
import Nav from "../components/Nav.vue"
import Lateral from "../components/Lateral.vue"

import Table from "../components/cursos/Table.vue";

export default {
  data: ()=>({
  drawer: false,
  }),
  components: { Table, Nav, Lateral },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("cursos/getAllCursos");
    next();
  },
};
</script>
<style scoped>

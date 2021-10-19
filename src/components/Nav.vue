<template>
  <div class="mb-5">
    <v-app-bar color="purple" dense dark>
      <v-app-bar-nav-icon @click="$emit('toggle-drawer')"> </v-app-bar-nav-icon>
      <v-toolbar-title>Bienvenidos a los Cursos</v-toolbar-title>
      <v-spacer></v-spacer>

      <Iniciar />
      
    </v-app-bar>
  </div>
</template>

<script>
import Iniciar from "./Sign/Iniciar.vue";


export default {
  components: {
    Iniciar,
  
  },
};
</script>

<style></style>

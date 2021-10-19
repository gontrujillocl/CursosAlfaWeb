<template>
 <div>
  <div class="fond">
    <div><img width="100%" src="../assets/principal.jpg" /></div>
  </div>
 
  <Nav @toggle-drawer="drawer = !drawer" />
    <Lateral v-model="drawer" />
    </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Lateral from "../components/Lateral.vue";
export default {
   name: "Ingresar",
  data: () => ({
    drawer: false,
  }),
  components: {
    Nav,
    Lateral,
    
  },
};
</script>

<style scoped>
.fond {
  background-color: #803e8b;
  color: #fff;
}
</style>

<template>
  <v-app>


  
   <Footer/>
  </v-app>
</template>

<script>


import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
  
  
    Footer,
  },

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    
    
  }),
};
</script>

<template>
   <v-navigation-drawer dark :value="value" @input="$emit('input', $event)" app>
       <v-list>
           <v-list-item v-for="(item, $index) in items" 
           :key="$index"
           link 
           :to="item.to"
           >
               <v-list-item-icon>
                   <v-icon>
                       {{ item.icon }}
                   </v-icon>
               </v-list-item-icon>
               <v-list-item-content>
                   <v-list-item-title> {{ item.title }}</v-list-item-title>
               </v-list-item-content>
           </v-list-item>
       </v-list>
      

    </v-navigation-drawer>
</template>

<script>
export default {
 data: () => ({
     items: [
         {
             title: "Listado de Cursos",
             icon: "mdi-apps",
             to: "Inicio",
         },
         {
             title: "Resumen de Cursos",
             icon: "mdi-star",
             to: "/cursos",
         },
        
     ]
 }),

  props: ["value"],


};
</script>

<style>

</style>
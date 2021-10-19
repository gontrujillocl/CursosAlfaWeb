<template>
  <v-dialog v-model="dialog" width="720">
    <template #activator="{ on }">

       <v-btn text depressed v-on="on">
           Iniciar
      <v-icon>mdi-login</v-icon>
      </v-btn>
    </template>
    <v-card>
        <v-card-title>Inicia sesion con tus datos</v-card-title>
        <v-card-text>
            <FormularioDeUsuario @success="dialog = false" />
        </v-card-text>
    </v-card>
    </v-dialog>
</template>

<script>

export default {
    components: {
        FormularioDeUsuario: () => import("./FormularioDeUsuario.vue"),
    },

    data: () => ({
        dialog: false,
    }),

}
</script>

<style>

</style>
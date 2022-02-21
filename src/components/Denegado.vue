<template>
  <div>
    <v-row justify="center" style="height: 70vh" align="center">
      <v-card elevation="0">
        <v-card-text>
          <h2>Acceso denegado, redireccionando en ...</h2>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "denegado",
  data() {
    return {};
  },
  created() {
    console.log("estoy en Denegado");
    setTimeout(this.redireccionar, 5000);
  },

  methods: {
    redireccionar() {
      console.log("entra en el metedo red");
      this.$router.replace({
        name: "LoginView",
      });
    },
  },
};
</script>

<style>
</style>
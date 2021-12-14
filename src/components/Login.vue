<template>
  <v-container>
    <v-row justify="center" style="height: 90vh" align="center">
      <v-col>
        <v-card class="mx-auto" max-width="500">
          <v-card-title class="justify-center">
            <h3>Bienvenido</h3>
          </v-card-title>
          <v-card-text>
            <form class="pa-2">
              <v-text-field label="Nombre" v-model="nombre"> </v-text-field>
              <v-text-field label="Contraseña" v-model="pass"> </v-text-field>
            </form>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-spacer></v-spacer>
            <v-btn block color="primary" elevation="2" @click="login"
              >Ingresar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      nombre: "",
      pass: "",
    };
  },
  methods: {
    login() {
      if (this.nombre === "Esteban" && this.pass === "1234") {
        this.$store.commit("setAuth", true);
        this.$router.replace({
          name: "HomeView",
        });
      } else {
        console.log("datos incorrectos");
      }
    },
  },
};
</script>

<style></style>

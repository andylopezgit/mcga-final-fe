<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="logueado">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>MCGA 2022 </v-toolbar-title>

      <v-spacer></v-spacer>
    
        <router-link to="home" class="to">Home</router-link>
        <router-link to="about" class="to">Clientes</router-link>
        <router-link to="" class="to"><button @click="logOut">Logout</button></router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    
  }),

  computed: {
    logueado () {
      return this.$store.state.logueado
    }
  },

  methods: {
    logOut() {
      let token_act = localStorage.getItem('token')
      console.log('token es actual es: ', token_act)
      token_act = localStorage.setItem('token', '')
      console.log('token despues del logout: ', token_act)
      this.$router.replace({
        name: "LogOut",
      });
    }
  }
};
</script>

<style>

.to {
  color: white !important;
  margin: 10px;
  text-decoration: none;
}
</style>
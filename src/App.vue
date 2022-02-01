<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>MCGA 2022 </v-toolbar-title>

      <v-spacer></v-spacer>
    
        <router-link to="home" class="to">Home</router-link>
        <router-link to="about" class="to">Clientes</router-link>
        <router-link to="about" class="to">Logout</router-link>
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
    //
  }),
};
</script>

<style>

.to {
  color: white !important;
  margin: 10px;
  text-decoration: none;
}
</style>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Andy App</v-toolbar-title>

      <v-spacer></v-spacer>
        <v-btn
        >
          <router-link to="home">Home</router-link>
        </v-btn>
        <v-btn
        >
          <router-link to="about">Clientes</router-link>
        </v-btn>
       <v-btn
       text
        tile>
          Logout
        </v-btn>
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

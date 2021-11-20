<template>
  <v-container>
    <Home />
    <RouterView />
  </v-container>
</template>

<script>
import Home from "@/components/Home.vue";
//import Clientes from "@/components/Clientes.vue"
//import Retiros from "@/components/Retiros.vue"

export default {
  name: "HomeView",

  components: {
    Home,
  },
};
</script>

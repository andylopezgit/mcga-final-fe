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
              <v-text-field label="Nombre" v-model="usuario.nombre"> </v-text-field>
              <v-text-field label="Contraseña" v-model="usuario.pass"> </v-text-field>
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
import { mapMutations, mapActions } from 'vuex'
export default {
  name: "login",
  data() {
    return {
      usuario: {
        nombre: '',
        pass: ''
      }
    };
  },

  computed: {
    
  },

  methods: {
    ...mapMutations([
      'setUsuario',
      'setUserToken'
    ]),
    ...mapActions([
      'getToken'
    ]),

    setUser () {
      this.$store.commit('setUsuario', this.usuario)
    },

    getToken() {
      this.$store.dispatch('getToken')
    },

    login() {
      this.setUser()
      this.getToken()
      setTimeout(() => {
        this.$router.replace({
          name: "HomeView",
        }, 6000); 
      })
          
      }
    }
};
</script>

<style></style>

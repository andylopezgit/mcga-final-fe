<template>
  <v-container class="container">
    <div class="tabla">
      <h2>Listado de Clientes</h2>
      <table border="1" width="480px" id="table">
        <thead>
          <td>Nombre</td>
          <td>Direccion</td>
          <td>Ciudad</td>
          <td>Funciones</td>
        </thead>
        <tr v-for="cliente in clientes" :key="cliente.descripcion">
          <td>{{ cliente.descripcion }}</td>
          <td>{{ cliente.direccion }}</td>
          <td>{{ cliente.ciudad }}</td>
          <td>
            <tr id="funciones">
              <td class="funcionesCelda">
                <button class="btn" @click="goAgregar()">A</button>
              </td>
              <td class="funcionesCelda"><button class="btn">B</button></td>
              <td class="funcionesCelda"><button class="btn">M</button></td>
            </tr>
          </td>
        </tr>
      </table>
       {{dialog}}
    </div>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="500px"
      transition="dialog-transition"
    >
      <v-card width="600px">
        <abmClientes @escucharHijo="variableHijo"/>
      </v-card>
     
      
    </v-dialog>
  </v-container>
</template>

<script>
import {  mapState } from "vuex";
import abmClientes from './abmClientes.vue'
export default {
  name: "Clientes",
  components: { abmClientes },
  data() {
    return {
      dialog: false,
      cliente: {
        descripcion: "",
        direccion: "",
        ciudadSelec: "",
      },
    
    };

   
  },

 mounted() {
    this.$store.dispatch("getClientes");
    
  },

  computed: {
    ...mapState([
      'clientes'
    ])

  },
  
  methods: {
    goAgregar() {
      this.dialog = true
    },

    variableHijo(data) {
      this.dialog = data
      console.log('viene el dato: ',data)
    }
  },
};

 
</script>

<style>
.container {
  margin: auto;
}

#funciones {
  display: flex;
  flex-direction: row;
}

.funcionesCelda {
  flex-grow: 1;
  padding: 0;
}

.tabla {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
  margin: o auto;
}

#table {
  margin: 0 auto;
  background-color: rgb(204, 229, 250);
}
</style>

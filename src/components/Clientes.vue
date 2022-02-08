<template>
  <v-container class="container">
    <div class="tabla">
      <div>
        <h2 id="subTitle">ABM - Listado de Clientes</h2>
        <button id="btnAdd" @click="goAgregar()">Agregar</button>
      </div>

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
              <!-- <td class="funcionesCelda">
                <button class="btn" @click="goAgregar()">A</button>
              </td> -->
              <td class="funcionesCelda" @click="deleteCliente(cliente._id)">
                <button class="btn">B</button>
              </td>
              <td class="funcionesCelda"><button class="btn" @click="changeCliente(cliente._id)">M</button></td>
            </tr>
          </td>
        </tr>
      </table>
    </div>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="800px"
      transition="dialog-transition"
    >
      <v-card width="800px">
        <abmClientes @escucharHijo="variableHijo" :clienteNombre=cli.descripcion :clienteDireccion=cli.direccion :clienteCiudad=cli.ciudad />
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialSeguro"
      persistent
      max-width="900px"
      transition="dialog-transition"
    >
      <v-card width="600px">
        <h2>Esta seguro que desea eliminar el cliente?</h2>
        <button @click="cerrarDialog">No</button>
        <button @click="eliminarCliente">Si</button>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import abmClientes from "./abmClientes.vue";
export default {
  name: "Clientes",
  components: { abmClientes },
  data() {
    return {
      dialog: false,
      dialSeguro: false,
      cliente: {
        descripcion: "sss",
        direccion: "",
        ciudadSelec: "",
      },
      idCliente: "",
      tochange: '',
      id: '',
      cli: {}
    };
  },

  mounted() {
    this.$store.dispatch("getClientes");
  },

  computed: {
    ...mapState(["clientes"]),
  },

  methods: {
    goAgregar() {
      this.cli = ''
      this.dialog = true;
    },

    cerrarDialog() {
      this.dialSeguro = false;
    },

    eliminarCliente() {
      let id = this.idCliente;
      console.log(id)
      let config = {
        headers: { auth: localStorage.getItem("token") },
      };
      axios
        .delete(
          `https://mcga-rama-middle.herokuapp.com/api/delete-cliente/${id}`,
          config
        )
        .then((response) => {
          console
            .log("Se elimino correctamente: ", response)
        })
        .then(()=> {
          this.$store.dispatch("getClientes");
        })
        .then(() => {
          this.dialSeguro = false
        })
        .catch((error) => console.log(error));
    },

    variableHijo(data) {
      this.dialog = data;
      console.log("viene el dato: ", data);
    },

    deleteCliente(val) {
      this.dialSeguro = true;
      this.idCliente = val;
    },

    changeCliente(id) {
      this.id = id
      this.tochange = this.clientes.forEach(cliente => {
          if (cliente._id === this.id) {
              this.cli = cliente
          }
          
      });
      this.dialog = true;
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

#subTitle {
  display: inline;
}

#btnAdd {
  color: green;
  margin-left: 10px;
}
</style>
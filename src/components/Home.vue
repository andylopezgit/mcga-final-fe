<template>
  <v-container>
    <h1>Pantalla Home</h1>
    <v-card>
      <v-card-title>
        <h2>Listado de Retiros</h2>
        <v-btn class="ml-3 primary" @click="abrirPanelRetiros">Agregar</v-btn>
      </v-card-title>
      <v-card-text>
        <v-simple-table>
          <template>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Retiro</th>
                <th>Estado</th>
                <th>Realizado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in retiros" :key="item.retiro">
                <td>
                  {{ item.cliente }}
                </td>
                <td>
                  {{ item.retiro }}
                </td>
                <td>
                  {{ item.estado }}
                </td>
                <td>
                  <input type="checkbox" name="" id="CambiarEstado" />
                </td>
              </tr>
            </tbody>

            <v-dialog v-model="dialog" width="500">
              <template>
                <v-card
                class="pa-2">
                  <v-card-title> Agregar retiros </v-card-title>
                  <v-card-text>
                    <v-form>
                      <v-row>
                        <v-col cols="12">
                          <v-select
                        v-model="clienteSeleccionado"
                        label="Cliente"
                        required
                        :items="cliente"
                      >
                      </v-select>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                        v-model="descripcion"
                        placeholder="Ej: Retiro de 2 cajas"
                        required
                      >
                      </v-text-field>
                        </v-col>

                      </v-row>
                      
                      
                      <template>
                        <v-row justify="end">
                          <v-col cols="3">
                            <v-btn class="secondary" @click="cerrarDialogo"> Cerrar </v-btn>
                          </v-col>
                          <v-col cols="3">
                            <v-btn class="primary"> Agregar </v-btn>
                          </v-col>
                        </v-row>
                      </template>
                    </v-form>
                  </v-card-text>
                </v-card>
              </template>
            </v-dialog>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    dialog: false,
    clienteSelecccionado: "",
    retiros: [
      {
        cliente: "Mirta Armesto",
        retiro: "Retiro de prueba",
        estado: "Pendiente",
      },
      {
        cliente: "Mirta Armesto",
        retiro: "Retiro de prueba 2",
        estado: "Realizado",
      },
      {
        cliente: "Refans",
        retiro: "Retiro de prueba 3",
        estado: "Pendiente",
      },
      {
        cliente: "Refans",
        retiro: "Retiro de prueba 4",
        estado: "Pendiente",
      },
    ],

    cliente: ["Mirta Armesto", "Rafans", "Allo"],
  }),

  methods: {
    abrirPanelRetiros() {
      this.dialog = true;
    },
    cerrarDialogo () {
    this.dialog = false
  }
  },

  
};
</script>

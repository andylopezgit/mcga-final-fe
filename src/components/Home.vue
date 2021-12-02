<template>
  <v-container>
    <v-card elevation="24">
      <v-card-title>
        <v-row justify="center">
          <span>Bienvenido al Home</span>
          <!-- {{retiros}} -->
        </v-row>
      </v-card-title>
      <v-card-subtitle>
        <v-row justify="center">
          <v-col cols="8">
            <h2>Retiros Pendientes</h2>
            <!-- {{retiros}} -->
          </v-col>
          <v-col cols="2">
            <v-btn class="ml-3 primary" @click="abrirPanelRetiros"
              >Agregar</v-btn
            >
          </v-col>
        </v-row>
      </v-card-subtitle>
      <v-card-text>
        <v-simple-table>
          <template>
            <thead>
              <tr>
                <th>Id</th>
                <th>Cliente</th>
                <th>Retiro</th>
                <th>Estado</th>
                <th>Realizado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in retiros" :key="item.id" v-show="item.estado">
                <td>
                  {{ item._id }}
                </td>
                <td>
                  {{ item.cliente }}
                </td>
                <td>
                  {{ item.descripcion }}
                </td>
                <td>
                  {{ item.estado }}
                </td>
                <td>
                  <v-checkbox
                    v-model="item.estado"
                    @click="funcion"
                  ></v-checkbox>
                </td>
              </tr>
            </tbody>

            <v-dialog v-model="dialog" width="500">
              <template>
                <v-card class="pa-2">
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
                            <v-btn class="secondary" @click="cerrarDialogo">
                              Cerrar
                            </v-btn>
                          </v-col>
                          <v-col cols="3">
                            <v-btn class="primary" @click="agregarRetiro">
                              Agregar
                            </v-btn>
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
    <v-divider></v-divider>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header color="orange accent-3">
          <span class="text-center">Realizados</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card class="mt-2" elevation="10">
            <v-card-text>
              <v-simple-table>
                <template>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Cliente</th>
                      <th>Retiro</th>
                      <th>Estado</th>
                      <th>Realizado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in retiros"
                      :key="item.id"
                      v-show="item.estado === false"
                    >
                      <td>
                        {{ item._id }}
                      </td>
                      <td>
                        {{ item.cliente }}
                      </td>
                      <td>
                        {{ item.descripcion }}
                      </td>
                      <td>
                        {{ item.estado }}
                      </td>
                      <td>
                        <v-checkbox
                          v-model="item.estado"
                          @click="funcion"
                        ></v-checkbox>
                      </td>
                    </tr>
                  </tbody>

                  <v-dialog v-model="dialog" width="500">
                    <template>
                      <v-card class="pa-2">
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
                                  <v-btn
                                    class="secondary"
                                    @click="cerrarDialogo"
                                  >
                                    Cerrar
                                  </v-btn>
                                </v-col>
                                <v-col cols="3">
                                  <v-btn class="primary" @click="agregarRetiro">
                                    Agregar
                                  </v-btn>
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
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <router-view />
  </v-container>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",

  data: () => ({
    dialog: false,
    clienteSeleccionado: "",
    descripcion: "",
    estado: true,
    estadoSelecccionado: false,

    cliente: ["Mirta Armesto", "Rafans", "Allo"],
  }),
  mounted() {
    this.$store.dispatch("getRetiros");
  },

  methods: {
    ...mapMutations(["setEstadoRetiro"]),
    abrirPanelRetiros() {
      this.$router.push({
        name: `retiros-panel`,
      });
      //this.dialog = true;
    },
    cerrarDialogo() {
      this.dialog = false;
    },

    agregarRetiro() {
      this.retiros.push({
        cliente: this.clienteSeleccionado,
        retiro: this.descripcion,
        estado: this.estado,
      });
      this.dialog = false;
    },

    funcion() {
      this.$store.commit("setEstadoRetiro", false);
    },
  },
  computed: {
    ...mapState({
      retiros: (state) => state.retiros,
    }),
  },
};
</script>

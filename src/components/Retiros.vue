<template>
  <v-dialog :value="true" width="600" persistent>
    <v-card>
      <v-card-title> Agregar Retiros </v-card-title>
      <v-card-text>
        <template>
          <v-card class="pa-2">
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

                <!-- <template>
                  <v-row justify="end">
                    <v-col cols="3">
                      <v-btn class="secondary" @click="cerrarDialogo">
                        Cerrar
                      </v-btn>
                    </v-col>
                    <v-col cols="3">
                      <v-btn class="primary" @click="agregarRetiro2">
                        Agregar
                      </v-btn>
                    </v-col>
                  </v-row>
                </template> -->
              </v-form>
            </v-card-text>
          </v-card>
        </template>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="secondary" @click="cerrarPanel">Cerrar</v-btn>
        <v-btn class="primary" @click="agregarRetiroStore">Agregar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "RetirosPanel",
  data() {
    return {
      cliente: ["Mirta Armesto", "Refans", "Allo"],
      clienteSeleccionado: "",
      descripcion: "",
    };
  },

  created() {
    this.$store.dispatch("getDatos");
  },
  methods: {
    ...mapMutations(["agregarRetiro2"]),
    cerrarPanel() {
      this.$router.replace({
        name: "HomeView",
      });
    },

    agregarRetiroStore() {
      this.$store.commit("agregarRetiro2", {
        id: 3,
        cliente: this.clienteSeleccionado,
        retiro: this.descripcion,
        estado: true,
      });
    },
  },

  computed: {},
};
</script>

<style></style>

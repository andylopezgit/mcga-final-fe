<template>
  <v-dialog :value="true" width="480" persistent>
    <v-card>
      <v-card-title> Agregar Retiros (Vuetify) </v-card-title>
      <!-- {{ retiros }} -->
      <v-card-text>
        <template>
          <v-card class="pa-2">
            <v-card-text>
              <v-form>
                <v-row>
                  <v-col cols="12">
                    <v-select
                      v-model="retiro.cliente"
                      label="Clientes"
                      required
                      :items="clientes"
                      item-text="descripcion"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="retiro.descripcion
                      "
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
import { mapMutations, mapState } from "vuex";
export default {
  name: "RetirosPanel",
  data() {
    return {
      cliente: ["Mirta Armesto", "Refans", "Allo"],
      clienteSeleccionado: "",
      descripcion: "",
      retiro: {
        cliente: '',
        descripcion: '',
        estado: true
      }
    };

  },

  mounted() {
    this.$store.dispatch("getRetiros");
    this.$store.dispatch("getClientes")
  },
  methods: {
    ...mapMutations(["agregarRetiro2"]),
    cerrarPanel() {
      this.$store.dispatch("getRetiros");
      this.$router.replace({
        name: "HomeView",
      });
    },
     
     agregarRetiroStore2() {
      new Promise((res) => {
        this.$store.commit('addRetiro', this.retiro)
      this.$store.dispatch('saveretiro')
      res()
      })
      .then(()=> {
        this.$store.dispatch("getRetiros");
      })
      .then(()=>{
        this.$router.replace({
        name: "HomeView",
      });
      })

    },

    agregarRetiroStore() {
      this.$store.commit('addRetiro', this.retiro)
      this.$store.dispatch('saveretiro'),
      // this.$router.replace({
      //   name: "HomeView",
      // });
      this.$store.dispatch("getRetiros");

    },
  },

  computed: {
    ...mapState({
      retiros: (state) => state.retiros,
      clientes: (state) => state.clientes
    }),
  },
};
</script>

<style></style>

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datos: [],
    retiros2: [
      {
        id: 1,
        cliente: "Mirta Armesto",
        retiro: "Retiro de prueba",
        estado: true,
      },
      {
        id: 2,
        cliente: "Mirta Armesto",
        retiro: "Retiro de prueba 2",
        estado: true,
      },
    ],
  },
  mutations: {
    agregarRetiro2(state, payload) {
      state.retiros2.push(payload);
    },

    setDatos(state, payload) {
      state.datos = payload;
    },

    setEstadoRetiro(state, payload) {
      state.retiros2.estado = payload;
    },
  },
  actions: {
    getDatos({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          commit("setDatos", response.data);
        });
    },
  },
  modules: {},
});

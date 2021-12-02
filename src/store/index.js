import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: false,
    retiros: [],
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

    setAuth(state, payload) {
      state.auth = payload
    },
    agregarRetiro2(state, payload) {
      state.retiros2.push(payload);
    },

    setDatos(state, payload) {
      state.datos = payload;
    },

    agregarRetiros(state, payload) {
      state.retiros = payload
    },

    setEstadoRetiro(state, payload) {
      state.retiros2.estado = payload;
    },
  },
  actions: {
    getRetiros({ commit }) {
      axios
        .get("https://mcga-2022-be.herokuapp.com/api/retiros")
        .then((response) => {
          commit("agregarRetiros", response.data);
        });
    },
  },
  modules: {},
});

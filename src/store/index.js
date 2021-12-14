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
      let config = {
        headers: {'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6IkVzdGViYW4iLCJwYXNzIjoiMTIzNCJ9LCJpYXQiOjE2Mzk0ODY3NjJ9.Mxy_36DWeZLN-OX6vyWkhApGi145RRmxa_EzZdbTGDA'},
      }
      axios
        .get("https://mcga-2022-be.herokuapp.com/api/retiros", config)
        .then((response) => {
          commit("agregarRetiros", response.data);
        });
    },
  },
  modules: {},
});

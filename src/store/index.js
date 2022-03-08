import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.config.devtools = true

export default new Vuex.Store({
  state: {
    count: 1,
    usuario: {
      nombre: '',
      pass: '',

    },

    logueado: false,

    idClienteVuex: '',

    cliente: {
      descripcion: '',
      direccion: '',
      ciudad: ''

    },



    retiro: {
      cliente: '',
      descripcion: '',
      estado: '',

    },

    retiroId: Boolean,

    userToken: {
      token: ''
    },

    auth: false,
    retiros: [],
    clientes: []
  },
  mutations: {

    setLogueado(state, payload) {
      state.logueado = payload
    },

    setIdCliente(state, payload) {
      state.idClienteVuex = payload
    },

    increment(state) {
      // mutate state
      state.count++
    },

    setUsuario(state, payload) {
      state.usuario.nombre = payload.nombre
      state.usuario.pass = payload.pass
    },

    setUserToken(state, payload) {
      // state.userToken.token = payload
      localStorage.setItem('token', payload.token)
      state.userToken.token = localStorage.getItem('token') || ''
    },

    // setAuth(state, payload) {
    //   state.auth = payload
    // },


    //Agrego retiro para luego enviarlo a al endpoint

    addRetiro(state, payload) {
      state.retiro.cliente = payload.cliente,
        state.retiro.descripcion = payload.descripcion
      state.retiro.estado = payload.estado
    },

    //cambio estado del retiro

    setRetiroEstado(state, payload) {
      state.retiro.estado = payload
    },

    setDatos(state, payload) {
      state.datos = payload;
    },

    agregarRetiros(state, payload) {
      state.retiros = payload
    },

    setEstadoRetiro(state, payload) {
      state.retiro.estado = payload;
    },

    setClientes(state, payload) {
      state.clientes = payload
    },

    setId(state, payload) {
      state.retiroId = payload
    },

    setCliente(state, payload) {
      state.cliente.descripcion = payload.descripcion
      state.cliente.direccion = payload.direccion
      state.cliente.ciudad = payload.ciudadSelec
      // let config = {
      //   headers: { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6IkVzdGViYW4iLCJwYXNzIjoiMTIzNCJ9LCJpYXQiOjE2NDE5MzYyNjN9.khXDzYAszAP4tJBirlv_DqV5zkCfGnMxwRL4zI_WTl0' }
      // }
      // axios
      //   .post('https://mcga-rama-middle.herokuapp.com/api/save-cliente', state.cliente, { headers: { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6IkVzdGViYW4iLCJwYXNzIjoiMTIzNCJ9LCJpYXQiOjE2NDE5MzYyNjN9.khXDzYAszAP4tJBirlv_DqV5zkCfGnMxwRL4zI_WTl0' } })
      //   .then((response) => {
      //     console.log(response)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    }
  },
  actions: {

    getToken({ state, commit }) {
      return new Promise((resolve, reject) => {
        axios
          .post("https://mcga-rama-middle.herokuapp.com/api/login", state.usuario, { headers: { 'Access-Control-Allow-Origin': '*' } })
          .then((response) => {
            commit("setUserToken", response.data)
            resolve(console.log('Login Exitoso'))
            console.log('llego hasta aca')
            commit("setLogueado", true)
          })
          .catch(() => {
            reject(console.log('Login fallido'))
          })
      })

    },

    //cambio el estado del retiro (true o false)

    updateEstateRetiro({ state }) {
      return new Promise((resolve, reject) => {
        let id = state.retiroId
        let estado = state.retiro
        let config = {
          headers: { 'auth': localStorage.getItem('token') }
        }
        console.log('el id es', id, 'payload', estado)
        axios
          .put(`https://mcga-be-pruebas-2022.herokuapp.com/api/update-retiro/${id}`, estado, config)
          .then(() => {
            resolve()
          }).catch((e) => {
            console.log(e)
            reject()
          })

      })



    },

    getRetiros({ commit }) {
      let config = {
        headers: { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6IkVzdGViYW4iLCJwYXNzIjoiMTIzNCJ9LCJpYXQiOjE2NDE5MzYyNjN9.khXDzYAszAP4tJBirlv_DqV5zkCfGnMxwRL4zI_WTl0' },
      }
      axios
        .get("https://mcga-be-pruebas-2022.herokuapp.com/api/retiros", config)
        .then((response) => {
          commit("agregarRetiros", response.data);
        });
    },

    getClientes({ commit }) {
      let config = {
        headers: { 'auth': localStorage.getItem('token') }
      }
      axios
        .get("https://mcga-rama-middle.herokuapp.com/api/clientes", config)
        .then((response) => {
          commit("setClientes", response.data)
        })
    },

    saveclientes({ state }) {
      return new Promise((resolve, reject) => {
        let config = {
          headers: { 'auth': localStorage.getItem('token') }
        }
        axios
          .post('https://mcga-be-pruebas-2022.herokuapp.com/api/save-cliente', state.cliente, config)
          .then(() => {
            resolve()
          }).catch(() => {
            reject()
          })
      })

    },

    updatecliente({ state }) {
      let id = state.idClienteVuex
      return new Promise((resolve, reject) => {
        // let config = {
        //   headers: { 'auth': localStorage.getItem('token') }
        // }
        axios
          .put(`https://mcga-be-pruebas-2022.herokuapp.com/api/update-cliente/${id}`, state.cliente, { headers: { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6IkVzdGViYW4iLCJwYXNzIjoiMTIzNCJ9LCJpYXQiOjE2NDE5MzYyNjN9.khXDzYAszAP4tJBirlv_DqV5zkCfGnMxwRL4zI_WTl0' } })
          .then(() => {
            resolve()
          }).catch(() => {
            reject()
          })
      })
    },

    saveretiro({ state }) {
      return new Promise((resolve, reject) => {
        axios
          .post('https://mcga-be-pruebas-2022.herokuapp.com/api/save-retiro', state.retiro, { headers: { 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5vbWJyZSI6IkVzdGViYW4iLCJwYXNzIjoiMTIzNCJ9LCJpYXQiOjE2NDE5MzYyNjN9.khXDzYAszAP4tJBirlv_DqV5zkCfGnMxwRL4zI_WTl0' } })
          .then(() => {
            resolve()
          }).catch(() => {
            reject()
          })
      })

    }
  },
  modules: {},
});

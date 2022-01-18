<template>
  <v-container class="container">
    <table border="1" width="480px">
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
            <td class="funcionesCelda"><button class="btn" @click="goAgregar()">A</button></td>
            <td class="funcionesCelda"><button class="btn">B</button></td>
            <td class="funcionesCelda"><button class="btn">M</button></td>
          </tr>
        </td>
      </tr>
    </table>

    <form action="" id="formClientes">
      <h1>ABM Clientes (CSS)</h1>
      <input
        type="text"
        placeholder="Descripcion"
        class="input-text"
        v-model="cliente.descripcion"
      />
      <input
        type="text"
        placeholder="direccion"
        class="input-text"
        v-model="cliente.direccion"
      />

      <div class="selector">
        <img
          src="../assets/maps-icono.svg"
          alt="insertar SVG con la etiqueta image"
          id="icono"
        />
        <label for="selected" class="label">Seleccione ciudad</label>
        <select
          name=""
          id="selected"
          class="input-select"
          v-model="cliente.ciudadSelec"
        >
          <option disabled value="">Desplegar</option>
          <option value="rosario" class="options">Rosario</option>
          <option value="cordoba" class="options">Cordoba</option>
          <option value="capital" class="options">Capital</option>
        </select>
      </div>

      <input
        type="button"
        value="Guardar"
        id="btn-guardar"
        @click="guardarCliente"
      />
    </form>
  </v-container>
</template>

<script>
export default {
  name: "Clientes",
  data() {
    return {
      cliente: {
        descripcion: "",
        direccion: "",
        ciudadSelec: "",
      },
      clientes: [
        {
          descripcion: "Mirta",
          direccion: "mairu 544",
          ciudad: "Capital",
        },
        {
          descripcion: "Refans",
          direccion: "mairu 544",
          ciudad: "Rosario",
        },
      ],
    };
  },

  methods: {
    guardarCliente() {
      console.log(
        this.cliente.descripcion,
        this.cliente.direccion,
        this.cliente.ciudadSelec
      );
      this.$store.commit("setCliente", this.cliente);
    },
    goAgregar() {
    console.log('Agrego clientes')
  }
  },

  
};
</script>

<style>
.container {
  margin: auto;
}

#formClientes {
  display: flex;
  width: 400px;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
  background-color: rgb(204, 229, 250);
  padding: 1rem;
  text-align: center;
}

.input-text {
  height: 40px;
  padding: 1rem;
  margin: 1rem;
  border: solid 1px;
  background-color: white;
}

.input-select {
  height: 40px;
  border: solid 1px;
  margin: 0 1rem;
  background-color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

label {
  margin-top: 8px;
}

.selector {
  display: flex;
}

#selected {
  display: flex;
  flex-grow: 1;
}

#selected-label {
  margin-top: 5px;
}

#btn-guardar {
  display: block;
  background-color: rgb(68, 205, 50);
  margin: 1rem;
  height: 50px;
  cursor: pointer;
}

#icono {
  width: 20px;
  height: 20px;
  margin: 10px;
}

.btn {
  
  cursor: pointer;
  
  display: block;
  width: 100%;
  
}

.btn:hover {
 background-color: rgb(0, 89, 255);
}

.btn:active {
            transform: scale(0.9);
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }

#funciones {
  display: flex;
  flex-direction: row;
}

.funcionesCelda {
  flex-grow: 1;
  padding: 0;
}
</style>

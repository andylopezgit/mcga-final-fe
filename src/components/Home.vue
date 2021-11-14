<template>
 <v-container>
  <h1>Pantalla Home</h1>

  <v-simple-table>
    <template>
      <thead>
        <tr>
          <th>
            Retiro
          </th>
          <th>
            Estado
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in retiros"
          :key="item.retiro"
        >
          <td>
            {{item.retiro}}
          </td>
          <td>
            {{item.estado}}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
 </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    retiros: [
      {
        retiro: 'Retiro de prueba',
        estado: 'Pendiente'
      },
      {
        retiro: 'Retiro de prueba 2',
        estado: 'Realizado'
      },
      {
        retiro: 'Retiro de prueba 3',
        estado: 'Pendiente'
      },
      {
        retiro: 'Retiro de prueba 4',
        estado: 'Pendiente'
      }
    ]
    
  }),
};
</script>

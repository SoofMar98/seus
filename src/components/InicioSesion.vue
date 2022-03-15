<template>
  <div class="q-ma-lg q-pa-lg justify-center">
    <!-- <div class="row">
    <div class="col col-12"></div>
    </div> -->

    <div class="row justify-center">
      <div class="col">
        <q-input
          v-model="correo"
          label="Correo:"
          placeholder="@ues.edu.sv"
          style="max-width: 300px"
        />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <q-input
          v-model="clave"
          label="Clave:"
          type="password"
          style="max-width: 300px"
        />
      </div>
    </div>

    <div class="row">
      <q-btn color="primary" class="q-my-md glossy">INGRESAR</q-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InicioSesion",

  data() {
    return {
      correo: "",
      clave: "",
    };
  },

  props: {},
});
</script>

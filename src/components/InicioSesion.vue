<template>
  <div class="q-mx-lg">
    <!-- <div class="row">
    <div class="col col-12"></div>
    </div> -->

    <div class="row justify-center">
      <q-input
        v-model="correo"
        label="Correo:"
        placeholder="@ues.edu.sv"
        style="width: 300px"
      />
    </div>

    <div class="row justify-center">
      <q-input
        v-model="clave"
        label="Clave:"
        type="password"
        style="width: 300px"
      />
    </div>

    <div class="row justify-center">
      <q-btn rounded color="primary" class="q-my-md glossy text-bold"
        >INGRESAR</q-btn
      >
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

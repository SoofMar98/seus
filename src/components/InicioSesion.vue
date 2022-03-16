<template>
  <div class="q-mx-lg">
    <!-- <div class="row">
    <div class="col col-12"></div>
    </div> -->

    <!-- <div class="row justify-center">
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
    </div> -->

    <div class="row justify-center">
      <q-btn rounded class="q-my-md glossy text-bold">
        <img
          alt="Google logo"
          src="~assets/google.ico"
          style="width: 32px; height: 32px"
        />Continuar con Google</q-btn
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

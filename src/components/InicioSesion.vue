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
      <h1 class="text-left text-bold text-h1" style="font-size: 28px">
        Hola,
        <p
          class="text-left text-grey text-bold text-caption"
          style="font-size: 28px"
        >
          Primero Debes Registrarse
        </p>
      </h1>
    </div>

    <q-separator color="dark" size="5px" inset />
    <div class="row justify-center">
      <h2 class="text-left text-bold text-h1" style="font-size: 28px">
        SEUS
        <p
          class="text-left text-grey text-bold text-caption q-pr-xl"
          style="font-size: 28px"
        >
          Sistema Electoral
          <q-icon name="today" class="q-pl-lg" />
        </p>
      </h2>
    </div>

    <div class="row justify-center">
      <q-btn rounded class="q-my-md glossy text-bold">
        <img
          alt="Google logo"
          src="~assets/google.ico"
          style="width: 32px; height: 32px; padding: 5px"
        />
        Continuar con Google</q-btn
      >
    </div>

    <div class="row justify-center">
      <q-checkbox
        v-model="estadoTerminos"
        label="Acepto Terminos y Condiciones"
        class="text-grey text-bold q-mt-lg q-mb-lg"
      />
    </div>

    <div class="row justify-center">
      <p>
        ¿Ya tienes una cuenta? <a class="text-bold" href="#">Inicia Sesion.</a>
      </p>
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
      estadoTerminos: false,
    };
  },

  props: {},
});
</script>

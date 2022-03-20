<template>
  <div class="q-mx-lg">
    <div class="row justify-center q-mt-lg">
      <p class="text-left text-bold text-h3" style="display: block">Hola,</p>
    </div>
    <div class="row justify-center">
      <p class="text-left text-grey text-bold text-h6" style="display: block">
        Primero Debes Registrarte
      </p>
    </div>

    <q-separator color="dark" size="5px" inset />

    <div class="row justify-center text-left q-mt-lg">
      <p class="text-left text-bold text-h3" style="display: block">SEUS</p>
    </div>
    <div class="row justify-center text-start q-mb-lg">
      <p class="text-left text-grey text-bold text-h6" style="display: block">
        Sistema Electoral <q-icon name="inventory" class="q-pl-lg" />
      </p>
    </div>

    <div class="row justify-center q-my-lg">
      <img
        alt="minerva"
        src="~assets/minerva.png"
        style="width: 56px; height: 56px"
        class=""
      />
      <p class="text-left text-bold text-h8 q-mx-sm">
        Esta App es de uso exclusivo
        <span
          class="text-grey text-caption"
          style="display: block; width: 200px"
        >
          para los estudiantes de la Universidad de El Salvador
        </span>
      </p>
    </div>

    <div class="row justify-center">
      <q-btn
        rounded
        class="q-my-md glossy text-bold"
        @click="$router.replace('/home')"
      >
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
        class="text-grey text-bold text-italic q-mt-lg q-mb-lg"
      />
    </div>

    <div class="row justify-center">
      <p>
        ¿Ya tienes una cuenta?
        <a class="text-bold" href="#/login" target="_blank">Inicia Sesion.</a>
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegistroUsuario",

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

<template>
  <q-page class="">
    <!-- flex flex-center -->
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /> -->

    <inicio-sesion />

    <!-- <div class="row justify-center q-my-md">
      <a href="https://github.com/diseno2022/seus" target="_blank"
        >Sitio web del Proyecto</a
      >
    </div>

    <div class="row justify-center q-my-md">
      <p class="text-center q-mx-md q-my-md">
        Bienvenidos al sistema de elecciones de la Universidad de El Salvador.
      </p>
    </div> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import InicioSesion from "components/InicioSesion.vue";

export default defineComponent({
  name: "PageRegistrarse",
  components: {
    InicioSesion,
  },
});
</script>

<style></style>

<template>
  <q-page class="">
    <!-- flex flex-center -->
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /> -->
    <div class="row q-mb-md bg-info text-white glossy">
      <div class="col col-12">
        <h1 class="text-center text-bold" style="font-size: 64px">
          <q-icon name="group" style="font-size: 64px" />
          INGRESO
        </h1>
      </div>
    </div>

    <inicio-sesion />

    <div class="row justify-center q-my-md">
      <a href="https://github.com/diseno2022/seus">Sitio web del Proyecto</a>
    </div>

    <div class="row justify-center q-my-md">
      <p class="text-center q-mx-md q-my-md">
        Bienvenidos al sistema de elecciones de la Universidad de El Salvador.
      </p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import InicioSesion from "components/InicioSesion.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    InicioSesion,
  },
});
</script>

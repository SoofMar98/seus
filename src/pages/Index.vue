<template>
  <q-page class="">
    <!-- flex flex-center -->
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /> -->
    <div class="row">
      <div class="col col-12 bg-secondary glossy text-white">
        <h1 class="text-center text-bold" style="font-size: 64px">
          <q-icon name="group" style="font-size: 64px" />
          INGRESO
        </h1>
      </div>
    </div>

    <inicio-sesion />
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

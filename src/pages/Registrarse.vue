<template>
  <q-page class="">
    <!-- flex flex-center -->
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /> -->

    <div class="row">
      <div class="col col-12 col-md-6">
        <registro-usuario />
      </div>
      <div class="col col-md-6 bg-info q-mt-sm">
        <h2 class="text-white text-bold">Descubre una nueva forma de Votar</h2>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import RegistroUsuario from "components/RegistroUsuario.vue";

export default defineComponent({
  name: "PageRegistrarse",
  components: {
    RegistroUsuario,
  },
});
</script>

<style></style>

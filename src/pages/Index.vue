<template>
  <q-page class="">
    <!-- flex flex-center -->
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /> -->
  </q-page>
   <q-footer elevated class="bg-white text-white">
      <div class="q-pa-md">
        <div class="q-gutter-y-md">
          <q-tabs narrow-indicator dense align="justify" class="text-primary">
            <q-route-tab icon="home" label="Home" to="/" exact />
            <q-route-tab icon="how_to_vote" label="Votar" to="/votar" exact />
            <q-route-tab
              icon="assessment"
              label="Resultados"
              to="/resultado"
              exact
            />
          </q-tabs>
        </div>
      </div>
    </q-footer>
</template>

<script>
import { defineComponent } from "vue";
//import InicioSesion from "components/InicioSesion.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    //InicioSesion,
  },
});
</script>

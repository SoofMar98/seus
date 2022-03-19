<template>
  <div class="flex flex-center">
    <div class="row">
      <div class="col-12">
        <InterfazElecciones />
      </div>
    </div>
  </div>
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
import InterfazElecciones from "src/components/InterfazElecciones.vue";
export default {
  components: { InterfazElecciones },
  data() {
    return {};
  },
};
</script>

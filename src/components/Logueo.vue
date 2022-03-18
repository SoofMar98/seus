<template>
  <div class="flex flex-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Company & Co</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md" autocomplete="off">
              <q-input
                square
                filled
                clearable
                v-model="email"
                type="email"
                label="email"
              />
              <q-input
                square
                filled
                clearable
                v-model="password"
                type="password"
                label="password"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <Verificacion />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">No estas registrado? Crea una cuenta</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import Verificacion from "src/components/Verificacion.vue";
export default {
  components: { Verificacion },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

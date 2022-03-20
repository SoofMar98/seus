<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-4 flex flex-center">
          <q-img class="rounded-borders image" :src="candidato.Img_url" />
        </q-card-section>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">{{ candidato.partido }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ candidato.nombre }}</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn
          unelevated
          rounded
          class="full-width btn-style"
          @click="persistent = true"
        >
          <q-icon name="how_to_vote" />
          <div>Votar</div>
        </q-btn>
        <q-dialog
          v-model="persistent"
          persistent
          transition-show="jump-up"
          transition-hide="jump-down"
        >
          <q-card class="bg-white text-primary" style="width: 300px">
            <q-card-section>
              <q-card-section class="col-4 flex flex-center">
                <q-img class="rounded-borders image" :src="candidato.Img_url" />
              </q-card-section>
              <q-card-section class="q-pt-xs">
                <div class="text-overline">{{ candidato.partido }}</div>
                <div class="text-h5 q-mt-sm q-mb-xs">
                  {{ candidato.nombre }}
                </div>
                <div class="text-caption text-grey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </q-card-section>
            </q-card-section>

            <q-card-section
              class="q-pt-xs flex flex-center"
              style="font-size: 1.5em; font-weight: 900"
            >
              ¿Estas seguro de tu voto?
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn
                flat
                label="Si, Confirmar"
                v-close-popup
                class="bg-white text-primary"
                style="font-size: 1em; font-weight: 900"
                @click="
                  $router.push({
                    name: 'detalle',
                    params: { nameVotacion: this.nameVotacion },
                  })
                "
              />
              <q-btn
                flat
                label="No, Cancelar"
                v-close-popup
                class="bg-red text-white"
                style="font-size: 1em; font-weight: 900"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persistent: false,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  props: ["candidato", "nameVotacion"],
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
}

.image {
  max-height: 250px;
}
.btn-style {
  border-radius: 14px;
  min-width: 160px;
  width: 80%;
  background-color: rgb(6, 99, 206);
  color: white;
}
</style>

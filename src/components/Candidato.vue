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
        <q-btn unelevated rounded color="primary" class="full-width">
          <q-icon name="how_to_vote" />
          <div>Votar</div>
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  props: ["candidato"],
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
}

.image {
  max-height: 250px;
}
</style>

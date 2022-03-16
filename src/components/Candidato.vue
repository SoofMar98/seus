<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-4 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fpeople-happy-face-man-with-glasses-icon-vector-id650836204%3Fk%3D6%26m%3D650836204%26s%3D170667a%26w%3D0%26h%3DtdnMNumVvPXnjylQpAhcgmusHh6QdqTagUgFrmzYMuo%3D&f=1&nofb=1"
          />
        </q-card-section>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Partido Azul</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Joaquin Villalobos</div>
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
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
}
</style>

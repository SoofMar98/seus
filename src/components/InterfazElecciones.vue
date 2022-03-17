<template>
  <div>
    <div aling="center" class="text-h2 text-grey-14 q-mb-md">
      <p class="titulo">Elecciones Universitarias</p>
    </div>
    <q-card
      v-for="name in name_votaciones"
      :key="(name, index)"
      class="my-card q-mr-md q-ml-md q-mb-lg"
    >
      <q-card-section class="text-grey-10">
        <div align="center" class="text-h6 text-grey-14 q-mb-sm">
          {{ name }}
        </div>
        <div class="text-subtitle2">
          <q-skeleton
            v-for="iteracion in iteraciones"
            :key="(iteracion, index)"
            animation="pulse"
            class="q-mb-sm"
          />
        </div>
      </q-card-section>

      <q-card-actions align="center" class="">
        <q-btn class="text-black">Participar</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name_votaciones: [
        "Elección A",
        "Elección B",
        "Elección C",
        "Elección D",
        "Elección E",
        "Elección F",
        "Elección G",
      ],
      iteraciones: ["Elección A", "Elección B", "Elección C", "Elección D"],
    };
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,700,900,400italic,700italic,900italic);

/* mediaqueries para regular fuente */
@media (min-width: 500px) {
  h1 {
    font-size: 5em;
  }
}

@media (min-width: 900px) {
  h1 {
    font-size: 7em;
  }
}

.titulo {
  display: block;
  margin-right: auto !important;
  margin-left: auto !important;
}
</style>

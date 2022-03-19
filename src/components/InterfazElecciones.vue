<template>
  <div>
    <AlertaVerificacion ref="AlertaVerificacion"></AlertaVerificacion>
    <div aling="center" class="flex flex-center">
      <h1 id="titulo">
        Elecciones <br />
        Universitarias
      </h1>
    </div>

    <q-card
      v-for="item in name_votaciones"
      :key="(item, index)"
      class="my-card q-mb-lg"
    >
      <q-card-section class="text-grey-10">
        <div align="center" class="text-h6 text-grey-14 q-mb-sm">
          {{ item.name }}
        </div>
        <div class="text-subtitle2">
          <q-skeleton
            v-for="iteracion in iteraciones"
            :key="(iteracion, index2)"
            animation="pulse"
            class="q-mb-sm"
          />
        </div>
      </q-card-section>

      <q-card-actions align="center" class="">
        <q-btn
          v-if="item.ya_voto != true"
          push
          @click="showModal(item.validate, item.ya_voto)"
          class="text-white btn-style q-pr-sm"
        >
          PARTICIPAR
        </q-btn>

        <!-- Solo se muestra si ya ha votado -->
        <q-btn
          v-if="item.ya_voto != false"
          push
          @click="
            $router.push({
              name: 'detalle',
              params: { nameVotacion: item.name },
            })
          "
          class="text-white btn-style q-pr-sm"
        >
          DETALLE DE MI VOTO
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import AlertaVerificacion from "./AlertaVerificacion.vue";
export default {
  components: { AlertaVerificacion },
  data() {
    return {
      name_votaciones: [
        { name: "Elección A", ya_voto: true, validate: true },
        { name: "Elección B", ya_voto: false, validate: false },
        { name: "Elección C", ya_voto: false, validate: true },
        { name: "Elección D", ya_voto: false, validate: true },
        { name: "Elección E", ya_voto: false, validate: true },
        { name: "Elección F", ya_voto: false, validate: false },
        { name: "Elección G", ya_voto: false, validate: true },
      ],
      iteraciones: ["Elección A", "Elección B", "Elección C", "Elección D"],
    };
  },
  methods: {
    showModal(validate, voto) {
      if (validate && !voto) {
        this.$router.push("/votacionActiva");
        return;
      }
      this.$refs.AlertaVerificacion.show();
    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,700,900,400italic,700italic,900italic);
@import "../css/titulo.css";

.btn-style {
  border-radius: 14px;
  min-width: 160px;
  width: 160px;
  background-color: #c4c4c4;
}
</style>

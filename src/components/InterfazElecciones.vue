<template>
  <div>
    <AlertaVerificacion ref="AlertaVerificacion"></AlertaVerificacion>
    <div aling="center" class="flex flex-center">
      <h1 id="titulo">Elecciones Universitarias</h1>
    </div>

    <div class="flex flex-center">
      <q-card
        v-for="item in name_votaciones"
        :key="(item, index)"
        class="my-card q-mb-lg card-style"
      >
        <q-card-section class="text-grey-10">
          <div align="center" class="text-h6 text-grey-14 q-mb-sm">
            {{ item.name }}
          </div>
          <div class="text-subtitle2">
            <span v-show="item.start">
              <q-icon name="watch" size="20px" />
              Inicio de la votacion:
              <strong><br />fecha: 10/04/2022 - hora:10:30 am</strong>
            </span>
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
            @click="showModal(item.validate, item.ya_voto, item.name)"
            class="text-white btn-style q-pr-sm"
            v-show="!item.start"
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
  </div>
</template>

<script>
import AlertaVerificacion from "./AlertaVerificacion.vue";
export default {
  components: { AlertaVerificacion },
  data() {
    return {
      name_votaciones: [
        { name: "Elección A", ya_voto: false, validate: true, start: false },
        { name: "Elección B", ya_voto: false, validate: false, start: false },
        { name: "Elección C", ya_voto: true, validate: true, start: false },
        { name: "Elección D", ya_voto: false, validate: true, start: true },
        { name: "Elección E", ya_voto: false, validate: true, start: true },
        { name: "Elección F", ya_voto: false, validate: false, start: true },
        { name: "Elección G", ya_voto: false, validate: true, start: true },
      ],
      iteraciones: ["Elección A", "Elección B", "Elección C", "Elección D"],
    };
  },
  methods: {
    showModal(validate, voto, name) {
      if (validate && !voto) {
        this.$router.push({
          name: "eleccionVoto",
          params: { nameVotacion: name },
        });
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
  width: 80%;
  background-color: rgb(6, 99, 206);
}

.card-style {
  min-width: 380px;
  width: 60%;
}

span {
  margin-left: 5px;
}
strong {
  margin-left: 5px;
}
</style>

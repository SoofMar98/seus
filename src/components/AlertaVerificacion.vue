<template>
  <div>
    <q-dialog v-model="open" persistent>
      <q-card class="my-card">
        <q-img
          src="https://cdn.pixabay.com/photo/2021/01/10/20/03/laptop-5906264_960_720.png"
        />

        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Usuario no verificado</div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">¡Antes de seguir!</div>
          <div class="text-caption text-grey">
            Debes verificar tu cuenta antes de acceder a la elección para votar.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn
            @click="closeModal"
            flat
            color="primary"
            label="Back"
            icon="arrow_left"
          />
          <q-btn
            color="primary"
            label="Verificar"
            icon="login"
            @click="$router.replace('/home')"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "AlertaVerificacion",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    closeModal() {
      console.log("Cerrando modal");
      this.open = false;
    },
    show() {
      this.open = true;
    },
  },
};
</script>

<style></style>

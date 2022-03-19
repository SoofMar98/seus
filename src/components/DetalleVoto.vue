<template>
  <div class="flex flex-center">
    <div class="row hustify-center q-gutter-sm">
      <div class="col-12">
        <div id="container">
          <h1>{{nameVotacion}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nameVotacion: String,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

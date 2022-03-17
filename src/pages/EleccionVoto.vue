<template>
  <div class="flex flex-center">
    <div class="row">
      <div class="col-12">
        <ContainerCandidatos />
      </div>
    </div>
  </div>
</template>

<script>
import ContainerCandidatos from "src/components/ContainerCandidatos.vue";
export default {
  components: { ContainerCandidatos },
  data() {
    return {};
  },
};
</script>

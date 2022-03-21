<template>
  <div class="q-mx-lg">
    <AdministracionPadron />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AdministracionPadron from "components/AdministracionPadron.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    AdministracionPadron,
  },
});
</script>

<style></style>

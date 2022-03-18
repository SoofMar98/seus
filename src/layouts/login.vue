<template>
  <div class="flex flex-center">
    <div class="row">
      <Logueo />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Logueo from "components/Logueo.vue";

export default defineComponent({
  name: "PageLogueo",
  components: {
    Logueo,
  },
});
</script>

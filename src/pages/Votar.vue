<template>
  <div class="flex flex-center">
    <div class="row">
      <div class="col-12">
        <div id="container">
          <h1>Votaciones</h1>
        </div>
        <Candidato />
      </div>
    </div>
  </div>
</template>

<script>
import Candidato from "src/components/Candidato.vue";
export default {
  components: { Candidato },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,700,900,400italic,700italic,900italic);

#container {
  display: flex;
  flex-direction: column;
  float: left;
  justify-content: center;
  padding: 1em;
  width: 100%;
  align-items: center;
}

h1 {
  animation: text-shadow 1.5s ease-in-out;
  font-size: 5em;
  font-weight: 900;
  line-height: 1;
}

h1:hover {
  animation-play-state: paused;
}

a {
  color: #024794;
}

a:hover {
  text-decoration: none;
}

@keyframes text-shadow {
  0% {
    transform: translateY(0);
    text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
  }

  20% {
    transform: translateY(-1em);
    text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b,
      0 -0.25em 0 #fefc4b;
  }

  40% {
    transform: translateY(0.5em);
    text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
      0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
  }

  60% {
    transform: translateY(-0.25em);
    text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd,
      0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
  }

  80% {
    transform: translateY(0);
    text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
</style>

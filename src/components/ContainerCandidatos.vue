<template>
  <div class="flex flex-center">
    <q-page>
      <div class="row justify-center q-gutter-sm">
        <div class="col-12">
          <div id="container">
            <h1>Candidatos</h1>
          </div>
          <q-intersection transition="scale" class="example-item">
            <Candidato
              v-for="candidato in listado"
              :key="(candidato, index)"
              :candidato="candidato"
            />
          </q-intersection>
        </div>
      </div>
      <q-page-sticky position="top-left" :offset="[18, 18]">
        <q-btn
          push
          round
          color="primary"
          icon="arrow_back_ios_new"
          @click="$router.replace('/Votar')"
        />
      </q-page-sticky>
    </q-page>
  </div>
</template>

<script>
import Candidato from "src/components/Candidato.vue";
export default {
  components: { Candidato },
  data() {
    return {
      listado: [
        {
          nombre: "Joaquin Villalobos",
          partido: "Partido Azul",
          Img_url:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fpeople-happy-face-man-with-glasses-icon-vector-id650836204%3Fk%3D6%26m%3D650836204%26s%3D170667a%26w%3D0%26h%3DtdnMNumVvPXnjylQpAhcgmusHh6QdqTagUgFrmzYMuo%3D&f=1&nofb=1",
        },
        {
          nombre: "Cristian Montes",
          partido: "Partido Rojo",
          Img_url:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F6c%2F50%2Ffe%2F6c50fedcbd921cb0990e1abdc9c971d7.jpg&f=1&nofb=1",
        },
        {
          nombre: "Josseline Vasquez",
          partido: "Partido Verde",
          Img_url:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wikihow.com%2Fimages%2F3%2F35%2FDraw-Realistic-People-Step-21-Version-2.jpg&f=1&nofb=1",
        },
        {
          nombre: "Jonathan Gomez",
          partido: "Partido Amarillo",
          Img_url:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fpeople-happy-face-man-with-glasses-icon-vector-id650836204%3Fk%3D6%26m%3D650836204%26s%3D170667a%26w%3D0%26h%3DtdnMNumVvPXnjylQpAhcgmusHh6QdqTagUgFrmzYMuo%3D&f=1&nofb=1",
        },
        {
          nombre: "Abigail Ruano",
          partido: "Partido Morado",
          Img_url:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wikihow.com%2Fimages%2F3%2F35%2FDraw-Realistic-People-Step-21-Version-2.jpg&f=1&nofb=1",
        },
      ],
    };
  },
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
  font-size: 3.8em;
  font-weight: 900;
  line-height: 1;
}

h1:hover {
  animation-play-state: paused;
}

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

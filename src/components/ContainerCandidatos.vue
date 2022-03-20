<template>
  <div class="flex flex-center">
    <q-page>
      <div class="row justify-center q-gutter-sm">
        <div class="col-12">
          <div id="container">
            <h1 id="titulo">Candidatos</h1>
            <div class="text-overline" style="font-size: 1.3em">
              {{ nameVotacion }}
            </div>
          </div>
          <q-intersection transition="scale" class="example-item">
            <Candidato
              :nameVotacion="nameVotacion"
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
          @click="$router.replace('/home/Votar')"
        />
      </q-page-sticky>
    </q-page>
  </div>
</template>

<script>
import Candidato from "src/components/Candidato.vue";
export default {
  components: { Candidato },
  props: {
    nameVotacion: String,
  },
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
a {
  color: #024794;
}

a:hover {
  text-decoration: none;
}
</style>

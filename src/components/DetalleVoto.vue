<template>
  <div class="col-12">
    <div class="flex flex-center">
      <h1 id="titulo">
        {{ nameVotacion }}<br />
        Detalles de tu <br />
        voto
      </h1>
    </div>

    <div class="bg-grey-12 contenedor">
      <div class="row">
        <div class="col-4 q-mr-lg">
          <q-skeleton type="QAvatar" size="100px" class="q-mt-md q-ml-lg" />
        </div>
        <div class="col q-mt-md q-mr-sm">
          <q-skeleton
            v-for="iteracion in iteraciones"
            :key="(iteracion, index2)"
            animation="pulse"
            class="q-mb-sm"
          />
        </div>
      </div>

      <!-- DIA -->
      <div class="row q-mt-xl">
        <div class="col-4 q-ml-md sub-titulos">DIA:</div>
        <div class="col q-ml-sm">
          {{datos.dia}}
        </div>
      </div>

      <!-- HORA -->
      <div class="row q-mt-lg">
        <div class="col-4 q-ml-md sub-titulos">HORA:</div>
        <div class="col q-ml-sm">
           {{datos.hora}}
        </div>
      </div>

      <!-- GPS -->
      <div class="row q-mt-lg">
        <div class="col-4 q-ml-md sub-titulos">GPS:</div>
        <div class="col q-ml-sm">
           {{datos.gps}}
        </div>
      </div>

      <!-- HASH -->
      <div class="row q-mt-lg">
        <div class="col-4 q-ml-md sub-titulos">HASH:</div>
        <div class="col q-ml-sm">
           {{datos.hash}}
        </div>
      </div>

      <!-- DISPOSITIVO -->
      <div class="row q-mt-lg">
        <div class="col-4 q-ml-md sub-titulos">DISPOSITIVO:</div>
        <div class="col q-ml-sm">
          {{datos.dispositivo}}
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
    return {
      iteraciones: ["Elección A", "Elección B", "Elección C", "Elección D"],
      datos: {
        dia: null,
        hora: null,
        gps: null,
        hash: null,
        dispositivo: null,
      },
    };
  },
  mounted() {
    let date = new Date()
    let dia = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();

    let hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    let gps = "Santa Ana, Santa Ana"
    let hash = "cdc5de3302a3c80fe6f0e4ce596"
    let dispositivo = "Poco X4 pro"

    this.datos.dia = dia 
    this.datos.hora = hora
    this.datos.gps = gps
    this.datos.hash = hash  
    this.datos.dispositivo = dispositivo 

  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,700,900,400italic,700italic,900italic);
@import "../css/titulo.css";

.contenedor {
  min-width: 380px;
  width: 380px;
  min-height: 55vh;
}

.sub-titulos {
  font-weight: bold;
  font-size: 1rem;
}
</style>
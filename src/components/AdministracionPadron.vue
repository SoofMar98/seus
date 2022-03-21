<template>
  <div>
    <div class="container">
      <div class="text-h2">Pádron</div>
      <div class="row">
        <div class="col-sm-12">
          <div class="row justify-end items-center">
            <div class="text-subtitle-1 q-mx-sm">Buscar:</div>
            <q-input outlined v-model="search" :dense="dense">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="row justify-between q-mt-md">
            <div class="row items-center">
              <q-btn label="Excel" />
              <q-btn label="CSV" class="q-mx-sm" />
              <q-btn c label="PDF" />
            </div>
            <div class="row">
              <q-btn label="Cargar registro" />
              <q-btn label="Agregar nuevo registro" class="q-ml-sm" />
            </div>
          </div>
        </div>
        <div class="col-sm-12 q-mt-md">
          <div class="q-pa-md-sm-ml">
            <q-table :rows="rows" :columns="columns" row-key="name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdministracionPadron",

  data() {
    return {
      search: "Gorgito",
      columns,
      rows,
    };
  },

  props: {},
});
const columns = [
  {
    name: "nombre",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) => row.nombre,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "carnet",
    label: "Carnet",
    field: "carnet",
    sortable: true,
    align: "left",
  },
  {
    name: "carrera",
    label: "Carrera",
    field: "carrera",
    sortable: true,
    align: "left",
  },
  { name: "dui", label: "DUI", field: "dui", align: "left" },
  { name: "direccion", label: "Direccion", field: "direccion", align: "left" },
  { name: "opciones", label: "Opciones", field: "opciones", align: "left" },
];

const rows = [
  {
    nombre: "George Linares",
    carnet: "LL20006",
    carrera: "Derecho",
    dui: "12345678-9",
    direccion: "Lomas turbas",
    opciones: "Botones",
  },
];
</script>
<!---ml-sm-->

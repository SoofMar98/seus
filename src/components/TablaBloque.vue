<template>
  <div>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 500px">
        <q-input
          color="blue-12"
          v-model="text"
          label="Buscar una transaccion o un bloque"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="q-pa-md">
      <h4>Bloque: xyz</h4>
      <q-table
        title="Transacciones del Bloque"
        :rows="rows"
        :columns="columns"
        row-key="correlativo"
      />
    </div>
  </div>
</template>
<script>
const columns = [
  {
    name: "correlativo",
    align: "left",
    label: "correlativo",
    field: "correlativo",
    sortable: true,
  },
  {
    name: "hash",
    align: "left",
    label: "hash",
    field: "hash",
    sortable: true,
  },
  {
    name: "fecha",
    align: "left",
    label: "fecha de realización",
    field: "fecha",
    sortable: true,
  },
];

const rows = [
  {
    correlativo: 1,
    hash: "4c4d087352a954e2c819045da568664f4762b1eeadb78f17c4f53c11e6dca929",
    fecha: "2022-03-19 15:50",
  },
  {
    correlativo: 2,
    hash: "108a9b43468a9aee3ddbc23aad5921af212c4bacc2ab03d80a3a8d823f770035",
    fecha: "2022-03-19 15:50",
  },
  {
    correlativo: 3,
    hash: "a2a8f88f663d03af29081f3ecb2d32f679e96286521f785796ee4dd68e5f3fbb",
    fecha: "2022-03-19 15:50",
  },
  {
    correlativo: 4,
    hash: "f28514b64bf6e2e40887d54920e1fa2b954e4366079d01b9011d717cff40a87c",
    fecha: "2022-03-19 15:50",
  },
  {
    correlativo: 5,
    hash: "f0e5a65776d197146ae226d45c18129270b858f82c98d54ca956e1c221a1213e",
    fecha: "2022-03-19 15:50",
  },
  {
    correlativo: 6,
    hash: "e0036db91b88dc0617b42a8e960858bcbfbed3d8a11def10748d8522d9e673c7",
    fecha: "2022-03-19 15:50",
  },
  {
    correlativo: 7,
    hash: "bb8bfe732fc5e8318839d9feef3b487434e817a96584d0accc954102e0c904d3",
    fecha: "2022-03-19 15:50",
  },
  {
    correlativo: 8,
    hash: "8757d92093a69904967c5fb2d5a067cd3be387117ced4e9aa4a2a4ab4dda8d7b",
    fecha: "2022-03-19 15:50",
  },
  {
    correlativo: 9,
    hash: "3e0dd40e8a403782a40dcf0fcafc9a33bc95f17bc2bb528c66bdc912f30034ef",
    fecha: "2022-03-19 15:50",
  },
  {
    correlativo: 10,
    hash: "e8a70bd982a3ca0d3b873a9f88141a0ecaf0593236c659eb7ae08110aee41c75",
    fecha: "2022-03-19 15:50",
  },
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>

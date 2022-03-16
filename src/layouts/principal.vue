<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn unelevated rounded color="primary" label="Votacion" href="#" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-white text-white">
      <div class="q-pa-md">
        <div class="q-gutter-y-md">
          <q-tabs narrow-indicator dense align="justify" class="text-primary">
            <q-route-tab icon="home" label="Home" to="/" exact />
            <q-route-tab icon="how_to_vote" label="Votar" to="/votar" exact />
            <q-route-tab
              icon="assessment"
              label="Resultados"
              to="/resultado"
              exact
            />
          </q-tabs>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Registrarse",

    icon: "school",
    link: "#/registrarse",
  },
  {
    title: "Acerca de",

    icon: "code",
    link: "#/acerca",
  },
  {
    title: "Como votar?",

    icon: "chat",
    link: "#/comovotar",
  },
  {
    title: "Contacto",

    icon: "record_voice_over",
    link: "#/contacto",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

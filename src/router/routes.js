const routes = [
  {
    path: "/home",
    component: () => import("layouts/principal.vue"),
    children: [
      {
        path: "/home/comovotar",
        component: () => import("pages/ComoVotar.vue"),
      },
      { path: "/home/contacto", component: () => import("pages/Contacto.vue") },
      { path: "/home/acerca", component: () => import("pages/Acerca.vue") },
      {
        path: "/home/resultado",
        component: () => import("pages/Resultado.vue"),
      },
      { path: "/home/votar", component: () => import("pages/Votar.vue") },
      {
        path: "/home/votacionActiva",
        component: () => import("pages/EleccionVoto.vue"),
      },
      {
        path: "/home/detalleMiVoto",
        name: "detalle",
        component: () => import("src/pages/DetalleMiVoto.vue"),
      },
    ],
  },
  {
    path: "/desktop",
    component: () => import("layouts/desktop.vue"),
    children: [
      { path: "/desktop/admin", component: () => import("pages/admin.vue") },
      { path: "/desktop/padron", component: () => import("pages/padron.vue") },
    ],
  },
  {
    path: "/blockchain",
    component: () => import("layouts/blockchain.vue"),
    children: [
      { path: "", component: () => import("layouts/blockchain.vue") },
      {
        path: "/blockchain/blocks",
        component: () => import("pages/blocks.vue"),
      },
      { path: "/blockchain/block", component: () => import("pages/hash.vue") },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/login.vue"),
    children: [
      { path: "", component: () => import("pages/Registrarse.vue") },
      { path: "/login", component: () => import("pages/Index.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it.

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;

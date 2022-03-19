const routes = [
  {
    path: "/",
    component: () => import("layouts/principal.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "registrarse", component: () => import("pages/Registrarse.vue") },
      { path: "comovotar", component: () => import("pages/ComoVotar.vue") },
      { path: "contacto", component: () => import("pages/Contacto.vue") },
      { path: "acerca", component: () => import("pages/Acerca.vue") },
      { path: "resultado", component: () => import("pages/Resultado.vue") },
      { path: "votar", component: () => import("pages/Votar.vue") },
      {
        path: "votacionActiva",
        component: () => import("pages/EleccionVoto.vue"),
      },
      {
        path: "detalleMiVoto", 
        name: "detalle",
        component: () => import("src/pages/DetalleMiVoto.vue"),
      },
    ],
  },
  {
    path: "/desktop",
    component: () => import("layouts/desktop.vue"),
    children: [
      { path: "admin", component: () => import("pages/admin.vue") },
      { path: "padron", component: () => import("pages/padron.vue") },
    ],
  },
  {
    path: "/blockchain",
    component: () => import("layouts/blockchain.vue"),
    children: [
      { path: "", component: () => import("layouts/blockchain.vue") },
      { path: "blocks", component: () => import("pages/blocks.vue") },
      { path: "block", component: () => import("pages/hash.vue") },
    ],
  },

  { path: "/login", component: () => import("layouts/login.vue") },
  // Always leave this as last one,
  // but you can also remove it.

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;

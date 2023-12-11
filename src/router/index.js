import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/client",
    },
    {
      path: "/client",
      name: "client",
      component: () => import("@/views/Client.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/views/Admin.vue"),
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Dashboard from "@/pages/dashboard/Index.vue";
import Product from "@/pages/produk/Index.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: DashboardLayout,

      children: [
        {
          path: "",
          name: "dashboard",
          component: Dashboard,
        },
        {
          path: "produk",
          name: "produk",
          component: Product,
        },
      ],
    },
  ],
});

export default router;

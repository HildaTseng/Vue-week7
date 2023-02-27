import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/admin",
      name: "admin",     
      component: () => import("../views/Dashboard.vue"),
      children : [
        {
          path: "products",
          name: "products",
          component: () => import("../views/ProductsView.vue"),
        },
        {
          path: "orders",
          name: "orders",
          component: () => import("../views/Orders.vue"),
        },
        {
          path: "coupons",
          name: "coupons",
          component: () => import("../views/Coupons.vue"),
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: "/admin"
    },
  ],
});

export default router;

import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontView.vue"),
      children: [
        {
          path: "homeview",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "list",
          component: () => import("../views/ListView.vue"),
        },
        {
          path: "contact",
          component: () => import("../views/ContactView.vue"),
        },
        {
          path: "detail",
          component: () => import("../views/DetailView.vue"),
        },
      ],
    },
  ]
});

export default router;

import { createRouter, createWebHistory } from "vue-router";





const routes = [
  {
    path: "/",
    name: "addcity",

    component: () => import("../components/addcity.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

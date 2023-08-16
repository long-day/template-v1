import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const history = createWebHistory()

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Hello",
    component: () => import("../components/HelloWorld.vue"),
  },
];

const router = createRouter({
      history,
      routes
})

export default router
import Vue from "vue";
import VueRouter from "vue-router";
import MyCv from "./components/MyCv.vue";
import PlayableCv from "./components/PlayableCv.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "default",
    component: MyCv,
  },
  {
    path: "/cv1",
    name: "playable",
    component: PlayableCv,
  },
  // Редирект на главную страницу, если маршрут не найден
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

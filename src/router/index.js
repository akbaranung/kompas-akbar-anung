import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Loker from "../views/Loker.vue";
import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/loker",
    name: "Loker",
    component: Loker,
  },
  {
    path: "/loker/detail/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

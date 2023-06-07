import { createRouter, createWebHistory } from "vue-router";

import StartPage from "./views/StartPage.vue";
import HomePage from "./views/HomePage.vue";

const routes = [
  {
    path: "/",
    component: StartPage,
    name: "start-page",
  },
  {
    path: "/home",
    component: HomePage,
    name: "home-page",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

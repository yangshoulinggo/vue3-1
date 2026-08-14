import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import HomeView from "../views/HomeView.vue";
import ProductTableView from "../views/ProductTableView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainView,
    children: [
      {
        path: "/home",
        component: HomeView,
      },
      {
        path: "/product",
        component: ProductTableView,
      },
      {
        path: "/about",
        component: AboutView,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
import RetirosPanel from "../components/Retiros.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
    children: [
      {
        path: "/retiros-panel",
        name: "retiros-panel",
        component: RetirosPanel,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "LoginView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

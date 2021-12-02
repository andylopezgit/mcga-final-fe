import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
import RetirosPanel from "../components/Retiros.vue";
import store from "../store";
import Denegado from "../components/Denegado.vue"

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    redirect: { name: 'LoginView' }

  },

  {
    path:"/denegado",
    name: "denegado",
    component: Denegado
  },



  {
    path: "/home",
    name: "HomeView",
    meta: {
      requiresAuth: true
    },
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth) {
      next();
    } else {
      next({ name: "denegado" })
    }
  } else {
    next();
  }
})



export default router;

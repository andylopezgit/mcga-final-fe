import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
import RetirosPanel from "../components/Retiros.vue";
import Denegado from "../components/Denegado.vue"
import store from "../store";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    redirect: { name: 'LoginView' }

  },

  {
    path: "/denegado",
    name: "denegado",
    component: Denegado
  },



  {
    path: "/home",
    name: "HomeView",
    component: Home,
    meta: { requireAuth: true },

    children: [
      {
        path: "/retiros-panel",
        name: "retiros-panel",
        component: RetirosPanel,
        meta: { requireAuth: true }
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    meta: { requireAuth: true },
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

  {
    path: "/logout",
    name: "LogOut",
    component: () => import("@/components/LogoutPage")
  }
];





const router = new VueRouter({
  routes,

});

router.beforeEach(async (to, from, next) => {
  console.log(store.state.userToken.token)
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.state.userToken.token != "") {
      console.log('Acceso permitido')
      next();
    } else {
      console.log('Acceso denegado')
      next({ name: "denegado" });
    }
  } else {
    console.log('no tiene un token')
    next();
  }
});


export default router;

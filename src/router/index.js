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
    meta: { requireAuth: true },
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
    meta: { requireAuth: true},
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

router.beforeEach(async(to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.state.userToken.token) {
      console.log('aca')
      next();
    } else {
      console.log('aqui')
      next({ name: "denegado" });
    }
  } else {
    console.log('alla')
    next();
  }
});


export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import AccountRecovery from '../views/AccountRecovery.vue';
import Dashboard from "../views/Dashboard.vue";
import MovieList from "../views/MovieList.vue";
import Profiles from '../views/Profiles.vue';

Vue.use(VueRouter);

const routes = [

  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/recovery",
    name: "AccountRecovery",
    component: AccountRecovery
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/list",
    name: "MovieList",
    component: MovieList
  },
  {
    path: "/profiles",
    name: "Profiles",
    component: Profiles
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

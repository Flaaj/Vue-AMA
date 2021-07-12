import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import MyWall from "../views/MyWall.vue";
import Users from "../views/Users.vue";
import NewAccount from "../views/NewAccount.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/my-wall",
    name: "My wall",
    component: MyWall,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/new-account",
    name: "New account",
    component: NewAccount,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

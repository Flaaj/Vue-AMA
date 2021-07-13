import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Users from "../views/Users.vue";
import NewAccount from "../views/NewAccount.vue"
import Account from "../views/Account.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Questions",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/users/:id",
    name: "Another User",
    component: Home,
  },
  {
    path: "/new-account",
    name: "New account",
    component: NewAccount,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },


];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

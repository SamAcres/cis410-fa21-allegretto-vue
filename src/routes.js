import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Drivers from "./components/Drivers.vue";
import NotFound from "./components/NotFound.vue";
import ReviewDriver from "./components/ReviewDriver.vue";
import RideInfo from "./components/RideInfo.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import myStore from "./store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/account",
      component: Account,
      beforeEnter(to, from, next) {
        if (myStore.state.token) {
          next();
        } else {
          next("/login");
        }
      },
    },
    { path: "/login", component: Login },
    { path: "/drivers", component: Drivers },
    {
      path: "/drivers/:pk",
      component: RideInfo,
      children: [{ path: "review", component: ReviewDriver }],
    },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;

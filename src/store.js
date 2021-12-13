import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

export default createStore({
  state: {
    token: null,
    user: null,
    drivers: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },

    storeUserInApp(state, theUser) {
      state.user = theUser;
    },

    storeDrivers(state, drivers) {
      state.drivers = drivers;
    },
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },
  actions: {
    getDrivers({ commit }) {
      axios.get("/drivers").then((aResponse) => {
        console.log("response in /drivers", aResponse);
        commit("storeDrivers", aResponse.data);
      });
    },
    logout({ commit, state }) {
      axios
        .post("/customer/logout", null, {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
  },
});

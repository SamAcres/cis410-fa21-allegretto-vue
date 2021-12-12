import { createStore } from "vuex";
import axios from "axios";

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
  },
  actions: {
    getDrivers({ commit }) {
      axios.get("/drivers").then((aResponse) => {
        console.log("response in /drivers", aResponse);
        commit("storeDrivers", aResponse.data);
      });
    },
  },
});

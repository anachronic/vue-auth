import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import BadLoginError from "@/errors/BadLoginError";

Vue.use(Vuex);

const state = {
  loggedIn: false
};

const mutations = {
  logUserIn(state) {
    state.loggedIn = true;
  },
  destroySession(state) {
    state.loggedIn = false;
  }
};

const actions = {
  // credentials should be { username, password }
  authenticateUser: async ({ commit }, credentials) => {
    let response = await axios.get("insert login url here", credentials);

    if (response.status === 200) {
      commit("logUserIn");
    }

    throw new BadLoginError();
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});

export { state, mutations, actions };

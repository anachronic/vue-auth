import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import BadLoginError from "@/errors/BadLoginError";
import router from "@/router";

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
    let response = await axios.post(
      "http://localhost:9000/sessions/",
      credentials,
      { withCredentials: true }
    );

    if (response.status === 200) {
      commit("logUserIn");
    }

    console.log(response);

    throw new BadLoginError();
  },
  logoutUser: async ({ commit }) => {
    let response = await axios.delete(
      "http://localhost:9000/sessions/",
      {},
      { withCredentials: true }
    );

    if (response.status === 204) {
      commit("destroySession");
      router.push("/");
    }
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});

export { state, mutations, actions };

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/items">items</router-link> |
      <span>
        <span v-if="userLoggedIn">You <b>are indeed</b> logged in</span>

        <!-- prettier-ignore -->
        <span v-else>You're <b>Not logged in</b></span

        >&nbsp;

        <router-link to="/login" v-if="!userLoggedIn">log in</router-link>
        <button @click="logoutUser" v-else>log out</button>
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NotLoggedInError from "@/errors/NotLoggedInError";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({ userLoggedIn: "loggedIn" })
  },
  methods: {
    ...mapActions(["logoutUser"])
  },
  errorCaptured(err) {
    if (err instanceof NotLoggedInError) {
      this.$router.replace("/");
      return false;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

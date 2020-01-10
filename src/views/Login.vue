<template>
  <div>
    <div v-for="(err, index) in formErrors" :key="index">
      {{ err }}
    </div>
    <input type="text" v-model="credentials.username" />
    <input type="text" v-model="credentials.password" />
    <button type="button" @click="checkLogin">login</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import BadLoginError from "@/errors/BadLoginError";

export default {
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      },
      formErrors: []
    };
  },
  methods: {
    ...mapActions["authenticateUser"],
    checkLogin() {
      try {
        this.authenticateUser(this.credentials);
        this.formErrors = [];
      } catch (err) {
        this.formErrors = ["invalid credentials"];
      }
    }
  }
};
</script>

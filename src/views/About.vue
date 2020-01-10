<template>
  <div class="about">
    <h1>This is an about page that needs auth</h1>
    {{ loggedIn }}
  </div>
</template>

<script>
import { mapState } from "vuex";
import authMixin from "@/mixins/auth-required-mixin";

export default {
  name: "About",
  mixins: [authMixin],
  computed: {
    ...mapState(["loggedIn"])
  },
  mounted() {
    console.log("do something else");
  }
};
</script>

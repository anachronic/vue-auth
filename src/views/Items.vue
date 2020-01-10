<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import NotLoggedInError from "@/errors/NotLoggedInError";

export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:9000/other/", { withCredentials: true })
      .then(response => (this.items = response.data))
      .catch(() => {
        throw new NotLoggedInError();
      });
  }
};
</script>

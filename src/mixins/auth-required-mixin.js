import NotLoggedInError from "@/errors/NotLoggedInError";

export default {
  mounted() {
    throw new NotLoggedInError("you're not logged in");
  }
};

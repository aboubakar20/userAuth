<template>
  <div>
    <h1>User Profile</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from "firebase";
import Vue from "vue";

export default {
  name: "profile",
  components: {},
  methods: {
    async logout() {
      try {
        await firebase.auth().signOut();
        this.$router.replace("login");
      } catch (error) {
        Vue.toasted.show(error.message).goAway(3000);
      }
    },
  },
};
</script>

<style scoped></style>

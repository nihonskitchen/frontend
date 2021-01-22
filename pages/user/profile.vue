<template>
  <div class="info-card">
    <div>
      <h1>User Profile</h1>
    </div>
    <div>
      <label for="user-email">Email address: (Non-changeable)</label>
      <input id="user-email" type="text" :value="this.account.email" readonly>
    </div>
    <div>
      <label for="" >Reset Password:</label>
      <input id="current-password" type="text" placeholder="Current password">
      <input id="new-password" type="text" placeholder="Enter new password">
      <input id="confirm-new-password" type="text" placeholder="Confirm new password">
    </div>
    <div>
      <button class="submit-btn margins">Submit changes</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  mounted() {
    this.getUserData();
  },
  data() {
    return {
      account: "",
    };
  },
  methods: {
    getUserData() {
      this.account = this.$store.state.users.user;
      console.log(this.account);
    },
  },
};
</script>

<style>
</style>
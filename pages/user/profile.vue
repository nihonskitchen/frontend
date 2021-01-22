<template>
  <div class="info-card">
    <form action="submit" method="POST" @submit.prevent>
      <div>
        <h1>User Profile</h1>
      </div>
      <div>
        <label for="user-email">Email address: (Non-changeable)</label>
        <input
          id="user-email"
          type="text"
          :value="this.account"
          readonly
        />
      </div>
      <div>
        <label for="">Reset Password:</label>
        <input
        @input="checkPasswordLength"
          id="new-password"
          type="password"
          placeholder="Enter new password"
          v-model="newPassword"
          required
        />
        <input
        @input="comparePasswords"
          id="confirm-new-password"
          type="password"
          placeholder="Confirm new password"
          v-model="newPasswordAgain"
          required
        />
      </div>
      <div v-if="samePassword === false">Passwords don't match</div>
      <div v-if="passwordMinChars === false">Password too short</div>
      <div>
        <button class="submit-btn margins">Submit changes</button>
      </div>
    </form>
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
      confirmPassword: "",
      newPassword: "",
      newPasswordAgain: "",
      samePassword: false,
      passwordMinChars: null,
    };
  },
  methods: {
    getUserData() {
      this.account = this.$store.state.users.user.email;
      console.log(this.account);
    },
        comparePasswords() {
      this.samePassword = this.newPassword === this.newPasswordAgain;
    },
    checkPasswordLength() {
      this.passwordMinChars = this.newPassword.length >= 6;
    },
  },
};
</script>

<style>
</style>
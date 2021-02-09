<template>
  <div class="center-div">
    <div class="form-card">
      <div v-if="isError" class="alert">Wrong email address or password!</div>
      <form action="submit" method="POST" @submit.prevent>
        <h2>Enter your registered email address:</h2>
        <br />
        <input
          id="user-id"
          type="email"
          placeholder="email address"
          v-model="account.email"
          required
        />
        <button @click="resetPassword" type="submit" class="login-large-btn">
          Send Password Reset Link
        </button>
      </form>
      Don't have an account? <nuxt-link to="/signup">Sign up!</nuxt-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data: () => ({
    account: {
      email: "",
    },
    isError: false,
    errMsg: "",
  }),
  methods: {
    resetPassword() {
      const auth = firebase.auth();
      const emailAddress = this.account.email;
      auth
        .sendPasswordResetEmail(emailAddress)
        .then(function () {
          // Email sent.
        })
        .catch(function (error) {
          // An error happened.
        });
      alert('Check your email to continue!')
    },
  },
};
</script>



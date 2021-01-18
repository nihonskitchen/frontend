<template>
  <div class="container">
    <div class="center-div">
      <div class="form-card">
        <div v-if="isError" class="alert">Wrong email address or password!</div>
        <form action="submit" method="POST" @submit.prevent>
          <h2>Login</h2>
          <br />
          <input
            id="user-id"
            type="email"
            placeholder="email address"
            v-model="account.email"
            required
          />
          <br />
          <input
            id="user-password"
            type="password"
            placeholder="password"
            required
            v-model="account.password"
          />
            <input type="checkbox" id="password-checkbox" @click="showPassword">
            <label for="password-checkbox">Show Password</label>
          <br />
          <button @click="login" type="submit" class="login-large-btn">Login</button>
        </form>
        Don't have an account? <nuxt-link to="/signup">Sign up!</nuxt-link>
      </div>
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
      password: "",
    },
    isError: false,
    errMsg: "",
  }),
  methods: {
    login() {
      this.$store.dispatch("users/login", this.account).catch((error) => {
        console.log(error);
        this.isError = true;
        this.errMsg = error.code;

        setTimeout(() => {
          this.isError = false;
        }, 5000);
      });

      // this.$router.push("/");
      const path = this.$store.state.users.lastURL === "" ? "/" : this.$store.state.users.lastURL;
      this.$router.push(path);
    },
    showPassword() {
      const togglePassword = document.getElementById("user-password");
      if (togglePassword.type === "password") {
        togglePassword.type = "text";
      } else {
        togglePassword.type = "password";
      }
    },
  },
};
</script>

<style>
/* p {
  color: black;
} */
.alert {
  background-color: red;
  width: 300px;
}
input {
  width: 100%;
  padding: 5px;
  margin: 5px;
}
.login-large-btn {
  padding: 5px;
  width: 100%;
  margin: 5px;
  background-color: #e76c73;
  border: 0px;
  font-size: 15px;
  border-radius: 8px;
  color: white;
}
.login-large-btn:hover {
  padding: 5px;
  width: 100%;
  margin: 5px;
  background-color: #E5536A;
  border: 0px;
  font-size: 15px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}
</style>


<template>
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
        <input type="checkbox" id="password-checkbox" @click="showPassword" />
        <label for="password-checkbox">Show Password</label>
        <br />
        <button @click="login" type="submit" class="login-large-btn">
          Login
        </button>
      </form>
      Forgot your password? <nuxt-link to="/reset-password">Reset it!</nuxt-link>
      <br />
      <br />
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
      password: "",
    },
    isError: false,
    errMsg: "",
  }),
  methods: {
    async login() {
      await this.$store.dispatch("users/login", this.account).catch((error) => {
        console.error(error);
        this.isError = true;
        this.errMsg = error.code;

        setTimeout(() => {
          this.isError = false;
        }, 5000);
        return;
      });

      await this.$store
        .dispatch("users/userDatas", this.$store.state.users.user.uid)
        .catch((error) => {
          console.log(error);
          this.isError = true;
          this.errMsg = error.code;
        });
      const path =
        this.$store.state.users.lastURL === ""
          ? "/"
          : this.$store.state.users.lastURL;
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

<style scoped>
.alert {
  background-color: red;
  width: 300px;
}
.login-large-btn {
  background-color: #e76c73;
  color: white;
}
.login-large-btn:hover {
  background-color: #e5536a;
  color: white;
}
.center-div{
  margin: -60px;
}
</style>


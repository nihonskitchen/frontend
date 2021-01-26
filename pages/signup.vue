<template>
  <div class="center-div">
    <div class="form-card">
      <form action="submit" method="POST" @submit.prevent="pressed">
        <h2>Sign up</h2>
        <br />
        <input
          id="create-id"
          type="email"
          placeholder="email address"
          required
          v-model="account.email"
        />
        <br />
        <input
          id="create-password"
          type="password"
          placeholder="password"
          required
          v-model="account.password"
        />
        <label for="create-password"
          >Password must be at least 6 characters</label
        >
        <input type="checkbox" id="password-checkbox" @click="showPassword" />
        <label for="password-checkbox">Show Password</label>
        <br />
        <button type="submit" class="large-btn">Sign up</button>
        <br />
        Already have an account? <nuxt-link to="/login">Log in!</nuxt-link>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      account: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.account.email,
          this.account.password
        )
        .then((user) => {
          console.log(user);
          this.$router.push("/user");
        })
        .catch((error) => {
          this.errors = error;
        });
    },
    showPassword() {
      const togglePassword = document.getElementById("create-password");
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
.center-div{
  margin: -60px;
}
</style>
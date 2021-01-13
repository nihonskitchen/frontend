<template>
  <div class="container">
    <div class="center-div">
      <div class="form-card">
        <form action="submit" method="POST" @submit.prevent="pressed">
          <h2>Login</h2>
          <br />
          <input
            type="email"
            placeholder="email address"
            v-model="email"
            required
          />
          <br />
          <input
            type="password"
            placeholder="password"
            required
            v-model="password"
          />
          <br />
          <button type="submit" class="large-btn">Login</button>
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
  data() {
    return {
      email: "",
      password: "",
      errors: "",
    };
  },
  methods: {
    pressed() {
      alert("Logged in");
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
          
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = error;
        });
    },
  },
};
</script>

<style>
input {
  width: 100%;
  padding: 5px;
  margin: 5px;
}
.large-btn {
  padding: 5px;
  width: 100%;
  margin: 5px;
  background-color: #e76c73;
  border: 0px;
  font-size: 15px;
  border-radius: 8px;
  color: white;
}
</style>
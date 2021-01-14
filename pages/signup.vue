<template>
  <div class="container">
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
          <br />
          <button type="submit" class="large-btn">Sign up</button>
          <br />
          Already have an account? <nuxt-link to="/login">Log in!</nuxt-link>
        </form>
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
      account: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    pressed() {
      alert("Signed up!");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.account.email, this.account.password)
        .then((user) => {
          console.log(user);
          this.$router.push("/user");
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
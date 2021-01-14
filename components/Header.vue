<template>
  <header>
    <div class="title">
      <nuxt-link to="/" id="main-title">Nihon's Kitchen</nuxt-link>
    </div>
    <nav>
      <nuxt-link to="/user/cookbook">Cookbook</nuxt-link>
      <nuxt-link to="/user/profile">Profile</nuxt-link>
      <div v-if="this.$store.state.users.user === null"><nuxt-link to="/login"><button class="login-btn">Login</button></nuxt-link> </div>

      <div v-if="this.$store.state.users.user !== null"><button @click="logout" class="login-btn">Logout</button></div>
      
    </nav>
  </header>
</template>
<script>
import Cookie from 'js-cookie'
import firebase from "firebase/app";
import "firebase/auth";

export default {
  methods: {
    async logout() {
      await firebase.auth().signOut();
      await Cookie.remove('access_token');
      location.href = '/'
    }
  }
}
</script>

<style>
header {
  /* position: fixed;
    top: 0;
    left: 0; */
  width: 100%;
  padding: 15px 30px;
  background-color: #f4f2ee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}
#main-title {
  color: #000;
}
header .title {
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  color: #000;
}
nav {
  display: flex;
  align-items: center;
  margin: 0 -15px;
}
nav a {
  display: block;
  margin: 0 15px;
}
.login-btn {
  width: 80px;
  font-size: 15px;
  border-radius: 8px;
  padding: 5px;
  background-color: #e76c73;
  border: 0px;
  margin: 0px;
  color: white;
}
</style>
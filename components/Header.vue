<template>
  <header>
    <nav>
      <nuxt-link to="/" id="main-title">
        <img :src="require('~/assets/resources/logo.png')" alt="Nihon's Kitchen" class="logo">
      </nuxt-link>
      <!-- <div class="header-right"> -->
        <!-- <div v-if="this.$store.state.users.user === null">
          <nuxt-link to="/login">
            <button class="login-btn">Login</button>
          </nuxt-link>
        </div>
        <div v-if="this.$store.state.users.user !== null">
            <button @click="logout" class="logout-btn">Logout</button>
        </div> -->
        <v-app-bar-nav-icon @click="drawer = true" right absolute></v-app-bar-nav-icon>
      <!-- </div> -->
      <v-navigation-drawer v-model="drawer" fixed temporary right>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title>
                <div v-if="this.$store.state.users.user === null">
                  <nuxt-link to="/login">
                    <button class="login-btn">Login</button>
                  </nuxt-link>
                </div>
                <div v-if="this.$store.state.users.user !== null">
                    <button @click="logout" class="logout-btn">Logout</button>
                </div>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon medium>mdi-format-list-bulleted</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <nuxt-link to="/user/shoppinglist">Shopping List</nuxt-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon medium>mdi-notebook-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <nuxt-link to="/user/cookbook">My Cookbook</nuxt-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon medium>mdi-notebook-edit</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <nuxt-link to="/user/create-recipe">Add Recipe</nuxt-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon medium>mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <nuxt-link to="/user/profile">Profile</nuxt-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </header>
</template>
<script>
import Cookie from "js-cookie";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
      await Cookie.remove("access_token");
      location.href = "/";
    },
  },
};
</script>

<style>
header {
  /* position: fixed;
    top: 0;
    left: 0; */
  width: 100%;
  padding: 10px 20px;
  background-color: #f4f2ee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  height: 100px;
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
header nav {
  /* width: 95vw; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 0 -15px; */
}
.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
nav a {
  display: block;
  /* margin: 0 15px; */
}
.logo {
  width: 200px;
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
.login-btn:hover {
  width: 80px;
  font-size: 15px;
  border-radius: 8px;
  padding: 5px;
  background-color: #e5536a;
  border: 0px;
  margin: 0px;
  color: white;
}
.logout-btn {
  width: 80px;
  font-size: 15px;
  border-radius: 8px;
  padding: 5px;
  background-color: #f7b981;
  border: 0px;
  margin: 0px;
  color: white;
}
.logout-btn:hover {
  width: 80px;
  font-size: 15px;
  border-radius: 8px;
  padding: 5px;
  background-color: #ffa95d;
  border: 0px;
  margin: 0px;
  color: white;
  cursor: pointer;
}
.v-list-item__content{
  margin-left: 5px;
}
</style>

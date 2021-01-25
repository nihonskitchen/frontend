<template>
  <header>
    <div class="title">
      <nuxt-link to="/" id="main-title">Nihon's Kitchen</nuxt-link>
    </div>
    <nav>
    <!-- <div>
      
      <nuxt-link to="/shoppinglist">Shopping List</nuxt-link>
      <nuxt-link to="/user/cookbook">Cookbook</nuxt-link>
      <nuxt-link to="/user/profile">Profile</nuxt-link>
      <div v-if="this.$store.state.users.user === null">
        <nuxt-link to="/login"
          ><button class="login-btn">Login</button></nuxt-link
        >
      </div>

      <div v-if="this.$store.state.users.user !== null">
        <button @click="logout" class="logout-btn">Logout</button>
      </div>
    </div> -->
      <div id="mobile-menu">
        <button
          id="hamburger-menu"
          class="hamburger hamburger--3dy"
          type="button"
          @click="toggleMenu"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <!-- <div>
          <ul>
            <li>Shopping List</li>
            <li>Cookbook</li>
            <li>Login</li>
            <li>Logout</li>
          </ul>
        </div> -->
      </div>
    </nav>
  </header>
</template>
<script>
import Cookie from "js-cookie";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  methods: {
    async logout() {
      await firebase.auth().signOut();
      await Cookie.remove("access_token");
      location.href = "/";
    },
    toggleMenu() {
      const hamburger = document.getElementById("hamburger-menu");

      hamburger.classList.toggle("is-active");
    },
  },
};
</script>

<style>
.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.is-active:hover {
  opacity: 0.7;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #000;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}

.hamburger--3dy .hamburger-box {
  perspective: 80px;
}

.hamburger--3dy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy .hamburger-inner::before,
.hamburger--3dy .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dy.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(-180deg);
}
.hamburger--3dy.is-active .hamburger-inner::before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dy.is-active .hamburger-inner::after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}

/*
   * 3DY Reverse
   */
.hamburger--3dy-r .hamburger-box {
  perspective: 80px;
}

.hamburger--3dy-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy-r .hamburger-inner::before,
.hamburger--3dy-r .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dy-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg);
}
.hamburger--3dy-r.is-active .hamburger-inner::before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dy-r.is-active .hamburger-inner::after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
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
@media screen and (max-width: 992px) {
  .mobile-menu {
    width: 50%;
    display: block;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}
@media screen and (max-width: 600px) {
  .mobile-menu {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}
</style>


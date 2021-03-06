import Cookie from "js-cookie";
import firebase from "firebase/app";
import "firebase/auth";

export const state = () => ({
  user: null,
  profile: null,
  lastURL: ""
});

export const mutations = {
  SET_USER: (state, account) => {
    state.user = account;
  },
  setLastURL: (state, path) => {
    state.lastURL = path;
  },
  setProfile: (state, data) => {
    state.profile = data;
  }
};

export const actions = {
  async login({ commit }, account) {
    try {
      // Login the user
      await firebase.auth().signInWithEmailAndPassword(account.email, account.password);

      // GET JSON web token from Firebase
      const token = await firebase.auth().currentUser.getIdToken();
      const { email, uid } = firebase.auth().currentUser;

      // Set JSON web token to the cookie
      Cookie.set("access_token", token, { secure: true, expires: 7 });
      
      // Set the user locally
      commit("SET_USER", { email, uid });

    } catch (error) {
      throw error;
    }
  },
  async userDatas({ commit }, uid) {
    try {
      // const profile = await this.$axios.$get(`https://nihons-kitchen-server.an.r.appspot.com/api/users/${uid}`);
      const profile = await this.$axios.$get(`/users/${uid}`);
      // console.log("profile");
      commit("setProfile", profile.data.users);
      console.log("profile =", profile);
    } catch (error) {
      throw error;
    }
  },
  async addFavorites() {
    try {

    } catch (error) {
      throw error;
    }
  }
};

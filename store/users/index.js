import Cookie from "js-cookie";
import firebase from "firebase/app";
import "firebase/auth";

export const state = () => ({
  user: null,
  lastURL: ""
});

export const mutations = {
  SET_USER: (state, account) => {
    state.user = account;
  },
  setLastURL: (state, path) => {
    state.lastURL = path;
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
      Cookie.set("access_token", token, { secure: true });

      // Set the user locally
      commit("SET_USER", { email, uid });
    } catch (error) {
      throw error;
    }
  }
};

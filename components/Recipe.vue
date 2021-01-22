<template>
  <div>
    <h1>My Recipes</h1>
    <div
      v-for="recipe in this.allRecipes"
      :key="recipe.doc_id"
      class="card column"
    >
      <div class="recipe-inner">
        <img :src="recipe.picture_url" alt="" />
      </div>
      <div class="detail">
        <h3>
          {{ recipe.recipe_name }}
        </h3>
        <p>
          {{ recipe.owner_comment }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  mounted() {
    this.getAllData();
  },
  data() {
    return {
      allRecipes: [],
      retVal: [],
      userID: null,
    };
  },
  methods: {
    getAllData() {
      Promise.all((this.userID = firebase.auth().currentUser.uid))
        .then(() => {
          return this.$axios.$get(`/recipes/uid/${this.userID}`);
        })
        .then((res) => res.data.recipes)
        .then((data) => {
          // console.log(data);
          data.map((element) => {
            this.allRecipes.push(element);
            console.log("allRecipes =", this.allRecipes);
          });
        })
        .then(async () => {
          let ref = firebase.storage().ref();
          this.allRecipes.map((element) => {
            ref
              .child(element.picture_url)
              .getDownloadURL()
              .then((url) => (element.picture_url = url));
            // this.picture_url.push(
            //   ref.child(element.picture_url).getDownloadURL()
            // );
            console.log("element", element.picture_url);
          });
          return this.allRecipes;
        });
      // .then(this.$nuxt.refresh())
    },
  },
};
</script>

<style>
</style>

<template>
  <div class="home-page">
    <h1>My Cookbook</h1>
    <nuxt-link to="/recipe-details">
      <div
        v-for="(recipe, index) in this.recipes"
        :key="recipe.doc_id"
        class="card column"
        @click="passRecipeData(index)"
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
    </nuxt-link>
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
      recipes: [],
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
          data.map((element) => {
            this.recipes.push(element);
          });
        })
        .then(async () => {
          let ref = firebase.storage().ref();
          this.recipes.map((element) => {
            ref
              .child(element.picture_url)
              .getDownloadURL()
              .then((url) => (element.picture_url = url));
          });
          return this.recipes;
        });
    },
    passRecipeData(index) {
      this.$store.state.recipes.selectedRecipe = this.recipes[index];
    },
  },
};
</script>

<style>
.home-page a {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
<template>
  <div>
    <h1>My Recipes</h1>
    <div
      v-for="recipe in this.allRecipes"
      :key="recipe.doc_id"
      class="card column"
    >
      <div class="recipe-inner" @click="passRecipeData(recipe.recipe_id)">
        <img
              :src="getRecipePic(recipe.picture_url)"
              alt=""
            />
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
    this.getUserRecipes();
    this.getRecipePic();
  },
  data() {
    return {
      allRecipes: null,
      picture_url: null
    };
  },
  methods: {
    async getUserRecipes() {
      await this.$axios
        .$get(`/recipes/uid/${firebase.auth().currentUser.uid}`)
        .then(
          (res) => {
            this.allRecipes = res.data.recipes;
          },
          (err) => {
            console.log(err);
          }
        );
      console.log(this.allRecipes);
    },
    passRecipeData(id) {
      this.$store.commit("recipes/showRecipeDetails", id);
      console.log(id);
    },
    async getRecipePic(val) {
      let ref = firebase.storage().ref().child(val);
      await ref.getDownloadURL()
      .then((url) => {
        return url
        // return this.picture_url
      })
    }
  },
};
</script>

<style>
</style>

<template>
  <div>
    <h1>My Recipes</h1>
    <div
      v-for="(recipe, index) in this.allRecipes"
      :key="index"
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
      <!-- <img :src="picture_url" alt=""> -->
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  mounted() {
    // this.getUserRecipes();
    // this.getRecipePic();
    // this.getUserID();
    this.getMyRecipes();
  },
  data() {
    return {
      allRecipes: null,
      picture_url: [],
      userID: null,
    };
  },
  methods: {
    getUserRecipes() {
      // console.log("userID =", this.userID);
      this.getUserID()
      .then(this.$axios.$get(`/recipes/uid/${this.userID}`).then((res) => {
        this.allRecipes = res.data.recipes;
      }))
      
    },
    getMyRecipes() {
      Promise.all([getUserRecipes, getRecipePic]).then((res) => res);
    },
    getUserID() {
      this.userID = firebase.auth().currentUser.uid;
      console.log(this.userID);
    },
    getRecipePic() {
      let ref = firebase.storage().ref();
      console.log("GET RECIPE PIC");
      if (this.allRecipes !== null) {
        this.allRecipes.map((element) => {
          // this.picture_url.push(element.picture_url)
          // console.log("ELEMENT =", element);
          element.picture_url = ref.child(element.picture_url).getDownloadURL();
        });
        // this.picture_url.map(element => {
        //   element = ref.child(element).getDownloadURL();
        // })
      }
      console.log(this.allRecipes);
    },
  },
};
</script>

<style>
</style>

<template>
  <div class="home-page">
    <h1>Welcome to the latest recipes in Japan!</h1>
    <nuxt-link to="recipe-details">
      <div
        v-for="(recipe, index) in this.recipes"
        :key="index"
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
import firebase from "firebase";

export default {
  asyncData() {
    return {
      title: "Nihon's Kitchen",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    try {
      this.getRecipes();
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  },
  methods: {
    getRecipes() {
      // I don't know why variable of "this" to refer is need....
      // Please don't remove this declaration.
      let self = this;
      this.$axios
        .$get("/recipes")
        .then((res) => res.data.recipes)
        .then((data) => {
          data.map((element) => {
            this.recipes.push(element);
          });
        })
        .then(async () => {
          self.recipes.map((element) => {
            const ref = firebase.storage().ref();
            ref
              .child(element.picture_url)
              .getDownloadURL()
              .then((url) => (element.picture_url = url));
          });
          this.$store.commit("recipes/setRecipes", self.recipes);
          return self.recipes;
        });
    },
    passRecipeData(index) {
      this.$store.commit("recipes/showRecipeDetails", index);
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
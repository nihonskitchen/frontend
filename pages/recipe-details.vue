<template>
  <div class="info-card">
    <div class="recipe-inner">
      <img :src="this.recipeData.picture_url" alt="" />
      <h2 class="recipe-title">{{ this.recipeData.recipe_name }}</h2>
      <p class="recipe-text">{{ this.recipeData.owner_comment }}</p>
      <p class="recipe-text">Number of servings: {{ this.recipeData.servings }}</p>
      <div class="recipe-text">
        Likes: # {{ this.recipeData.likes }} Dislikes: #
        {{ this.recipeData.dislikes }}
      </div>
      <div>Estimated Cost: {{ this.recipeData.prices }} yen</div>

      <!-- {{ this.recipeData }} -->

      <div class="ingredients-list"
        v-for="ingredient of this.recipeData.ingredients"
        :key="ingredient.name"
      >
        <h2 class="recipe-title">Ingredients</h2>
        <ul>
          <li>
            {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
          </li>
        </ul>
      </div>

      <div v-for="step in this.recipeData.steps" :key="step">
        <h2 class="recipe-title">Steps</h2>
        <ol>
          <li>{{ step }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.recipeData);
  },
  data() {
    return {
      recipeData: this.$store.state.recipes.selectedRecipe,
    };
  },
};
</script>

<style>
.recipe-title {
  text-align: center;
  padding: 10px;
  margin: 0px;
}
/* p {
  padding: 0px;
  margin: 0px;
} */
.recipe-text {
  padding: 5px;
  margin-bottom: 5px;
}



</style>
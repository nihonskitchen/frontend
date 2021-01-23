<template>
  <div class="info-card">
    <div class="recipe-inner">
      <img :src="this.recipeData.picture_url" alt="" />
      <h2 class="recipe-title">{{ this.recipeData.recipe_name }}</h2>
      <p class="recipe-text">{{ this.recipeData.owner_comment }}</p>
      <p class="recipe-text">
        Number of servings: {{ this.recipeData.servings }}
      </p>
      <div class="recipe-text">
        Likes: # {{ this.recipeData.likes }} Dislikes: #
        {{ this.recipeData.dislikes }}
      </div>
      <div>Estimated Cost: {{ this.recipeData.prices }} yen</div>
      <h2 class="recipe-title">Ingredients</h2>
      <div
        class="ingredients-list"
        v-for="(ingredient, index) of this.recipeData.ingredients"
        :key="index"
      >
        <div class="left">
           <input type="checkbox" class="add-shopping-checkbox"> {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
        </div>
      </div>
      <h2 class="recipe-title">Steps</h2>
      <div v-for="step in this.recipeData.steps" :key="step">
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
.recipe-text {
  padding: 5px;
  margin-bottom: 5px;
}
.add-shopping-checkbox {
  display: inline-block;
  width: 20px;
}
.left {
  justify-self: left;
}
</style>
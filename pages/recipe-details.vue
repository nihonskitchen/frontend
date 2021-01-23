<template>
  <div class="info-card">
    <div class="recipe-inner">
      <img :src="this.recipeData.picture_url" alt="" class="recipe-detail-img" />
      <h2 class="recipe-title">{{ this.recipeData.recipe_name }}</h2>
      <p class="recipe-text recipe-serving">
        Number of servings: <span class="strong">{{ this.recipeData.servings }}</span>
      </p>
      <p class="recipe-text recipe-time">
        Estimated Time: <span class="strong">{{ this.recipeData.time }}</span>
      </p>

      <p class="recipe-text">{{ this.recipeData.owner_comment }}</p>
      <!-- <div class="recipe-text">
        Likes: # {{ this.recipeData.likes }} Dislikes: #
        {{ this.recipeData.dislikes }}
      </div> -->
      <!-- <div>Estimated Cost: {{ this.recipeData.prices }} yen</div> -->

      <div class="button-area">
        <h2 class="recipe-title">Ingredients</h2>
        <button @click="setIngredients">Add to shopping list</button>
      </div>
      <div
        class="ingredients-list"
        v-for="ingredient of this.recipeData.ingredients"
        :key="ingredient.name"
      >
        <ul>
          <li>
            {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
          </li>
        </ul>
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
    // console.log(this.recipeDatayarn);
  },
  data() {
    return {
      recipeData: this.$store.state.recipes.selectedRecipe,
    };
  },
  methods: {
    setIngredients() {
      this.$store.commit("shoppinglist/setShoppingList", this.recipeData.ingredients);
    },
  }
};
</script>

<style>
.recipe-title {
  text-align: center;
  padding: 10px;
  margin: 0px;
}
.recipe-detail-img {
  border-radius: 8px;
}
/* p {
  padding: 0px;
  margin: 0px;
} */
.recipe-text {
  padding: 3px;
  margin-bottom: 3px;
}
.recipe-serving {
  color:#737A7B;
  font-size: 12px;
}
.recipe-time {
  color:#737A7B;
  font-size: 12px;
}
.strong {
  color: #142C28;
  font-size: 16px;
  font-weight: bold;
}
.button-area {
  display: flex;
  justify-content: space-around;
}
.button-area button {
  color: #F4F2EE;
  font-size: 12px;
  max-width: 30%;
  border-radius: 5px;
}
</style>
<template>
  <div class="info-card">
    <div class="recipe-inner">
      <img
        :src="this.recipeData.picture_url"
        alt=""
        class="recipe-detail-img"
      />
      <h2 class="recipe-title">{{ this.recipeData.recipe_name }}</h2>
      <p class="recipe-text recipe-serving">
        Number of servings:
        <span class="strong">{{ this.recipeData.servings }}</span>
      </p>
      <p class="recipe-text recipe-time">
        Preparation time:
        <span class="strong">{{ this.recipeData.time }}</span>
      </p>

      <p class="recipe-text">{{ this.recipeData.owner_comment }}</p>
      <div class="button-area">
        <h2 class="recipe-title">Ingredients</h2>
      </div>
      <div
        class="ingredients-list"
        v-for="(ingredient, index) of this.recipeData.ingredients"
        :key="index"
      >
        <div class="left">
          <input
            type="checkbox"
            class="add-shopping-checkbox"
            :id="ingredient.name"
            @click="addOrRemoveIngredient(ingredient, index)"
          />
          {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
        </div>
      </div>
      <button @click="addToShoppingList">Add to shopping list</button>
      <h2 class="recipe-title">Steps</h2>
      <div v-for="(step, index) in this.recipeData.steps" :key="step" class="recipe-steps">
        <div class="margins">{{ index + 1 }}. {{ step }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipeData: this.$store.state.recipes.selectedRecipe,
      currentIngredient: "",
      selectedIngredients: [],
    };
  },
  methods: {
    addOrRemoveIngredient(ingredient, index) {
      if (document.getElementById(ingredient.name).checked) {
        this.selectedIngredients.push(ingredient);
      } else {
        this.selectedIngredients.splice(index, 1);
      }
    },
    addToShoppingList() {
      this.$store.commit(
        "shoppinglist/addToShoppingList",
        this.selectedIngredients
      );
    },
  },
};
</script>

<style>
.add-shopping-checkbox {
  display: inline-block;
  width: 20px;
}
.button-area {
  display: flex;
  justify-content: space-around;
}
.button-area button {
  color: #f4f2ee;
  font-size: 12px;
  max-width: 30%;
  border-radius: 5px;
}
.recipe-detail-img {
  border-radius: 8px;
}
.recipe-title {
  text-align: center;
  padding: 10px;
  margin: 0px;
}
.recipe-serving {
  color: #737a7b;
  font-size: 12px;
}
.recipe-text {
  padding: 3px;
  margin-bottom: 3px;
}
.recipe-time {
  color: #737a7b;
  font-size: 12px;
}
.recipe-steps {
  text-align: left;
  text-indent: -1.3em;
  margin-left: 1.3em;
  line-height: 1.5em;
}
</style>
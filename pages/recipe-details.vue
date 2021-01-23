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
      currentIngredient: "",
      selectedIngredients: []
    };
  },
  methods: {
    addOrRemoveIngredient(ingredient, index) {
      // console.log(document.getElementById(ingredient.name).checked)
      
      if (document.getElementById(ingredient.name).checked) {
        this.selectedIngredients.push(ingredient)
      } else {
        this.selectedIngredients.splice(index, 1)
      }
      // console.log("selectedIngredient =", this.selectedIngredients)
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
.left {
  justify-self: left;
}
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
  color: #737a7b;
  font-size: 12px;
}
.recipe-time {
  color: #737a7b;
  font-size: 12px;
}
.strong {
  color: #142c28;
  font-size: 16px;
  font-weight: bold;
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
.add-shopping-checkbox {
  display: inline-block;
  width: 20px;
}
.left {
  justify-self: left;
}
</style>
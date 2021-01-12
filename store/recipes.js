const recipes = require("~/server/data/recipes.json");

export const state = () => ({
  recipes: null,
  selectedRecipe: null
});

export const getters = () => ({
  //
});

export const mutations = {
  getCardDetails(state) {
    state.recipes = recipes["allRecipes"];
  },
  showRecipeDetails(state, id) {
    state.selectedRecipe = id;
  }
};

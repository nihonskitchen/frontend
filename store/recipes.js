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

    for (let i = 0; i < state.recipes.length; i++) {
      if (state.recipes[i].recipe_id === id) {
        state.selectedRecipe = state.recipes[i];
      }
    }
   
  }
};

export const actions = {
  getDataAsync() {

  },
}


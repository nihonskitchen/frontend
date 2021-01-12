const recipes = require("~/server/data/recipes.json");

export const state = () => ({
    recipes: null
  });
  
  export const getters = () => ({
    //
  });
  
  export const mutations = {
    showDetails(state) {
        state.recipes = recipes["allRecipes"];
    }
  };
  
  
  
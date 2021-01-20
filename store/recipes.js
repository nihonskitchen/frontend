const recipes = require("~/server/data/recipes.json");

import firebase from "firebase/app";
import "firebase/auth";


export const state = () => ({
  recipeID: null,
  recipes: null,
  recipesCollection: null,
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

export const getAll = callback => {
  recipeCollection.get().then(callback);
};

export const get = (id, callback) => {
  recipeCollection
    .doc(id)
    .get()
    .then(callback);
};

export const update = (id, recipe, callback = () => {}) => {
  recipeCollection.doc(id).update(recipe).then(callback);
};

export const remove = (id, callback = () => {}) => {
  recipeCollection.doc(id).delete().then(callback);
};

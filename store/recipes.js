import firebase from "firebase/app";
import "firebase/auth";

export const state = () => ({
  // recipeID: null,
  recipes: {},
  recipesCollection: {},
  selectedRecipe: {}
});

export const getters = () => ({
  //
});

export const mutations = {
  getCardDetails(state) {
    state.recipes = recipes["allRecipes"];
  },
  showRecipeDetails(state, index) {
    // console.log("CLICK")
    // for (let i = 0; i < state.recipes.length; i++) {
    //   if (i === index) {
    state.selectedRecipe = state.recipes[index];
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
  recipeCollection
    .doc(id)
    .update(recipe)
    .then(callback);
};

export const remove = (id, callback = () => {}) => {
  recipeCollection
    .doc(id)
    .delete()
    .then(callback);
};

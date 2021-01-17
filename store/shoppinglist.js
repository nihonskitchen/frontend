const shoppingList = require("~/server/data/shoppinglist.json");

export const state = () => ({
  shoppingList: [
    {
      "ingredient_id": "001",
      "ingredient_name": "ground pork",
      "amount": "12",
      "units": "ounces",
      "barcode_data": ""
    },
    {
      "ingredient_id": "002",
      "ingredient_name": "cabbage",
      "amount": "1",
      "units": "head",
      "barcode_data": ""
    },
    {
      "ingredient_id": "003",
      "ingredient_name": "egg",
      "amount": "1",
      "units": "",
      "barcode_data": ""
    },
    {
      "ingredient_id": "004",
      "ingredient_name": "onion",
      "amount": "2",
      "units": "sliced",
      "barcode_data": ""
    },
    {
      "ingredient_id": "005",
      "ingredient_name": "soy sauce",
      "amount": "1",
      "units": "tbsp",
      "barcode_data": ""
    }
  ]
});

export const getters = () => ({
  //
});

export const mutations = {
  getLists(state) {
    state.shoppingList = shoppingList["datas"];
  },
  showRecipeDetails(state, id) {

    for (let i = 0; i < state.recipes.length; i++) {
      if (state.recipes[i].recipe_id === id) {
        state.selectedRecipe = state.recipes[i];
      }
    }

  }
};

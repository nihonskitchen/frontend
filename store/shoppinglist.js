// const shoppingList = require("~/server/data/shoppinglist.json");

export const state = () => ({
  shoppingList: [
    {
      "ingredient_id": "001",
      "ingredient_name": "ground pork",
      "amount": "12",
      "units": "ounces",
      "barcode_data": "",
      "itemUrl": "https://search.rakuten.co.jp/search/mall/ground+pork/100227/?st=O"
      // "itemUrl": "https://item.rakuten.co.jp/premium-deli/porkbellys/"
    },
    {
      "ingredient_id": "002",
      "ingredient_name": "cabbage",
      "amount": "1",
      "units": "head",
      "barcode_data": "",
      "itemUrl": "https://search.rakuten.co.jp/search/mall/cabbage/100227/?st=O"
      // "itemUrl": "https://item.rakuten.co.jp/kyunan/veg-kyabetu/"
    },
    {
      "ingredient_id": "003",
      "ingredient_name": "egg",
      "amount": "1",
      "units": "",
      "barcode_data": "",
      "itemUrl": "https://search.rakuten.co.jp/search/mall/egg/100227/?st=O"
      // "itemUrl": "https://item.rakuten.co.jp/ajinomoto/r4901001052400/"
    },
    {
      "ingredient_id": "004",
      "ingredient_name": "onion",
      "amount": "2",
      "units": "sliced",
      "barcode_data": "",
      "itemUrl": "https://search.rakuten.co.jp/search/mall/onion/100227/?st=O"
      // "itemUrl": "https://item.rakuten.co.jp/e-sbfoods/89593/"
    },
    {
      "ingredient_id": "005",
      "ingredient_name": "soy sauce",
      "amount": "1",
      "units": "tbsp",
      "barcode_data": "",
      "itemUrl": "https://search.rakuten.co.jp/search/mall/soy+sauce/100227/?st=O"
      // "itemUrl": "https://item.rakuten.co.jp/maruyashop/r122_4/"
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
  setLists(state, data) {
    state.shoppingList = data;
  },
  showRecipeDetails(state, id) {

    for (let i = 0; i < state.recipes.length; i++) {
      if (state.recipes[i].recipe_id === id) {
        state.selectedRecipe = state.recipes[i];
      }
    }

  }
};

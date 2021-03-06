// const shoppingList = require("~/server/data/shoppinglist.json");

export const state = () => ({
  shoppingList: []
});

export const mutations = {
  getLists(state) {
    state.shoppingList = shoppingList["datas"];
  },
  addToShoppingList(state, ingData) {
    const ingArray = ingData;
    for (const i of ingArray) {
      const itemUrl = i.name.split(" ").join("+");
      const listItem = {
        itemUrl,
        amount: i.amount,
        name: i.name,
        unit: i.unit
      };
      state.shoppingList.push(listItem);
    }
    if (state.shoppingList.length === 1) {
      alert("Your shopping list has " + state.shoppingList.length + " item!")
    } else {
      alert("Your shopping list has " + state.shoppingList.length + " items!")
    }
    console.log("addToShoppingList = ", state.shoppingList);
  },
  showRecipeDetails(state, id) {
    for (let i = 0; i < state.recipes.length; i++) {
      if (state.recipes[i].recipe_id === id) {
        state.selectedRecipe = state.recipes[i];
      }
    }
  },
  removeFromShoppingList(state, index) {
    state.shoppingList.splice(index, 1)
    console.log("removeFromShoppingList = ", state.shoppingList);
  }
};

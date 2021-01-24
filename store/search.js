export const state = () => ({
  // recipeID: null,
  result: false
});

export const getters = () => ({
  //
});

export const mutations = {
    setResultFalse(state) {
        state.result = false;
    },
    setResultTrue(state) {
        state.result = true;
    },
};
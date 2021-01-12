export const state = () => ({
  details: {
    jancode: "",
    product_name: "",
    front_pic: "",
    back_pic: "",
    description: ""
  },
  newSubmission: {}
});

export const getters = () => ({
  //
});

export const mutations = {
  // this.$store.state.barcode.details
  showDetails(state, text) {
    state.details = text;

    return state.details;
  },
  addBarcode(state, barcode) {
    //
  },
  addJancode(state, barcode) {
    console.log("JANCODE =", barcode);
    // this.set(state.newSubmission, jancode, barcode);
    state.newSubmission = barcode;
    // state.newSubmission.jancode = barcode;
  },
  removeJancode(state) {
    // change to barcode mutations
    state.details = Object.assign({}, state.details, {
      jancode: "",
      product_name: "",
      id: 0,
      front_pic: "",
      back_pic: "",
      description: ""
    });
    return state.details;
  },
  resetBarcode(state) {
    state.details = {};
  },
  toggle(state, barcode) {
    barcode.done = !barcode.done;
  }
};

// need add() and update()

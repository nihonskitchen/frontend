export const state = () => ({
  details: {
    jancode: "",
    product_name: "",
    front_pic: "",
    back_pic: "",
    description: ""
  },
  newSubmission: {},
  scanImage: ""
});

export const getters = () => ({
  //
});

export const mutations = {
  // 読み取ったバーコードをsave
  addCode(state, code) {
    state.code = code;
  },
  addImg(state, src) {
    state.scanImage = src;
  },
  changeDetails(state, code) {
    state.details = code;
  },




  // this.$store.state.barcode.details
  showDetails(state, text) {
    state.details = text;

    return state.details;
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
    state.details = Object.assign({}, state.details, {
      jancode: "",
      front_pic: "",
      back_pic: "",
    });
  },
  toggle(state, barcode) {
    barcode.done = !barcode.done;
  }
};

// need add() and update()

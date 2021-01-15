export const state = () => ({
  details: {
    barcode: "",
    product_name: "",
    description: ""
  },
  scanImage: "",
  newSubmit: {},
  reqType: ""
  // isData: false,
});

export const getters = () => ({
  details: (state) => state.details
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
  removeCode(state) {
    // change to barcode mutations
    state.details = Object.assign({}, state.details, {
      barcode: "",
      product_name: "",
      id: 0,
      description: ""
    });
    return state.details;
  },
  removeImg(state) {
    state.scanImage = "";
  },
  putNewData(state, data) {
    state.newSubmit = data;
  },
  setRequest(state, req) {
    state.reqType = req;
  },

  // isDataToggle(state, bool) {
  //   state.isData = bool;
  // },
  // this.$store.state.barcode.details
  // showDetails(state, text) {
  //   state.details = text;

  //   return state.details;
  // },

  // addJancode(state, barcode) {
  //   console.log("JANCODE =", barcode);
  //   // this.set(state.newSubmission, jancode, barcode);
  //   state.newSubmission = barcode;
  //   // state.newSubmission.jancode = barcode;
  // },

  // resetBarcode(state) {
  //   state.details = Object.assign({}, state.details, {
  //     jancode: "",
  //     front_pic: "",
  //     back_pic: "",
  //   });
  // },
  // toggle(state, barcode) {
  //   barcode.done = !barcode.done;
  // }
};

// need add() and update()

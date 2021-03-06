export const state = () => ({
  details: {
    barcode_data: "",
    ingredient_name: "",
    ingredient_id: "",
    description: ""
  },
  scanImage: "",
  barcode_data: "",
  newSubmit: {}
  // reqType: ""
  // isData: false,
});

export const getters = () => ({
  details: (state) => state.details
});

export const mutations = {
  // 読み取ったバーコードをsave
  addCode(state, code) {
    state.barcode_data = code;
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
};

// need add() and update()

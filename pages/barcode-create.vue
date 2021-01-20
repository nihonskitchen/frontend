<template>
  <div class="container">
    <div class="barcode-card">
      <h2>You found a new barcode!</h2>
      <client-only>
        <BarcodeImg v-if="this.$store.state.barcode.scanImage !== ''" />
        <form action="">
          <label for="barcode">Barcode</label>
          <input type="text" readonly :value="this.$store.state.barcode.details.barcode_data" />
          <label for="product_name">Product Name</label>
          <input type="text" v-model="product_name" />
          <label for="description">Product description</label>
          <br />
          <textarea rows="4" cols="40" type="text" v-model="description" />
        </form>
      </client-only>
      <div>
        <button class="submit-btn" @click="submit">Submit Barcode</button>
        <nuxt-link to="/barcode">
          <button class="submit-btn">new scan</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import BarcodeImg from "../components/BarcodeImg.vue"

export default {
  components: {
    BarcodeImg
  },
  data: function() {
    return {
      barcode: this.$store.state.barcode.details.barcode_data,
      product_name: "",
      description: ""
    }
  },
  methods: {
    async submit() {
      const newProduct = {
        barcode_data: this.barcode_data,
        ingredient_name: this.ingredient_name,
        description: this.description,
        ingredient_id: ""
      }
      // データをセット
      this.$store.commit("barcode/putNewData", newProduct);
      // ポスト
      const newBarcode = await this.$axios.$post(`/barcode/`, newProduct);
      // details削除
      this.$store.commit("barcode/removeCode");
      // detailsをセット
      this.$store.commit("barcode/changeDetails", newBarcode.data.ingredient);
      this.$router.push("/barcode-submitted");
    },
  }
};
</script>

<style>
.barcode-card {
  position: relative;
  top: 30px;
  /* bottom: 100px; */
  /* margin-top: 80px; */
  /* margin-bottom: 100px; */
  margin: 0 auto 100px;
  align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  background-color: #f4f2ee;
  border-radius: 8px;
  min-width: 360px;
  max-width: 360px;
}
.submit-btn {
  width: 150px;
  font-size: 15px;
  border-radius: 8px;
  padding: 5px;
  background-color: #e76c73;
  border: 0px;
  /* margin: 0px; */
  color: white;
  margin-top: 20px;
}
</style>

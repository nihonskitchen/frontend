<template>
  <div class="container">
    <div class="barcode-card">
      <h2>You found a new barcode!</h2>
      <client-only>
        <BarcodeImg v-if="this.$store.state.barcode.scanImage !== ''" />
        <form action="">
          <label for="barcode">Barcode</label>
          <input type="text" readonly :value="this.$store.state.barcode.barcode_data" />
          <label for="product_name">Product Name</label>
          <input type="text" v-model="ingredient_name" />
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
      barcode_data: this.$store.state.barcode.barcode_data,
      ingredient_name: "",
      description: ""
    }
  },
  methods: {
    async submit() {
      const newProduct = {
        BarcodeData: this.barcode_data,
        IngredientName: this.ingredient_name,
        Description: this.description,
        IngredientId: ""
      }
      // データをセット
      this.$store.commit("barcode/putNewData", newProduct);
      try {
        // ポスト
        const newBarcode = await this.$axios.$post("https://nihons-kitchen-server.an.r.appspot.com/api/barcode/", newProduct);
        console.log(newBarcode);
        // details削除
        this.$store.commit("barcode/removeCode");
        // detailsをセット
        this.$store.commit("barcode/changeDetails", newBarcode.createdIngredient);
        this.$router.push("/barcode-submitted");
      } catch (err) {
        console.log(err);
      }


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

<template>
  <div class="container">
    <div class="barcode-card">
      <h2>You found a new barcode!</h2>
      <client-only>
        <BarcodeImg v-if="this.$store.state.barcode.scanImage !== ''" />
        <form action="">
          <label for="barcode">Barcode</label>
          <input type="text" readonly :value="this.$store.state.barcode.details.barcode" />
          <label for="product_name">Product Name</label>
          <input type="text" v-model="product_name" />
          <label for="description">Product description</label>
          <br />
          <textarea rows="4" cols="40" type="text" v-model="description" />
        </form>
      </client-only>
      <div>
        <!-- <input type="submit" id="submit-recipe" /> -->
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
  middleware({ store, redirect }) {
    if (!store.state.users.user) {
      return redirect('/login')
    }
  },
  components: {
    BarcodeImg
  },
  data: function() {
    return {
      barcode: this.$store.state.barcode.details.barcode,
      product_name: "",
      description: ""
    }
  },
  methods: {
    submit() {
      const newProduct = {
        barcode: this.barcode,
        product_name: this.product_name,
        description: this.description
      }
      this.$store.commit("barcode/putNewData", newProduct);
      this.$router.push("/barcode-submit");
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
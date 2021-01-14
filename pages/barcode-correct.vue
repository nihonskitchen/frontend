<template>
  <div class="container">
    <div class="barcode-card">
      <h2>You correct the barcode data</h2>
      <client-only>
        <BarcodeInput :mode="create" :data="newData" />
      </client-only>
      <button class="submit-btn" @click="pass">Submit</button>
    </div>
  </div>
</template>

<script>
import BarcodeInput from "../components/BarcodeInput.vue";

export default {
  components: {
    BarcodeInput
  },
  data: function() {
    return {
      newData: {
        barcode: "",
        product_name: "",
        description: ""
      }
    }
  },
  methods: {
    pass() {
      this.$router.push('/barcode-submitted');
    },
    submit() {
      const newProduct = {
        barcode: "",
        product_name: "",
        description: ""
      }
      this.$store.commit('barcode/putNewData', newProduct);
      this.$router.push('/barcode-submitted');
    },

  }
};
</script>

<style>
.barcode-card {
  position: relative;
  top: 80px;
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
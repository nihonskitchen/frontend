<template>
  <div class="scan-container center-div">
    <div class="form-card">
      <h2>Here is the barcode data:</h2>
      <client-only>
        <BarcodeImg v-if="this.$store.state.barcode.scanImage !== ''" />
        <BarcodeData />
      </client-only>
      <button @click="newScan" class="submit-btn margins">Scan a new barcode</button>
      <!-- <button v-if="this.$store.state.users.user !== null" @click="correctionData">Correct the barcode data</button> -->
    </div>
  </div>
</template>

<script>
import BarcodeImg from "../components/BarcodeImg.vue"
import BarcodeData from "../components/BarcodeData.vue"

export default {
  components: {
    BarcodeImg,
    BarcodeData
  },
  data: function () {
    return {
      //
    }
  },
  methods: {
    newScan: function() {
      this.$store.commit("barcode/removeCode");
      this.$router.push("/barcode")
    },
    correctionData: function() {
      this.$store.commit('barcode/removeImg');
      this.$router.push("/barcode-correct")
    },
  },
};
</script>


<style>
h2 {
  font-size: 20px;
  color: #E76C73;
}
.barcode-btn {
  max-width: 200px;
  border-radius: 8px;
  color: white;
  margin: 0;
}
</style>

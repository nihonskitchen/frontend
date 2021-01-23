<template>
  <div class="scan-container center-div">
    <div class="form-card">
      <h2>The data registerd.</h2>
      <client-only>
        <BarcodeData />
      </client-only>
      <button @click="newScan">Scan a new barcode</button>
    </div>
  </div>
</template>

<script>
import BarcodeData from "../components/BarcodeData.vue";

export default {
  components: {
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
      this.$store.commit("barcode/removeImg");
      this.$router.push("/barcode")
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
}
</style>

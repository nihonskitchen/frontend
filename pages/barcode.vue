<template>
  <div class="scan-container center-div">
      <div class="form-card">
        <h2>Center the barcode in the camera view:</h2>
        <client-only>
          <BarcodeScan />
        </client-only>        
      </div>
  </div>
</template>

<script>
import BarcodeScan from "../components/BarcodeScan.vue"

export default {
  components: {
    BarcodeScan
  },
  data: function () {
    return {
      //
    }
  },
  methods: {
    //
  },
};
</script>

<style>
.form-card {
  top: -30px;
}
</style>

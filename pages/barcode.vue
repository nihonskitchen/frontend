<template>
  <div class="scan-container center-div">
      <div class="form-card">
        <client-only>
          <BarcodeScan />
        </client-only>
      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      Quagga: null,
      code: "",
      showInfomation: false
    }
  },
  watch: {
    code: function (JAN) {
      this.checkBarcode();
    },
  },
  methods: {

  },
};
</script>


<style>
#cameraArea {
  overflow: hidden;
  width: 320px;
  height: 240px;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
}
#cameraArea video,
#cameraArea canvas {
  width: 320px;
  height: 240px;
}
.resultImg {
  width: 100%;
}
.imageBuffer {
  position: absolute;
  top: 30%;
  bottom: 30%;
  left: 10%;
  right: 10%;
}
/* オーバーレイ */
.drawingBuffer {
  position: absolute;
  left: 0;
}
.barcode-img img {
  width: 100%;
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  border: 2px solid #737A7B;
}
dl {
  text-align: left;
  width: 75%;
}
dt {
  font-weight: bold;
}
dd {
  padding-left: 10%;
  padding-bottom: 10px;
}
.barcode-btn {
  max-width: 200px;
  border-radius: 8px;
  color: white;
}
/*
button {
  width: 100px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #333;
  margin-top: 30px;
}
.resultCode {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.getMessage {
  color: red;
}
.invisible {
  display: none;
}
*/
</style>

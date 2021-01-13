<template>
  <div class="scan-container center-div">
      <div class="form-card">
        <client-only>
          <div id="cameraArea">
            <div class="imageBuffer"></div>
            <img v-if="code.length > 0" src="" alt="result" class="resultImg" />
          </div>
          <button class="barcode-btn" v-if="!showInfomation" @click="startScan">Scan</button>
          <button class="barcode-btn" v-if="!showInfomation" @click.prevent.stop="stopScan" aria-label="close">Stop</button>
          <div v-if="code.length > 0">
            <h3>Getting the barcode data.</h3>
          </div>
          <div v-if="showInfomation">
            <h2>Here is the barcode data.</h2>
            <div class="barcode-img">
              <img
                v-if="this.$store.state.barcode.details.front_pic != ''"
                :src="this.$store.state.barcode.details.front_pic"
              />
              <img
                v-if="this.$store.state.barcode.details.back_pic != ''"
                :src="this.$store.state.barcode.details.back_pic"
              />
            </div>
            <dl>
              <dt>Barcode</dt>
              <dd>{{ this.$store.state.barcode.details.jancode }}</dd>
              <dt>Name</dt>
              <dd>{{ this.$store.state.barcode.details.product_name }}</dd>
              <dt>Description</dt>
              <dd>{{ this.$store.state.barcode.details.description }}</dd>
            </dl>
            <button @click="loadAgain">Scan a new barcode</button>
          </div>
        </client-only>
      </div>
  </div>
</template>

<script>
import Quagga from "quagga";
// const api = "/barcode";

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
    loadAgain() {
      this.code = "";
      this.showInfomation = false;
      this.$store.commit('barcode/removeJancode');
      // this.$router.push('/barcode');
    },
    async checkBarcode() {
      let product = await this.$axios.$get(`/jancode/${this.code}`);
      // console.log(this.$store.state.barcode.details)
      this.$store.commit('barcode/showDetails', product);
      this.showInfomation = true;

      if (this.$store.state.barcode.details.notPresent === true) {
        this.$store.commit('barcode/addJancode', { jancode: this.code , product_name: "" });
        this.$store.commit('barcode/resetBarcode');
        setTimeout(() => {
          this.code = "";
          this.$router.push('/barcode-create');
        }, 2500);
      }
    },
    initQuagga() {
      this.Quagga = require("quagga");
      this.Quagga.onProcessed(this.onProcessed);
      this.Quagga.onDetected(this.onDetected);

      const config = {
        locate: true,
        numOfWorkers: navigator.hardwareConcurrency || 4,
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: "#cameraArea",
          constraints: {
            facingMode: "environment",
          },
        },
        frequency: 10,
        decoder: {
          readers: [
            'ean_reader' //, 'ean_8_reader'
          ],
          multiple: false
        },
        locator: {
          halfSample: true,
          patchSize: "medium",
        },
      };
      this.Quagga.init(config, this.onInit);
    },
    onInit(err) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Initialization finished. Ready to start");
      this.Quagga.start();
    },
    onDetected(success) {
      this.code = success.codeResult.code;
      const $resultImg = document.querySelector('.resultImg');
      $resultImg.setAttribute('src', this.Quagga.canvas.dom.image.toDataURL());
      this.Quagga.stop();
    },
    onProcessed(result) {
      const drawingCtx = this.Quagga.canvas.ctx.overlay;
      const drawingCanvas = this.Quagga.canvas.dom.overlay;

      if (result) {
        // detect: green
        if (result.boxes) {
          drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
          const hasNotRead = (box) => box !== result.box;
          result.boxes.filter(hasNotRead).forEach((box) => {
            this.Quagga.ImageDebug.drawPath(
              box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 }
            );
          });
        }

        // success: blue
        if (result.box) {
          console.log(result);
          this.Quagga.ImageDebug.drawPath(
            result.box, { x: 0, y: 1 }, drawingCtx, { color: "blue", lineWidth: 2 }
          );
        }

        // horizontal line on success: red
        if (result.codeResult && result.codeResult.code) {
          this.Quagga.ImageDebug.drawPath(
            result.line, { x: "x", y: "y" }, drawingCtx,  { color: "red", lineWidth: 3 }
          );
        }
      }
    },
    startScan() {
      this.code = "";
      this.initQuagga();
    },
    stopScan() {
      this.Quagga.offProcessed(this.onProcessed);
      this.Quagga.offDetected(this.onDetected);
      this.Quagga.stop();
    },


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
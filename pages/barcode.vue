<template>
  <div class="scan-container">
      <h1>Scan Barcode</h1>
      <no-ssr>
        <div id="cameraArea">
          <div class="imageBuffer"></div>
          <img v-if="code.length > 0" src="" alt="result" class="resultImg" />
        </div>
        <!--
        <div :class="{ invisible : code.length > 0 }" class="resultArea">
          <div>
            <p v-if="code.length > 0" class="getMessage">No information has been registered yet.</p>
            <p class="resultCode">{{ code }}</p>
            <button>Register Product</button>
          </div>
        </div>
        <div :class="{ invisible : !(code.length > 0) }">
          <p v-if="code.length > 0" class="getMessage">Do you want to info the following products?</p>
          <p class="resultCode">{{ code }}</p>
          <p class="resultCode">{{ product }}</p>
        </div>
        -->
        <p v-if="code.length > 0" class="getMessage">取得できました</p>
        <p class="resultCode">{{ code }}</p>
        <button @click="checkBarcode">checkBarcode</button>
        <p>{{ this.$store.state.barcode.details }}</p>
        <button @click="startScan">Scan</button>
        <button @click.prevent.stop="stopScan" aria-label="close">Stop</button>
      </no-ssr>
  </div>
</template>

<script>
import Quagga from 'quagga';
// const api = "/barcode";

export default {
  data: function() {
    return {
      Quagga: null,
      code: "",
      product: {},
      notPresent: true,
    }
  },
  watch: {
    code: function (JAN) {
      this.checkBarcode();
    },
  },
  methods: {
    initQuagga() {
      this.Quagga = require("quagga");
      this.Quagga.onProcessed(this.onProcessed);
      this.Quagga.onDetected(this.onDetected);

      const config = {
        locate: true,
        numOfWorkers: navigator.hardwareConcurrency || 4,
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: '#cameraArea',
          constraints: {
            facingMode: 'environment',
          },
        },
        frequency: 10,
        decoder: {
          readers: [
            'ean_reader', 'ean_8_reader'
          ],
          // debug: {
          //   drawBoundingBox: true,
          // },
          multiple: false
        },
        locator: {
          halfSample: true,
          patchSize: 'medium',
        },
        // src: null,
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
      // const $resultImg = document.querySelector('.resultImg');
      // $resultImg.setAttribute('src', this.Quagga.canvas.dom.image.toDataURL());
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
              box,
              { x: 0, y: 1 },
              drawingCtx,
              {
                color: "green",
                lineWidth: 2
              }
            );
          });
        }

        // success: blue
        if (result.box) {
          console.log(result);
          this.Quagga.ImageDebug.drawPath(
            result.box,
            { x: 0, y: 1 },
            drawingCtx,
            {
              color: "blue",
              lineWidth: 2
            }
          );
        }

        // horizontal line on success: red
        if (result.codeResult && result.codeResult.code) {
          this.Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            {
              color: "red",
              lineWidth: 3
            }
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
    async checkBarcode() {
      console.log("done");
      // console.log(this.code);
      let product = await this.$axios.$get(`/jancode/${this.code}`);
      // console.log(test);
      console.log(this.$store.state.barcode.details)
      this.$store.commit('barcode/showDetails', product);

      if (this.$store.state.barcode.details.notPresent === true) {
        console.log("page send");
        // this.$store.commit('barcode/addBarcode', `{ jancode: ${this.code} }`);
        // this.$store.commit('barcode/addJancode', this.code)
        this.$store.commit('barcode/addJancode', { jancode: this.code })
        this.$store.commit('barcode/resetBarcode')
        this.$router.push('/barcode-create')
      }
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
button {
  width: 100px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #333;
  margin-top: 30px;
}
.resultImg {
  width: 100%;
}
.resultCode {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.getMessage {
  color: red;
}
.imageBuffer {
    position: absolute;
    top: 30%;
    bottom: 30%;
    left: 10%;
    right: 10%;
    /* border: 2px solid #0000ff; */
    /* position: absolute;
    top: 0;
    left: 0; */
}
/* オーバーレイ */
.drawingBuffer {
  position: absolute;
  left: 0;
}
.invisible {
  display: none;
}
</style>
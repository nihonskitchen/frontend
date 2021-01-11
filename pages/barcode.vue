<template>
  <div class="container">
      <h1>Scan Barcode</h1>
      <div id="cameraArea">
        <div class="imageBuffer"></div>
        <img v-if="code.length > 0" src="" alt="result" class="resultImg" />
      </div>
    <!-- <p v-if="code.length > 0" class="getMessage">取得できました</p>
    <p class="resultCode">{{ code }}</p> -->
    <button @click="startScan">Scan</button>
    <button @click.prevent.stop="stopScan" aria-label="close">Stop</button>
  </div>
</template>

<script>
import Quagga from 'quagga';

export default {
  data: function() {
    return {
      Quagga: null,
      code: "",
    }
  },

  methods: {
    startScan() {
      this.code = "";
      this.initQuagga();
    },
    stopScan() {
      this.Quagga.offProcessed(this.onProcessed);
      this.Quagga.offDetected(this.onDetected);
      this.Quagga.stop();
    },
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
      // console.log(success);
      console.log("success");
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
  },
};
</script>


<style>
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
</style>
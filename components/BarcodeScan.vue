<template>
  <div>
    <div id="cameraArea">
      <div class="imageBuffer"></div>
      <img v-if="code.length > 0" src="" alt="result" class="resultImg" />
    </div>
  </div>
</template>

<script>
import Quagga from "quagga";

export default {
  // 自動カメラON/OFF・別ページに飛んだ時もOFF
  mounted: function () {
    this.code = "",
    this.startScan();
  },
  destroyed: function() {
    if (!!this.Quagga) this.stopScan();
  },
  //読み込んだコードを持ってrequire
  watch: {
    code: function (JAN) {
      this.checkBarcode();
    }
  },
  methods: {
    async checkBarcode() {
      try {
        // DB問合せ
        const product = await this.$axios.$get(`/barcode/${this.code}`, { responseType: "json" });

        // console.log(product);
        if (product.success === "Got the Ingredient by JANcode") {
          console.log("Data has saved");
          // this.$store.commit("barcode/setRequest", "PUT");
          this.stopScan();
          this.$store.commit("barcode/changeDetails", product.data.ingredient);
          this.$router.push("/barcode-result");
        }

      } catch (err) {
        console.log("Error");
        if (this.code) {
          this.$store.commit("barcode/addCode", this.code);
          console.log(this.$store.state.barcode.barcode_data);
          this.$router.push("/barcode-create");
        } else {
        this.code = "";
        this.stopScan();

        }

      }

    },
    // QuaggaJS初期設定
    initQuagga() {
      this.Quagga = require("quagga");
      this.Quagga.onProcessed(this.onProcessed);
      this.Quagga.onDetected(this.onDetected);

      const config = {
        locate: true,
        numOfWorkers: navigator.hardwareConcurrency || 4,
        inputStream: { name: "Live", type: "LiveStream", target: "#cameraArea", constraints: { width: 640, height: 480, facingMode: "environment" } },
        frequency: 10,
        decoder: { readers: [ 'ean_reader' ], multiple: false },
        locator: { halfSample: true, patchSize: "medium" },
      };
      this.Quagga.init(config, this.onInit);
    },
    
    // QuaggaJS起動
    onInit(err) {
      if (err) {
        console.log(err);
        return;
      };
      console.log("Initialization finished. Ready to start");
      this.Quagga.start();
    },
    
    // QuaggaJS バーコード検出時
    onDetected(success) {
      this.code = success.codeResult.code;
      const $resultImg = document.querySelector('.resultImg');
      const scanImage = this.Quagga.canvas.dom.image.toDataURL();
      this.$store.commit('barcode/addImg', scanImage); 
      // そもそもここが必要か再確認
      $resultImg.setAttribute('src', scanImage);
      // この下は必要
      this.Quagga.stop();
    },
    // QuaggaJS バーコード検出中、罫線表示
    onProcessed(result) {
      const drawingCtx = this.Quagga.canvas.ctx.overlay;
      const drawingCanvas = this.Quagga.canvas.dom.overlay;

      if (result) {
        // detect: green
        if (result.boxes) {
          drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
          const hasNotRead = (box) => box !== result.box;
          result.boxes.filter(hasNotRead).forEach((box) => {
            this.Quagga.ImageDebug.drawPath( box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 }　);
          });
        };
        // success: blue
        if (result.box) {
          this.Quagga.ImageDebug.drawPath( result.box, { x: 0, y: 1 }, drawingCtx, { color: "blue", lineWidth: 2 } );
        };
        // horizontal line on success: red
        if (result.codeResult && result.codeResult.code) {
          this.Quagga.ImageDebug.drawPath( result.line, { x: "x", y: "y" }, drawingCtx,  { color: "red", lineWidth: 3 } );
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

    // methods:{} ここまで
  },
  data: function () {
    return {
      Quagga: null,
      code: "",
    }
  },
}
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
  max-width: 250px;
  border-radius: 8px;
  color: white;
}
</style>

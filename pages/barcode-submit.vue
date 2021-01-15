<template>
  <div class="container center-div">
    <div class="form-card">
      <h2>Can you regist this data?</h2>
      <client-only>
        <BarcodeData mode="confirm" />
      </client-only>
      <div v-if="confirm">
        <button @click="resister">Register</button>
        <button @click="correct">Correct</button>
      </div>
      <div v-if="success">
        <p>This data has resistered!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      confirm: true,
      success: false,
      reqType: this.$store.state.barcode.reqType
    }
  },
  methods: {
    async resister() {
      this.confirm = false;
      // サーバへ送信
      if (this.reqType === "POST") {
        await this.$axios.$post(`/barcode/${this.$store.state.barcode.newSubmit.barcode}`);
        //登録確認作業が入る
        this.success = true;
      } else {
        // PUTの場合
        await this.$axios.$put(`/barcode/${this.$store.state.barcode.newSubmit.barcode}`);
        //登録確認作業が入る
        this.success = true;
      }

 
      // this.$store.state.barcode.newSubmit
    },
    correct() {
      this.$store.commit("barcode/changeDetails", this.$store.state.barcode.newSubmit)
      this.$router.push("/barcode-correct");
    }
  }
}
</script>

<style>
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
button {
  max-width: 200px;
}
</style>
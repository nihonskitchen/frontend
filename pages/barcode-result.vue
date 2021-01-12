<template>
  <div class="container center-div">
      <div class="form-card">
        <div v-if="showInfomation">
          <h2>This barcode data was registared!</h2>
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
        </div>
    </div>
  </div>
</template>

<script>
export default {

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
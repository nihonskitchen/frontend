<template>
  <div>
    <p>Please submit it to the database:</p>
    <form action="">
      <label for="barcode">Barcode</label>
      <input type="text" readonly :value="this.$store.state.barcode.details.barcode" />
      <label for="product_name">Product Name</label>
      <input type="text" v-model="product_name" />
      <!-- <label for="front_pic">Front Picture</label>
      <input type="file" id="front_picture" />
      <label for="back_pic">Back Picture</label>
      <input type="file" id="back_picture" /> -->
      <label for="description">Product description</label>
      <br />
      <textarea rows="4" cols="40" type="text" v-model="description" />
    </form>
  </div>
</template>

<script>
export default {
  props: [
    "mode",
    "newData"
  ],
  data: function() {
    return {
      product_name: this.$store.state.barcode.details.product_name,
      description: this.$store.state.barcode.details.description,
    }
  },
  computed: {
    newData: function() {
      barcode = this.$store.state.barcode.details.barcode,
      product_name = this.product_name,
      description = this.description
    }
  }
}
</script>

<style>
</style>

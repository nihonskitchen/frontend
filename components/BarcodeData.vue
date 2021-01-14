<template>
  <div>
    <!-- <div class="barcode-img" v-if="this.showInfomation">
      <img
        v-if="this.showInfomation"
        :src="`/images/${this.$store.state.barcode.details.front_pic}`"
      />
      <img
        v-if="this.$store.state.barcode.details.back_pic != ''"
        :src="this.$store.state.barcode.details.back_pic"
      />
    </div> -->
    <dl>
      <dt>Barcode</dt>
      <dd>{{ this.$store.state.barcode.details.barcode }}</dd>
      <dt>Name</dt>
      <dd v-if="(this.$store.state.barcode.details.product_name).length > 0">{{ this.$store.state.barcode.details.product_name }}</dd>
      <dd v-else> - </dd>
      <dt>Description</dt>
      <dd v-if="(this.$store.state.barcode.details.description).length > 0">{{ this.$store.state.barcode.details.description }}</dd>
      <dd v-else> - </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      //
    }
  },
  methods: {
    //
  }
}
</script>

<style>
/* .barcode-img img {
  width: 100%;
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  border: 2px solid #737A7B;
} */
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

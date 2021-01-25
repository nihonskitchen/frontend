<template>
  <div>
    <dl>
      <dt>Barcode:</dt>
      <dd>{{ this.barcode_data }}</dd>
      <dt>Name:</dt>
      <dd v-if="(this.ingredient_name) !== ''">{{ this.ingredient_name }}</dd>
      <dd v-else> - </dd>
      <dt>Description:</dt>
      <dd v-if="(this.description) !== ''">{{ this.description }}</dd>
      <dd v-else> - </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      barcode_data: "",
      ingredient_name: "",
      description: ""
    }
  },
  mounted: function() {
    this.barcode_data = this.$store.state.barcode.details.barcode_data;
    this.ingredient_name = this.$store.state.barcode.details.ingredient_name;
    this.description = this.$store.state.barcode.details.description;
  },
  methods: {
    //
  }
}
</script>

<style>
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

<template>
  <div>
    <img :src="this.$store.state.barcode.scanImage" class="scanImg" />
  </div>
</template>

<script>
export default {
//
}
</script>

<style>
.scanImg {
  width: 100px;
}
</style>

<template>
  <div class="container">
    <div class="toggle-btns">
      <button class="inactive-btn">My Recipes</button>
      <button class="active-btn">Favorites</button>
    </div>
    <My-Recipes />
    <Favorites />
  </div>
</template>

<script>
import MyRecipes from '../../components/MyRecipes.vue';
export default {
  components: { MyRecipes },};
</script>

<style>
.toggle-btns {
  /* position: relative; */
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  margin: 20px;
}
.inactive-btn {
  background-color: #c5c7ce;
  float: left;
  margin: 0px;
  width: 150px;
  height: 30px;
  font-size: 16px;
}
.active-btn {
  float: left;
  background-color: #e76c73;
  color: white;
  margin: 0px;
  width: 150px;
  height: 30px;
  font-size: 16px;
}
</style>
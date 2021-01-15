<template>
  <div class="container wrapper">
    <div class="toggle-btns">
      <div v-if="myRecipes">
        <button class="active-btn my-recipes">My Recipes</button>
        <button class="inactive-btn favorites" @click.prevent="toggleView">
          Favorites
        </button>
      </div>
      <div v-if="favorites">
        <button class="inactive-btn my-recipes" @click.prevent="toggleView">
          My Recipes
        </button>
        <button class="active-btn favorites">Favorites</button>
      </div>
    </div>
    <div v-if="myRecipes" class="details">
      <MyRecipes />
    </div>
    <div v-if="favorites" class="details">
      <Favorites />
    </div>
  </div>
</template>

<script>
import MyRecipes from "../../components/MyRecipes.vue";

export default {
  data() {
    return {
      myRecipes: true,
      favorites: false,
    };
  },
  methods: {
    toggleView() {
      this.myRecipes = !this.myRecipes;
      this.favorites = !this.favorites;
    },
  },
};
</script>

<style>
.toggle-btns {
  /* position: relative; */
  display: flex;
  /* width: 100%; */
  justify-content: center;
  align-content: center;
  margin: 0px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.inactive-btn {
  background-color: #c5c7ce;
  float: left;
  margin: 0px;
  width: 150px;
  height: 30px;
  font-size: 16px;
  border: 0px;
}
.active-btn {
  float: left;
  background-color: #e76c73;
  color: white;
  margin: 0px;
  width: 150px;
  height: 30px;
  font-size: 16px;
  border: 0px;
}
.wrapper {
  display: inline-block;
}
.details {
  display: flex;
  position: relative;
  justify-content: center;
}
.my-recipes {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 150px;
}
.favorites {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 150px;
}
</style>
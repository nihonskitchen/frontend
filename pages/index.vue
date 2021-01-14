<template>
  <div class="container">
    <div class="headline">
      <h2>Welcome to the latest recipes in Japan!</h2>
    </div>
    <div class="home-page">
      <div
        class="card column"
        v-for="recipe in this.$store.state.recipes.recipes"
        :key="recipe.recipe_id"
      >
        <nuxt-link to="/recipe-details">
          <div class="recipe-inner" @click="passRecipeData(recipe.recipe_id)">
            <img
              :src="require(`~/assets/resources/${recipe.picture_url}`)"
              alt=""
            />
          </div>
          <div class="detail">
            <h3>
              {{ recipe.recipe_name }}
            </h3>
            <p>
              {{ recipe.owner_comment }}
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("recipes/getCardDetails");
  },
  methods: {
    passRecipeData(id) {
      this.$store.commit("recipes/showRecipeDetails", id);
      console.log(id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.headline {
  padding: 20px;
  margin-top: 20px;
}
.home-page {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
h2 {
  margin-bottom: 30px;
  text-align: center;
}
h3 {
  text-align: center;
  color: #212121;
  font-size: 22px;
  text-decoration: none;
  padding-top: 10px;
}
h4 {
  color: #e76c73;
  font-size: 14px;
  text-decoration: none;
}
p {
  color: #888;
  font-size: 16px;
  text-decoration: none;
  padding: 20px;
}
.recipe-inner img {
  display: block;
  position: relative;
  width: 100%;
  max-width: 360px;
  max-height: 200px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 10px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 0px;
  text-align: center;
  background-color: #f1f1f1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  min-width: 360px;
  max-width: 360px;
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px 0 rgba(179, 119, 24, 0.616);
}
.column {
  float: left;
  width: 25%;
  padding: 0px;
  margin: 20px;
}
@media screen and (max-width: 992px) {
  .column {
    width: 50%;
    display: block;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}
</style>
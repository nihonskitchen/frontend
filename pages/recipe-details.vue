<template>
  <div class="container center-div">
    <div class="ingredients-list">
      <h1>{{ this.$store.state.recipes.selectedRecipe.recipe_name }}</h1>
      <br />
      <img class="recipe-img" :src="require(`~/assets/resources/${this.$store.state.recipes.selectedRecipe.picture_url}`)" alt="">
      <div><h2>Ingredients</h2></div>
      <div
        class="grid-item grid-padding"
        v-for="ingredient in this.$store.state.recipes.selectedRecipe
          .ingredients"
        :key="ingredient.ingredient_id"
      >
        <ul>
          <li>
            {{ ingredient.amount }}&nbsp;{{ ingredient.units }}&nbsp;{{ ingredient.ingredient_name }}
            
          </li>
        </ul>
      </div>

      <div><h2>Steps</h2></div>
      <div
        class="grid-item grid-padding"
        v-for="step in this.$store.state.recipes.selectedRecipe.steps"
        :key="step.step_num"
      >
        <ul>
          <li>
            {{ step.details }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
    text-align: center;
    padding: 10px;
}
.ingredients-list {
  /* left: 50%; */
  display: grid;
  grid-template-columns: auto;
  max-width: 360px;
  /* justify-content: center; */
}
.grid-item {
  justify-content: center;
  /* margin-bottom: 10px; */
  margin: 0px;
  /* padding: 10px; */
  /* left: 50%; */
}
.grid-padding {
    padding: 10px;
}
.recipe-img {
  display: block;
  position: relative;
  width: 100%;
  max-width: 360px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
<template>
  <div class="container">
    <div class="form-card">
      <div>
        <h1>Create a Recipe</h1>
      </div>
      <div>
        <label for="input">Dish name</label>
        <input type="text" placeholder="Ex. Delicious Mochi" />
        <label for="input">Prep time (in minutes)</label>
        <input type="text" placeholder="Ex. 45" />
        <label for="input">Servings</label>
        <input type="text" placeholder="Ex. 4" />
      </div>
      <div>
        <h2>Ingredients</h2>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <label for="ingredient-name">Name</label>
        </div>
        <div class="grid-item">
          <label for="amount">Amount</label>
        </div>
        <div class="grid-item">
          <label for="units">Units</label>
        </div>
        <div class="grid-item">
          <input class="ingredient-name" type="text" placeholder="Ex. tofu" />
        </div>
        <div class="grid-item">
          <input class="amount" type="text" placeholder="200" />
        </div>
        <div class="grid-item">
          <select name="units" id="units">
            <option value="grams">grams</option>
            <option value="ml">ml</option>
            <option value="slice">slice</option>
            <option value="pinch">pinch</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <h2>Steps</h2>
        </div>
        <div>
          <input type="text" placeholder="Ex. Drain the tofu.">
        </div>
      </div>
      <div>
        <div>
          <h2>Upload Picture</h2>
        </div>
        <div>
          <input type="file" id="foodPic">
          <input type="submit">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ingredient-name {
  width: 100px;
}
.amount {
  width: 50px;
}
#units {
  padding: 8px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  /* background-color: #2196F3; */
  /* padding: 10px; */
}
.grid-item {
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  /* padding: 20px; */
  /* font-size: px; */
  text-align: center;
}
</style>
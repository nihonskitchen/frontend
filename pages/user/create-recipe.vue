<template>
  <div class="container">
    <div class="recipe-card">
      <div>
        <h1>Create a Recipe</h1>
      </div>
      <div>
        <label for="input">Dish name</label>
        <input
          v-model="dish_name"
          type="text"
          placeholder="Ex. Delicious Mochi"
        />
        <label for="input">Prep time (in minutes)</label>
        <input type="text" placeholder="Ex. 45" />
        <label for="input">Servings</label>
        <input type="text" placeholder="Ex. 4" />
      </div>
      <div class="subheader">
        <h2>Ingredients</h2>
      </div>
      <div class="ingredients-container" id="ingredients-container">
        <div class="grid-item">
          <label for="ingredient-name">Name</label>
        </div>
        <div class="grid-item">
          <label for="amount">Amount</label>
        </div>
        <div class="grid-item">
          <label for="units">Units</label>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <input class="ingredient-name" type="text" placeholder="Ex. tofu" />
        </div>
        <div class="grid-item">
          <input class="amount" type="text" placeholder="200" />
        </div>

        <div class="grid-item">
          <select name="units" id="units" class="units">
            <option value="grams">grams</option>
            <option value="ml">ml</option>
            <option value="slice">slice</option>
            <option value="pinch">pinch</option>
          </select>
        </div>

        <div class="grid-item">
          <button class="add-btn" @click.prevent="addIngredientField">+</button>
        </div>
      </div>
      <div>
        <div class="subheader">
          <h2>Steps</h2>
        </div>
        <div class="steps-container" id="steps-container">
          <div class="grid-item">
            <input
              class="steps-input"
              type="text"
              placeholder="Ex. Drain the tofu."
            />
          </div>
          <div class="grid-item">
            <button class="add-btn" @click.prevent="addStepsField">+</button>
          </div>
        </div>
      </div>
      <div>
        <div class="subheader">
          <h2>Upload Picture</h2>
        </div>
        <div>
          <input
            type="file"
            id="foodPic"
            @change="onFileSelected"
            accept="image/*"
          />
          <button class="upload-btn" @click="onUpload">Upload Picture</button>
        </div>
        <div>
          <!-- <input type="submit" id="submit-recipe" /> -->
          <button class="submit-btn">Submit Recipe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      dish_name: "",
      selectedFile: null,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      firebase
        .storage()
        .ref("recipes/" + this.$store.state.users.user.uid + "/recipe-pic.jpg")
        .put(this.selectedFile)
        .then(
          function () {
            console.log("successfully uploaded");
          },
          (error) => {
            console.log(error.message);
          }
        );
    },
    addIngredientField() {
      let id = 1;

      let container = document.getElementById("ingredients-container");

      let col1 = document.createElement("div");
      let col2 = document.createElement("div");
      let col3 = document.createElement("div");
      let col4 = document.createElement("div");
      let emptyDiv = document.createElement("div");

      col1.class = "grid-item";
      col2.class = "grid-item";
      col3.class = "grid-item";
      col4.class = "grid-item";

      let inputName = document.createElement("input");
      inputName.type = "text";
      inputName.className = "ingredient-name";

      let inputAmount = document.createElement("input");
      inputAmount.type = "text";
      inputAmount.className = "amount";

      let inputUnit = document.createElement("select");
      // inputUnit.type = "select";
      let opt1 = document.createElement("option");
      opt1.value = "grams";
      opt1.innerText = "grams";
      inputUnit.appendChild(opt1);

      let opt2 = document.createElement("option");
      opt2.value = "ml";
      opt2.innerText = "ml";
      inputUnit.appendChild(opt2);

      let opt3 = document.createElement("option");
      opt3.value = "slice";
      opt3.innerText = "slice";
      inputUnit.appendChild(opt3);

      let opt4 = document.createElement("option");
      opt4.value = "pinch";
      opt4.innerText = "pinch";
      inputUnit.appendChild(opt4);

      // inputUnit.option = "grams";
      inputUnit.className = "units";

      col1.appendChild(inputName);
      col2.appendChild(inputAmount);
      col3.appendChild(inputUnit);
      col4.appendChild(emptyDiv);

      container.appendChild(col1);
      container.appendChild(col2);
      container.appendChild(col3);
      container.appendChild(col4);
    },
    addStepsField() {
      let container = document.getElementById("steps-container");

      let col1 = document.createElement("div");
      let emptyDiv = document.createElement("div");

      col1.class = "grid-item";
      emptyDiv.class = "grid-item";

      let inputStep = document.createElement("input");
      inputStep.type = "text";
      inputStep.className = "steps-input";

      col1.appendChild(inputStep);

      container.appendChild(col1);
      container.appendChild(emptyDiv);
    },
  },
};
</script>

<style>
.add-btn {
  width: 26px;
  background-color: #e76c73;
  border: 0px;
  height: 26px;
  margin-top: 5px;
  margin-left: 0px;
  border-radius: 8px;
  color: white;
}
.add-btn:hover {
  width: 26px;
  background-color: #e5536a;
  border: 0px;
  height: 26px;
  margin-top: 5px;
  margin-left: 0px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

.amount {
  width: 50px;
}
.units {
  width: 80px;
  height: 35px;
  margin-top: 3px;
}
.ingredients-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.ingredient-name {
  width: 100px;
}
.grid-item {
  justify-content: left;
  margin-bottom: 10px;
}
.ingredients-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.recipe-card {
  position: relative;
  top: 80px;
  /* bottom: 100px; */
  /* margin-top: 80px; */
  /* margin-bottom: 100px; */
  margin: 0 auto 100px;
  align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  background-color: #f4f2ee;
  border-radius: 8px;
  min-width: 360px;
  max-width: 360px;
}
.steps-container {
  display: grid;
  grid-template-columns: auto auto;
}
.steps-input {
  width: 255px;
}
.subheader {
  margin-top: 20px;
  margin-bottom: -10px;
}
.upload-btn {
  width: 150px;
  font-size: 15px;
  border-radius: 8px;
  padding: 5px;
  background-color: #f7b981;
  border: 0px;
  margin-bottom: 20px;
  margin-top: 0px;
  color: white;
}
.upload-btn:hover {
  width: 150px;
  font-size: 15px;
  border-radius: 8px;
  padding: 5px;
  background-color: #ffa95d;
  border: 0px;
  margin-bottom: 20px;
  margin-top: 0px;
  color: white;
}
.submit-btn {
  width: 150px;
  font-size: 15px;
  border-radius: 8px;
  padding: 5px;
  background-color: #e76c73;
  border: 0px;
  margin: 0px;
  color: white;
}
</style>
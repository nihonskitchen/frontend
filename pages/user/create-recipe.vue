<template>
  <div>
    <form @submit.prevent class="recipe-card">
      <h1>Create a Recipe</h1>
      <div>Complete this form to share your recipe with others</div>
      <div>
        <input
          type="text"
          placeholder="Dish name"
          v-model="recipe.recipe_name"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Prep time (in minutes)"
          v-model="recipe.time"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Number of servings"
          v-model="recipe.servings"
          required
        />
      </div>
      <h2 class="margins">Ingredients</h2>
      <!-- <div>{{ recipe.ingredients }}</div> -->
      <div v-for="(ingredient, index) in recipe.ingredients" :key="ingredient">
        {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
        <button id="remove-btn" @click="removeIngredient(index)">X</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Ingredient name (Example: mirin)"
          v-model="newIngredient.name"
        />
        <input
          type="text"
          placeholder="Ingredient amount (Example: 200)"
          v-model="newIngredient.amount"
        />
        <label for="units">Measurement:</label>
        <select name="unit" id="unit" class="unit" v-model="newIngredient.unit">
          <option v-for="option in unit_options" :key="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div>
        <button class="add-btn" @click="addNewIngredient">
          Add Ingredient
        </button>
      </div>
      <h2 class="margins">Steps</h2>
      <!-- <div>{{ recipe.steps }}</div> -->
      <div v-for="(step, index) in recipe.steps" :key="step">
        {{ step }}
        <button id="remove-btn" @click="removeStep(index)">X</button>
      </div>
      <div>
        <input
          id="step"
          type="text"
          placeholder="Example: Add water"
          v-model="newStep"
        />
      </div>
      <div>
        <button class="add-btn" @click="addNewStep">Add Step</button>
      </div>
      <h2 class="margins">Upload Picture</h2>
      <div>
        <input
          type="file"
          id="foodPic"
          @change="onFileSelected"
          accept="image/*"
        />
      </div>
      <div>
        <button class="add-btn" @click="onUpload">Upload Picture</button>
      </div>
      <div>
        <button class="submit-btn margins" type="submit" @click="addNewRecipe">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  mounted() {
    this.getUserID();
  },
  data() {
    return {
      unit_options: ["slice", "pinch", "gram", "ml", "piece"],
      newIngredient: {},
      newStep: "",
      recipeID: null,
      selectedFile: null,
      recipe: {
        user_id: null,
        recipe_name: "",
        picture_url: "",
        time: "",
        likes: "",
        dislikes: "",
        prices: "",
        servings: "",
        is_visible: true,
        owner_comment: "",
        ingredients: [],
        steps: [],
      },
    };
  },
  methods: {
    async addNewRecipe() {
      console.log("POST req sent", this.recipe);
      await this.$axios.$post("/recipes", this.recipe)
      .then((res) => {
        this.$router.push("/user/cookbook")
      })
      console.log("POST req completed");
    },
    addNewIngredient() {
      this.recipe.ingredients.push(this.newIngredient);
      this.newIngredient = {};
    },
    removeIngredient(index) {
      console.log("remove ingredient");
      this.recipe.ingredients.splice(index, 1);
    },
    addNewStep() {
      this.recipe.steps.push(this.newStep);
      this.newStep = "";
    },
    getUserID() {
      this.recipe.user_id = firebase.auth().currentUser.uid;
      console.log("USER ID =", this.recipe.user_id);
    },
    removeStep(index) {
      console.log("remove step", index);
      this.recipe.steps.splice(index, 1);
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      console.log(this.selectedFile);
      let refPath = `recipes/${this.$store.state.users.user.uid}/${this.selectedFile.name}`;
      firebase
        .storage()
        .ref(refPath)
        .put(this.selectedFile)
        .then(
          () => {
            this.recipe.picture_url = refPath.substr(0, refPath.lastIndexOf(".")) + "_500x500.jpg";
            console.log("RECIPE =", this.recipe);
            alert("Picture uploaded successfully!");
          },
          (error) => {
            console.log("error", error.message);
          }
        );
    },
  },
};
</script>

<style>
.add-btn {
  width: 200px;
  font-size: 15px;
  border-radius: 8px;
  padding: 5px;
  background-color: #f7b981;
  border: 0px;
  margin: 0px;
  color: white;
  cursor: pointer;
}
.recipe-card {
  position: relative;
  top: 80px;
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
#remove-btn {
  width: 20px;
  height: 20px;
  padding: 0px;
  margin: 0px;
  border-radius: 4px;
}
.submit-btn {
  border-radius: 8px;
  cursor: pointer;
}
.margins {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>


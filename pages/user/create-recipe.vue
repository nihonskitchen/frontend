<template>
  <div>
    <form @submit.prevent class="info-card">
      <h1>Create a Recipe</h1>
      <div>Complete this form to share your recipe with others</div>
      <div>
        <input
          type="text"
          placeholder="Dish name"
          v-model="recipe.recipe_name"
          maxlength="30"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Prep time (in minutes)"
          v-model="recipe.time"
          maxlength="3"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Number of servings"
          v-model="recipe.servings"
          maxlength="3"
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Short recipe description"
          v-model="recipe.owner_comment"
          maxlength="100"
          required
        />
      </div>
      <h2 class="margins">Ingredients</h2>
      <div v-for="(ingredient, index) in recipe.ingredients" :key="ingredient">
        {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}
        <button class="remove-btn" @click="removeIngredient(index)">x</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Ingredient name (Example: mirin)"
          v-model="newIngredient.name"
          maxlength="50"
        />
        <input
          type="text"
          placeholder="Ingredient amount (Example: 200)"
          v-model="newIngredient.amount"
          maxlength="4"
        />
        <div>Measurement:</div>
        <select name="unit" id="unit" class="unit" v-model="newIngredient.unit">
          <option value="" hidden>Select one</option>
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
      <div v-for="(step, index) in recipe.steps" :key="step">
        {{ step }}
        <button class="remove-btn" @click="removeStep(index)">x</button>
      </div>
      <div>
        <input
          id="step"
          type="text"
          placeholder="Example: Add water"
          v-model="newStep"
          maxlength="75"
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
          required
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
      unit_options: [
        "cup",
        "grams",
        "ml",
        "ounce",
        "piece",
        "pinch",
        "pound",
        "slice",
        "tablespoon",
        "teaspoon",
      ],
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
      await this.$axios.$post("/recipes", this.recipe).then((res) => {
        this.$router.push("/user/cookbook");
      });
    },
    addNewIngredient() {
      this.recipe.ingredients.push(this.newIngredient);
      this.newIngredient = {};
    },
    removeIngredient(index) {
      this.recipe.ingredients.splice(index, 1);
    },
    addNewStep() {
      this.recipe.steps.push(this.newStep);
      this.newStep = "";
    },
    getUserID() {
      this.recipe.user_id = firebase.auth().currentUser.uid;
    },
    removeStep(index) {
      this.recipe.steps.splice(index, 1);
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      let refPath = `recipes/${this.$store.state.users.user.uid}/${this.selectedFile.name}`;
      firebase
        .storage()
        .ref(refPath)
        .put(this.selectedFile)
        .then(
          () => {
            this.recipe.picture_url =
              refPath.substr(0, refPath.lastIndexOf(".")) + "_500x500.jpg";
            alert("Picture uploaded successfully!");
          },
          (error) => {
            console.error("error", error.message);
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
.margins {
  margin-top: 20px;
  margin-bottom: 10px;
}
.unit {
  width: 100px;
  margin: 10px;
  height: 25px;
}
</style>


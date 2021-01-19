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
      <div>{{ recipe.ingredients }}</div>
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
      <div>{{ recipe.steps }}</div>
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
  data() {
    return {
      unit_options: ["slice", "pinch", "gram", "ml", "piece"],
      newIngredient: {},
      newStep: "",
      recipeID: null,
      selectedFile: null,
      recipe: {
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
      async runboth() {
          await function() {return this.addNewRecipe()}
          await function() {return this.onUpload()}
      },
    addNewRecipe() {
      const db = firebase.firestore();
      db.settings = { timestampsInSnapshops: true };

      const recipeCollection = db.collection("recipes");
    //   console.log("recipe beforehand", this.recipe)
      this.recipe.picture_url = this.recipe.picture_url.replace('.jpg', '_500x500.jpg');
      console.log("URL", this.recipe.picture_url);

      recipeCollection
        .add(this.recipe)
        .then((docRef) => {
          this.recipeID = docRef.id;
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => console.error("Error adding document: ", error));
    },
    addNewIngredient() {
      this.recipe.ingredients.push(this.newIngredient);
      this.newIngredient = {};
    },
    removeIngredient() {
      console.log("remove ingredient");
    },
    addNewStep() {
      this.recipe.steps.push(this.newStep);
      this.newStep = "";
    },
    removeStep() {
      console.log("remove step");
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
        console.log(this.selectedFile)
        let refPath = `recipes/${this.$store.state.users.user.uid}/${this.selectedFile.name}`
      firebase
        .storage()
        .ref(refPath)
        .put(this.selectedFile)
        // .getDownloadURL()
        // .then(function (url) {
        //   //   this.recipe.picture_url = url;
        //   console.log("URL =", url);
        // })
        .then(
           () => {
            this.recipe.picture_url = refPath;
            console.log("RECIPE =", this.recipe)
            alert("successfully uploaded");
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
.submit-btn {
  border-radius: 8px;
  cursor: pointer;
}
.margins {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
<template>
  <div class="container">
    <div class="headline">
      <!-- <h2 v-if="this.$store.state.users.user !== null"> -->
        <!-- Welcome to {{this.$store.state.users.profile.name}} the latest recipes in Japan! -->
      <!-- </h2> -->
      <h2>Welcome to the latest recipes in Japan!</h2>
    </div>
    <div class="home-page">
      <button @click="img">button</button>
      <div
        class="card column"
        v-for="recipe in this.recipes"
        :key="recipe.doc_id"
      >
        <nuxt-link to="/recipe-details">
          <div class="recipe-inner" @click="passRecipeData(recipe.doc_id)">
            
              <!-- <img
                :src="require(`nihonskitchen.appspot.com/${recipe.picture_url}`)"
                alt=""
              /> -->
            <p>{{ recipe.recipe_name }}</p>
            <p>{{ recipe.owner_comment }}</p>
            <p>TIME: {{ recipe.owner_comment }}</p>
          </div>
        </nuxt-link>
      </div>


      <!-- <div
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
      </div> -->
    </div>
  </div>
</template>

<script>
import $axios from "@nuxtjs/axios";
import firebase from "firebase";

export default {
  asyncData(){
    return{
      title: "Nihon's Kitchen"
    }
  },
  head(){
    return {
      title: this.title
    }
  },
  data(){
    return {
      recipes: [],
      imgdata: []
    }
  },
  mounted() {
    try {
      this.getRecipes();
    } catch (err) {
      console.log(err);
      this.$store.commit("recipes/getCardDetails");
    }
  },
  methods: {
    async getRecipes() {
      console.log("done"); 
      const response = await this.$axios.get("/recipes", { responseType: "json" })
      // this.recipes = response.data.data.recipes;
      const recipeCards = [];      
      for (const i of response.data.data.recipes) {
        // console.log(i);
        this.recipes.push(i);
      }
      // this.recipes = recipeCards
      console.log(this.recipes);
      // console.log(this.recipes);
    },
    passRecipeData(id) {
      this.$store.commit("recipes/showRecipeDetails", id);
      console.log(id);
    },

   img() {
      let storage = firebase.storage();
      var storageRef = storage.ref();
      var imagesRef = storageRef.child('recipes/CmajJru8j4gtt2UunbqWvKSblwb2');
      console.log(imagesRef);
      imagesRef.listAll().then(res => {
        console.log("res.items");
        console.log(res.items);
        res.items[0].getDownloadURL().then(url => console.log(`URL: ${url}`));
      })
      var imgFirestoreRef = imagesRef.child('melon_500x500.jpg');

      // ファイルのURLを取得する
      imgFirestoreRef.getDownloadURL().then(function(url){
        console.log("url");
        console.log(url);

        // var image = document.getElementById("imageFirestore");
        // image.style.backgroundImage = "url("+url+")";
        // document.getElementById('filename1').innerHTML = '<a href="' + url + '">' + imgFirestoreRef.name + '</a>';
      }).catch(function(error) {
        // document.getElementById('filename2').innerHTML = error.message;
        // console.log(error);
      });

      // 下記二つは同じもの
      // let pathReference = storage.refFromURL("gs://nihonskitchen.appspot.com").child("recipes").child("CmajJru8j4gtt2UunbqWvKSblwb2");
      // let pathReference = storage.refFromURL("gs://nihonskitchen.appspot.com").child("recipes").child("CmajJru8j4gtt2UunbqWvKSblwb2");
      // let list = storage.ref("recipes/CmajJru8j4gtt2UunbqWvKSblwb2");
      // // console.log(pathReference);
      // console.log(list);

      // list.listAll().then(function(res) {
      //   console.log(res);
      //   console.log("items");
      //   console.log(res.items[0]);
      //   // res.prefixes.forEach(function(folderRef) {
      //   //   // All the prefixes under listRef.
      //   //   // You may call listAll() recursively on them.
      //   // });
      //   // res.items.forEach(function(itemRef) {
      //   //   // All the items under listRef.
      //   // });
      // }).catch(function(error) {
      //   // Uh-oh, an error occurred!
      // });

      // list.once('value', (snapshot) => {
      //   snapshot.forEach((childSnapshot) => {
      //     var childKey = childSnapshot.key;
      //     var childData = childSnapshot.val();
      //     console.log(childKey);
      //     console.log(childData);
      //   });
      // });


      // var gsReference = storage.refFromURL('gs://bucket/code128_360x200.jpg');
      //   //StorageのURLを参照
      //   let storageref = Storage.storage().reference(forURL: "gs://nihonskitchen.appspot.com").child("Recipes");
      //   //画像をセット
      //   imageView.sd_setImage(with: storageref)
   }

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
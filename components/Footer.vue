<template>
  <footer>
	  <nav>
        	<input
				type="text"
				placeholder="Search"
				v-model="searchWord"
				@change="searching" />
			<nuxt-link to="/barcode">Scan Barcode</nuxt-link>
			<nuxt-link to="/user/create-recipe">Add Recipe</nuxt-link>
	  </nav>
  </footer>
</template>

<script>
import firebase from "firebase";

export default {
	data() {
		return {
      searchWord: "",
      searchRecipes: []
		}
	},
	methods: {
		async searching() {
			try {
        this.searchRecipes = [];
				const data = await this.$axios.$get(`/recipes/name/${this.searchWord}`);
				// console.log(data.data.recipes);
				if (data.data.recipes === null) {
					this.$store.commit("search/setResultFalse");
				} else {
          // console.log("success");
          data.data.recipes.map((element) => {
            this.searchRecipes.push(element);
          });

          self = this;
          function imgLoad() {
            let ref = firebase.storage().ref();
            self.searchRecipes.map((element) => {
              ref
              .child(element.picture_url)
              .getDownloadURL()
              .then((url) => (element.picture_url = url));
            });
            self.$store.state.recipes.recipes = self.searchRecipes;
            // console.log("after");
            return self.searchRecipes;
          }
          // console.log("before");
          imgLoad();
        }
        if (this.$route.path !== "/search") {
          console.log("03");
          this.$router.push("/search");
        }
				return;
			} catch (err) {
				console.log("error");
				console.log(err);
			}
			// try {
			// 	console.log(this.searchWord);

			// } catch (err) {
			// 	console.log(err);
			// }
    },
    getRecipes(data) {
      data.map((element) => {
        this.recipes.push(element);
      });
      async () => {
        let ref = firebase.storage().ref();
        this.recipes.map((element) => {
          ref
          .child(element.picture_url)
          .getDownloadURL()
          .then((url) => (element.picture_url = url));
        });
        this.$store.state.recipes.recipes = this.recipes;
        return this.recipes;

      // // I don't know why variable of "this" to refer is need....
      // let self = this;
      // // this.$axios.get("/recipes") -> res.data.data.recipes
      // this.$axios
      //   .$get("/recipes")
      //   .then((res) => res.data.recipes)
      //   .then((data) => {
      //   })
      //   .then(
      }
    }
	}
}
</script>

<style>
footer {
    position: fixed;
	/* position: sticky; */
	bottom: 0px;
    left: 0px;
    width: 100%;
	padding: 15px 30px;
	background-color: #E76C73;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

nav {
	display: flex;
	align-items: center;
	margin: 0 -15px;
	/* color: white; */
}
nav a {
	display: block;
	margin: 0 15px;
	color: #000;
	
}
</style>
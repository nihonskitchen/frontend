<template>
  <footer>
	  <nav>
        	<input
				type="text"
				placeholder="Search"
				v-model="searchWord"
				@change="searching"
        @focus="clear" />
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
  mounted() {
    this.$store.subscribe((mutation, state) => {
      console.log(`mutation.type: ${mutation.type}`);
      if (mutation.type === 'recipes/setRecipes') {
        console.log('call mutation!');
        console.log(state.recipes.recipes);
      }
    });
  },
  methods: {
    clear() {
      console.log('clear');
      this.searchWord = "";
    },
		async searching() {
			try {
        this.searchRecipes = [];
        const data = await this.$axios.$get(`/recipes/name/${this.searchWord}`);
        this.$store.commit("search/setResultFalse");
        
				if (data.data.recipes !== null) {
          data.data.recipes.map((element) => {
            this.searchRecipes.push(element);
          });

          // This "self" declaration is necessary.
          // (But sorry I don't know why) Please don't remove.
          self = this;
          function imgLoad() {            
            self.searchRecipes.map((element) => {
              const ref = firebase.storage().ref();
              ref
                .child(element.picture_url)
                .getDownloadURL()
                .then((url) => (element.picture_url = url));
            });
            return self.searchRecipes;
          }
          imgLoad();
          this.$store.commit("search/setResultTrue");
        }

        this.$store.commit("recipes/setRecipes", this.searchRecipes);
        this.$router.push("/search");
        return;
        
			} catch (err) {
				console.log("error");
				console.log(err);
      }
    },
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
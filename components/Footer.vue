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
export default {
	data() {
		return {
			searchWord: "",
		}
	},
	methods: {
		searching() {
			try {
				console.log(this.searchWord);
				this.$axios.$get(`/recipes/name/${this.searchWord}`);
			} catch (err) {
				console.log(err);
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
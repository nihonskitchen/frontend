<template>
  <footer>
	  <nav>
          <input type="text" placeholder="Search">
          <nuxt-link to="/barcode">Scan Barcode</nuxt-link>
	  </nav>
  </footer>
</template>

<style>
footer {
    position: fixed;
    bottom: 0;
    left: 0;
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
}
nav a {
	display: block;
	margin: 0 15px;
	color: #000;
}
</style>
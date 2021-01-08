<template>
  <header>
	  <div class="title" ><nuxt-link to="/" id="main-title">Nihon's Kitchen</nuxt-link></div>
	  <nav>
		  <nuxt-link to="/cookbook">Cookbook</nuxt-link>
		  <nuxt-link to="/user-profile">Profile</nuxt-link>
	  </nav>
  </header>
</template>

<style>
header {
	/* position: fixed;
    top: 0;
    left: 0; */
    width: 100%;
	padding: 15px 30px;
	background-color: #F4F2EE;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}
#main-title {
	color: #000;
}
header .title {
	
	font-size: 24px;
	font-weight: 900;
	text-transform: uppercase;
	color: #000;
}
nav {
	display: flex;
	align-items: center;
	margin: 0 -15px;
}
nav a {
	display: block;
	margin: 0 15px;
}
</style>
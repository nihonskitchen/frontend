<template>
  <div id="main-div">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body {
  background-color: #f4f2ee;
  color: #142C28;
}
.center-div {
  min-height: 90vh;
  display: flex;
  justify-content: center;
}
.container {
  min-height: 90vh;
  width: 100%;
}
a {
  text-decoration: none;
}
p {
  margin-bottom: 15px;
}
p:last-of-type {
  margin-bottom: 0px;
}
form {
  position: relative;
  justify-content: space-evenly;
  align-content: center;
}
.form-card {
  position: relative;
  align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  background-color: #f4f2ee;
  border-radius: 8px;
  min-width: 360px;
  max-width: 360px;
}
#main-div {
  display: inherit;
  padding: 0 0 100px 0;
}

</style>
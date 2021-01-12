<template>
  <div class="mainDiv">
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
  /* min-height: 100vh; */
  /* padding-bottom: 100px; */
}
.center-div {
  min-height: 90vh;
  display: flex;
  justify-content: center;
}
.container {
  min-height: 90vh;
  width: 100%;
  /* margin: 0 auto; */
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
button {
  padding: 5px;
  width: 100%;
  margin: 5px;
  background-color: #e76c73;
  border: 0px;
  font-size: 15px;
  border-radius: 0px;
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
  /* margin-left: auto;
  margin-right: auto; */
}
.mainDiv {
  display: inherit;
  padding: 0 0 100px 0;
  /* flex-direction: column;
  flex-wrap: wrap; */
}

</style>
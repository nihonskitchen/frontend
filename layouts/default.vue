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
a {
  text-decoration: none;
}
body {
  background-color: #f4f2ee;
  color: #142C28;
}
p {
  margin-bottom: 15px;
}
p:last-of-type {
  margin-bottom: 0px;
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
.form-card {
  position: relative;
  align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  text-align: center;
  background-color: #f4f2ee;
  border-radius: 8px;
  min-width: 360px;
  max-width: 360px;
}
input {
  width: 100%;
  padding: 5px;
  margin: 5px;
}
label {
  font-size: 12px;
}
.large-btn {
  padding: 5px;
  width: 100%;
  margin: 5px;
  background-color: #F7B981;
  border: 0px;
  font-size: 15px;
  border-radius: 8px;
  color: white;
}
.large-btn:hover {
  padding: 5px;
  width: 100%;
  margin: 5px;
  background-color: #ffa95d;
  border: 0px;
  font-size: 15px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}
#main-div {
  display: inherit;
  padding: 0 0 100px 0;
}

</style>
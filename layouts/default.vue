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
  color: #142c28;
}
button {
  padding: 5px;
  width: 100%;
  margin: 5px;
  background-color: #e76c73;
  border: 0px;
  font-size: 15px;
  border-radius: 8px;
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
.center-div {
  min-height: 90vh;
  display: flex;
  justify-content: center;
}
.column {
  float: left;
  width: 25%;
  padding: 0px;
  margin: 20px;
}
.container {
  min-height: 90vh;
  width: 100%;
}
.flexbox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
.grid-item {
  justify-content: center;
  margin: 0px;
}
h1 {
  text-align: center;
  padding: 10px;
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
.ingredients-list {
  display: grid;
  grid-template-columns: auto;
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
  background-color: #f7b981;
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
.left {
  justify-self: left;
}
#main-div {
  display: inherit;
  padding: 0 0 100px 0;
}
p {
  margin-bottom: 15px;
  color: #888;
  font-size: 16px;
  text-decoration: none;
  padding: 20px;
}
p:last-of-type {
  margin-bottom: 0px;
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
.strong {
  color: #142c28;
  font-size: 16px;
  font-weight: bold;
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
<template>
  <div>
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
  background-color: #F4F2EE;
}
.container {
  height: 90vh;
  width: 100vw;
  display: flex;
  /* flex-wrap: wrap; */
  align-content: center;
  justify-content: center;
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
</style>
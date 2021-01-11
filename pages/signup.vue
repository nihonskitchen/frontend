<template>
  <div class="container">
    <div class="card">
      <form action="submit">
          <h2>
        Sign up
          </h2>
        <br />
        <input type="email" placeholder="email address" />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <input type="password" placeholder="confirm password" />
        <br />
        <button>Login</button>
        <br />
        Already have an account? <nuxt-link to="/login">Log in!</nuxt-link>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card {
    position: relative;
    /* justify-content: center; */
    /* align-content: center; */
    /* align-items: center; */
    align-self: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 20px;
  text-align: center;
  background-color: #F4F2EE;
  border-radius: 8px;
  min-width: 360px;
  max-width: 360px;
  max-height: 300px;
}
form {
    position: relative;
    justify-content: space-evenly;
    align-content: center;
}
input {
    width: 100%;
    padding: 5px;
    margin: 5px;
}
button {
padding: 5px;
width: 100%;
margin: 5px;
background-color: #E76C73;
border: 0px;
}
</style>
<template>
  <div class="container">
    <div class="form-card">
      <form action="submit">
          <h2>
        Login
          </h2>
        <br />
        <input type="email" placeholder="email address" />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <button>Login</button>
      </form>
      Don't have an account? <nuxt-link to="/signup">Sign up!</nuxt-link>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-card {
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
font-size: 15px;
}

</style>
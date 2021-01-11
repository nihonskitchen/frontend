<template>
  <div class="container">
    <div class="form-card">
      <form action="submit">
        <h2>Login</h2>
        <br />
        <input type="email" placeholder="email address" />
        <br />
        <input type="password" placeholder="password" />
        <br />
        <button class="large-btn">Login</button>
      </form>
      Don't have an account? <nuxt-link to="/signup">Sign up!</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

form {
  position: relative;
  justify-content: space-evenly;
  align-content: center;
}
input {
  width: 100%;
  padding: 5px;
  margin: 5px;
  /* border-radius: 8px; */
  /* border-color: white; */
}
.large-btn {
  padding: 5px;
  width: 100%;
  margin: 5px;
  background-color: #e76c73;
  border: 0px;
  font-size: 15px;
  border-radius: 8px;
}
</style>
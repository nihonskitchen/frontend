<template>
  <div class="container">
    <div class="center-div">
      <div class="form-card">
        <form action="submit">
          <h2>Sign up</h2>
          <br />
          <input type="email" placeholder="email address" />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <input type="password" placeholder="confirm password" />
          <br />
          <button class="large-btn">Sign up</button>
          <br />
          Already have an account? <nuxt-link to="/login">Log in!</nuxt-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
input {
  width: 100%;
  padding: 5px;
  margin: 5px;
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
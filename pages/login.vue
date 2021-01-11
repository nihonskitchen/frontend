<template>
  <div class="container">
    <div class="card">
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
  padding: 0px;
  text-align: center;
  background-color: #F4F2EE;
  border-radius: 8px;
  min-width: 360px;
  max-width: 360px;
  max-height: 300px;
}
form {
    position: relative;
    justify-content: center;
    align-content: center;
}
</style>
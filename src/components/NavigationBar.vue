<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="@/assets/logo.png" width="53" height="53" class="d-inline-block align-top" alt="Logo">

      <router-link class="font navbar-brand" to="/">Covid19 Tracker India</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
}
</script>

<style>
.font {
  font-size: 23px;
}
</style>

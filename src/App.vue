<template>
  <div class="app">
  <!--  네비게이션  -->
    <nav>
      <router-link to="/">home</router-link> |
      <router-link to="test">Test(Youtube)</router-link> |
      <router-link to="alone">Test(alone)</router-link> |
      <router-link to="error">ErrorPage</router-link> |
      <router-link to="hello">Hello</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>

</style>

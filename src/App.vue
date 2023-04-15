<template>
  <div class="app">
  <!--  네비게이션  -->
    <nav>
      <router-link to="/">home</router-link> |
      <router-link to="test">Test(Youtube)</router-link> |
      <router-link to="alone">Test(alone)</router-link> |
      <router-link to="data">Data-Bind</router-link> |
      <router-link to="server">Server-Get-Data(Click)</router-link> |
<!--      <router-link to="server/load">Server-Get-Data(페이지 진입시)</router-link> |-->
    </nav>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>

</style>

<template>
  <div class="app">
  <!--  제목: 사이트명(?)  -->
  <Header/>
  <!--  네비게이션  -->
    <nav>
      <router-link to="/">home</router-link> |
      <router-link to="test">Test(Youtube)</router-link> |
      <router-link to="alone">Test(alone)</router-link> |
      <router-link to="data">Data-Bind</router-link> |
      <router-link to="server">Server-Get-Data(Click)</router-link> |
      <router-link to="sum">Sum-Table(Click)</router-link> |
      <router-link to="manyTable">ManyTableTest</router-link> |
<!--      <router-link to="server/load">Server-Get-Data(페이지 진입시)</router-link> |-->
      <details>
        <summary>연습용 페이지들</summary>
          <ul>
              <li><router-link to="elTest">ElTest</router-link></li>
              <li><router-link to="mapTest">MapTest</router-link></li>
              <li><router-link to="dayJsTest">dayJs Test</router-link></li>
          </ul>
      </details>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/common/comp/Header";
export default {
  components: {Header}
}
</script>

<style>

</style>

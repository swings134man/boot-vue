<template>
  <div>
    <h1>Home page</h1>
  </div>

  <div id="body home">
      <ul id="locations">
        <li v-for="list in practiceList" v-bind:key="list">
          <a v-bind:href="list.ahref">{{list.name}}</a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
        practiceList: [
          {name: 'AlonePage', ahref: '/alone'},
          {name: 'DataBindingPage', ahref: '/data'}
        ]
    }
  },//data
}
</script>

<style scoped>

</style>
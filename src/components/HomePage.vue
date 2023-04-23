<template>
  <div>
    <h1>Home page</h1>
  </div>

  <div id="body home">
      <ul id="locations">
        <li v-for="list in practiceList" v-bind:key="list">
          <a v-bind:href="list.ahref" >{{list.name}}</a>
        </li>
      </ul>
    <button @click="clickList">Modal 창 이동</button>
  </div>
</template>

<script>

export default {
  name: "HomePage",

  data() {
    return {
        practiceList: [
          {name: 'AlonePage', ahref: '/alone'},
          {name: 'DataBindingPage', ahref: '/data'},
          // {name: '팝업창 열기!', ahref: '/modal/:id'}
        ],
    }
  },//data
  methods: {
    clickList() {
      //Modal 창으로 설계 했으나, 현재는 페이지 이동 -> with 파라미터
        this.$router.push('/modal/'+'test');
    }

  },//mehtods


}
</script>

<style scoped>

</style>
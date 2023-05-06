<template>
  <div class="bind">
      <ul>
        <li v-for="(id, index) in data" :key="id">
          <!--    index = for문의 각객체에 대한 식별값.      -->
          {{ id.id }} - {{ filterdCoumn(id.name) }} -> {{index}}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "DataBinding",

  setup() {
      const data = [
        {
          "id" : "test1",
          "name" : "kim"
        },
        {
          "id" : "test2",
          "name" : "oh"
        },
        {
          "id" : "test3",
          "name" : "kang"
        }
      ]

     return {
        data
     } //return
  },//setup

  methods: {
    filterdCoumn(name) {
      return name === 'oh' ? 'Filtering~' : name;
    },
  }

}//defalut
</script>

<style scoped>

</style>
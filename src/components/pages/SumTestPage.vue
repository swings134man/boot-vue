<template>
  <div>
    <table>
      <thead>
        <th>Test Data 1</th>
        <th>Test Data 2</th>
        <th>result</th>
        <th>result2</th>
      </thead>

      <tbody>
        <td><input type="number" v-model="first"></td>
        <td><input type="number" v-model="second"></td>
        <td>{{ first + second }}</td>
        <td>{{ sumall }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "SumTestPage",

  data() {
    return {
      first: ref(''),
      second: ref(''),
      sumRes: ''
    }
  },

  computed: {
    sumall: function (){
      return this.first + this.second;
    }
  },
}
</script>

<style scoped>

</style>
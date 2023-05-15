<template>
  <div v-if="showModal === false">
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

  <br>
  <div>
    <h3>Click To Make a Modal with props</h3>
    <button @click="showModal = true">Click To Modal!</button>
    <SumPageModal v-if="showModal" v-bind:sum-res="sumall" @close="showModal = false"/>
  </div>
</template>

<script>
import {ref} from "vue";
import SumPageModal from "@/components/modal/SumPageModal";

export default {
  name: "SumTestPage",
  components: {SumPageModal},
  data() {
    return {
      first: ref(''),
      second: ref(''),
      sumRes: '',
      showModal: false
    }
  },

  computed: {
    sumall: function (){
      return this.first + this.second;
    }
  },

  methods: {
    clickModal() {

    }
  }
}
</script>

<style scoped>

</style>
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
  <hr/>
  <h4>v-model Test</h4>
  <div>
    <select v-model="selOne" @change="selChange">
      <option v-for="(item, idx) in selectList"
              :key="idx"
              :value="item.value"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
  <div>
    Label Result(value): {{ selOne }} <br/>
    Label Result(code): {{ selTwo }}
  </div>


  <br/><br/><br/><hr/>
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
      showModal: false,
      selOne: ref(''),
      selTwo: ref(''),
      selectList: [
        { name: "선택해주세요.", value: "", code: "zero" },
        { name: "name1", value: "a", code: "one"},
        { name: "name2", value: "b", code: "three" },
        { name: "name3", value: "c", code: "four" },
      ],
    }
  },

  computed: {
    sumall: function (){
      return this.first + this.second;
    },
  },

  methods: {
    clickModal() {
    },
    selChange(event) {
      const res = this.selectList.find(data => data.value === event.target.value ? data.code : '');
      this.selTwo = res.code;
      console.log(this.selTwo);
    },
  },
  mounted() {
    const res = this.selectList.find(data => data.value === this.selOne ? data.code : '');
    this.selTwo = res.code;
  }
}
</script>

<style scoped>

</style>
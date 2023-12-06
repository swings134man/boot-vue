<template>
  <div class="all">
    <h1>Alone Page - 혼자연습</h1><hr color="red">

      <div class="test">
        {{ inputVal }} <br>
        Data 입력: <input type="text" v-model="inputVal"/>
      </div>
      <button class="btn btn-primary" v-on:click="updateValue">Click Me~</button>
  </div>

  <div>
    <sj-button>
      <template v-slot:hello>
        <h1>hello</h1>
      </template>

      <template v-slot:sec="variable">
        <h1>sec</h1>
        <!--   하위 컴포넌트의, 변수사용     -->
        <p>{{ variable.data }}</p>
      </template>
    </sj-button>
  </div>
</template>

<script>
import {ref} from "vue";
import SjButton from "@/components/component/sj-button.vue";

export default {
  name: "AlonePage",
  components: {SjButton},
  data() {
    return {
    }
  },
  setup() {

    let inputVal = ref('');

      // Click Event
      const updateValue = () => {
        console.log("Click");
        // console.log(inputVal.value);

        // data Check
        alert('data=' + inputVal.value);
      }

      return {
        updateValue,
        inputVal,
      }
  }// setup

}
</script>

<style scoped>
.test{
  font-size: 18px;
  color: red;
}

</style>
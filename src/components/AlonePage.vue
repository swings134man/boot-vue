<template>
  <div class="all">
    <h1>Alone Page - 혼자연습</h1><hr color="red">

      <div class="test">
        {{ inputVal }} <br>
        Data 입력: <input type="text" v-model="inputVal"/>
      </div>
      <button class="btn btn-primary" v-on:click="updateValue">Click Me~</button>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "AlonePage",
  setup() {

    let inputVal = ref('');

      // Click Event
      const updateValue = () => {
        console.log("Click");
        console.log(inputVal.value);
      }

      return {
        updateValue,
        inputVal,
      }
  }
}
</script>

<style scoped>
.test{
  font-size: 18px;
  color: red;
}

</style>
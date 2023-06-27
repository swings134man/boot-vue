<template>
  <div>
    <button @click="clickToServe">Click Me!</button>
  </div>
  <div>
    <h4>Result Value</h4><br/>

    {{ data }}
  </div>
</template>

<script setup>
import CustService from "@/components/service/CustService";
import {ref} from "vue";

const service = new CustService();

const data = ref({});

  //Click Test
  const message = 'Test!';

  const callMsg = () => {
    alert(message);
  }

  // axios 통신 Generic API TEST
const clickToServe = () => {
  service.get('seoul')
    .then(res => {
      console.log(res);
      data.value = res;
    }).catch(e => {
      console.log(e);
  })
}

</script>

<style scoped>

</style>
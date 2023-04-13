<template>
  <div class="Test">
    <h1>Test View Page</h1>

    <div class="name">
        {{ name }}
      <!--    {{ greeting('Master Lucas') }}-->
      <!--    {{ test }}-->
    </div>
    <button class="btn btn-primary"
        v-on:click="updateName">
      Click!
    </button>
  </div>
</template>

<script>
import {ref} from "vue";
import {reactive} from "vue";

export default {
  name: 'PracticePage',
  /*
     1. 셋업 내부에 필요한 로직이 담긴다.
  */
  setup() {
    /*
      2. 요소 - 변수
     */
    // const name = ref('lucas kang - vue project');
    const name = ref({
      id: 1
    });
    // Reactive - 배열, 어레이
    const testArr = reactive({
      id: 1
    });

    /*
      3. 함수
     */
    // 함수 - template 에서 파라미터를 넘겨주면 아래의 함수에 따라 return
    // template 에 직접 적는것 말고, -> 변수를 적용해서 파라미터를 넘길 수 있음.
    // const greeting = (name) => {
    //   return 'Hello, ' + name;
    // }
    // // 함수를 함수에 넣어서 리턴, 적용 가능
    // const test = greeting(name);


    /*
      4. Click Event
     */
    const updateName = () => {
      // log
      console.log('Click Event~');

      // Name Update - 변수의 값은 바뀌지만 화면의 내용은 바뀌지 않음.
      // ref 설정 후 -> 변수명.value(변경값) 으로 요소를 업데이트 시켜줄 수 있음.
      // ref -> React 의 useState 같은 개념.
      name.value.id = 'DEV Lucas';
      console.log(name.value);

      // 4-2. reactive
      // template 내부 또한 testArr.id 로 데이터 지정.
      // reactive 대신 ref 를 사용한다면. -> testArr.value.id 로 접근해야 함.
      testArr.id = 2;
      console.log(testArr);
    }
    /*
      return
     */
    return {
      name,
      testArr,
      updateName,
    };// return
  }//setup


  // name: "PracticePage"
}
</script>

<style scoped>
.name {
  color: red;
  font-size: 20px;
}
</style>
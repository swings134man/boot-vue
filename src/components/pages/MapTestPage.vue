<template>
  <div class="container">
    <div class="header">
      <h2>Map 재배열 테스트 페이지</h2>
    </div>

    <div class="table body">

      <table>
        <thead style="background-color: #cccccc">
          <tr>
            <th style="width: 8%">날짜</th>
            <template v-for="(value, key) in itemMap" :key="key">
              <th>{{ value[0] }}</th>
            </template>
          </tr>
        </thead>
      </table>

    </div>

  </div>
</template>

<script setup>
// export default {
//   name: "MapTestPage"
// }

import {onMounted, ref} from "vue";

const itemList = ref([]);
const itemMap = new Map();
const dates = [];


// DATA
const itemData = [{
  date: '2023-06-01',
  name: 'A',
  vol: 1
  },
  {date: '2023-06-03',
  name: 'B',
  vol: 3
  },
  {date: '2023-06-04',
    name: 'B',
    vol: 4
  },
  {date: '2023-06-04',
    name: 'C',
    vol: 2
  },
  {date: '2023-06-05',
    name: 'D',
    vol: 6
  },
]

// FUNCTION
onMounted(() => {

  reset();
  search();
})

// 초기화
const reset = () => {

}

// 검색 및 Map 재배열
const search = () => {
  // 조회 되었다 침
  // 1. List 에 조회 Data 바인딩.
  itemList.value = itemData;

  // 2. Map에 name(테이블 헤더)별 조건 set
  itemList.value
    .forEach(res => {
      if(!itemMap.has(res.name)){ // Map에 name 변수가 없다면 set 해라.
        itemMap.set(res.name, new Map()); // A, {Key: Value}
      }

      // 3. date 배열 -> row (배열안에 날짜데이터 없으면 push) ---> 01,03,04,05
      if(!dates.includes(res.date)) dates.push(res.date);

      // 4.
      const target = itemMap.get(res.name);
      target.set(res.date, res.vol);
    });
  dates.sort();

    console.log(itemMap)
    console.log(dates)


}

// dayJs add 이후 
const convertDate = (date) => {
  // 현재 데이트 기반으로 가져오기.
}

</script>

<style scoped>
</style>

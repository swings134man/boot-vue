<template>
  <div>
    <div>
      <h2>Data Sorting MOdule Test</h2>
      <button @click="sortingData">sorting!</button>
    </div>

    <div v-if="flag">
        <table border="1">
          <thead>
          <th>No</th>
          <th>date</th>
          <th>name</th>
          <th>state</th>
          <th>city</th>
          <th>address</th>
          <th>zip</th>
          </thead>
          <tbody>
<!--          <tr v-for="(item, idx) in resultList.value" :key="idx">-->
          <tr v-for="(item, idx) in tableData" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.state }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.zip }}</td>
          </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script setup>
  import SortingModule from "@/apis/common/SortingModule";
  import {onMounted, ref} from "vue";

  const sortingModule = new SortingModule('DESC', 'date');
  const flag = ref(false);

  onMounted(() => {
    console.log('Module Mounted');
    // sortingData();
  })


  const sortingData = () => {
    console.log('sort');

    sortingModule.sortingToList(tableData);
     flag.value = true;

     console.log(tableData);
     console.log(tableData.length);
  }


  // Test Data
  const tableData = [{
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      },
      {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
      }]
</script>

<style scoped>

</style>
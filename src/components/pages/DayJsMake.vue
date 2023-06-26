<template>
  <div>
    <h2>DayJs Test Page</h2>

    <label>default: {{ defaultDay }}</label><br/><br/>

    <label>현재시각: {{ currentTime }}</label><br/>
    <label>어제: {{ yesterDay }}</label><br/>
    <label>내일: {{ tomorrow }}</label><br/>
  </div>
</template>

<script setup>
import dayjs from "dayjs";

const defaultDay = dayjs();
const currentTime = dayjs().format('YYYY-MM-DD HH:mm:ss'); // 현재날짜 + 시각
const yesterDay = dayjs(currentTime).subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'); // 어제
const tomorrow = dayjs(currentTime).add(1, 'day').format('YYYY-MM-DD HH:mm:ss'); // 내일


</script>

<style scoped>

</style>
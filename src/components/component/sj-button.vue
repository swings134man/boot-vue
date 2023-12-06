<template>
  <div>
    <p>one</p>
    <!--  Slot 요소  -->
    <slot name="hello"></slot>
    <p>two</p>
    <slot name="sec" :data="testData"></slot>
  </div>
</template>


<script setup>
const testData = 'data 123';
</script>


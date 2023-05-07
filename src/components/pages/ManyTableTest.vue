<template>
  <div>
    <button @click="callMsg">Click Me!</button>
  </div>
</template>

<script setup>

  const message = 'Test!';

  const callMsg = () => {
    alert(message);
  }

</script>

<style scoped>

</style>
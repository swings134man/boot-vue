<template>
  <div class="header title">
    <h1>{{ headTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      headTitle: 'This is First Vue!!',
    }
  }

}
</script>

<style scoped>
  .header.title {
    color: red;
  }

</style>
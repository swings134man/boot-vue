<template>
  <div>
    <h3>This is Data From SumTestPage!</h3>
    <p>{{ number }}</p><br/>
    <button @click="closeModal">창 닫기</button>
  </div>
</template>

<script>
export default {
  props: ['sumRes'],
  name: "SumPageModal",

  data() {
    return {
      number: this.sumRes
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }

}
</script>

<style scoped>

</style>
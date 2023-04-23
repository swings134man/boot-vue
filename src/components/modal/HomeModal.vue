<template>
<!--  <div class="modal">-->
<!--    <h2>Modal</h2>-->
<!--      &lt;!&ndash; 컴포넌트 영역과 같은 크기를 가진 배경(모달 오픈시 뒤에있는 투명한 검정배경)   &ndash;&gt;-->
<!--      <div class="overlay" @click="$emit('close-modal')"></div>-->
<!--      &lt;!&ndash;  내용이 보여질 영역    &ndash;&gt;-->
<!--      <div class="modal-card">-->
<!--          <slot name="body"/>-->
<!--      </div>-->
<!--  </div>-->
  <div>
    <h2>default modal page</h2>

    <div >
        <p>{{ $route.params.id }}</p>
    </div>
  </div>

</template>

<script>
export default {
  // Home Page -> Modal
  name: "HomeModal",
  props: true,

  data() {
    return{
      id: ''
    }
  },

}
</script>

<style scoped>
.modal,
.overlay{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay{
  opacity: 0.5;
  background-color: black;
}
.modal-card{
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20%;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}
</style>
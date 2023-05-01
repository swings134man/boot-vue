<template>
  <div class="example-modal-window">
    <div>
      <h1>Home page</h1>
    </div>

    <div id="body home">
        <ul id="locations">
          <li v-for="list in practiceList" v-bind:key="list">
            <a v-bind:href="list.ahref" >{{list.name}}</a>
          </li>
        </ul>
  <!--    <button @click="clickList">Modal 창 이동</button>-->
      <button @click="openModal">Modal 창 이동</button>
    </div>

    <!-- Modal -->
    <div>
        <TestModal @close="closeModal" v-if="modal">
            <p>Default Modal Tag</p>
            <div><input v-model="message"/></div>

            <!--   footer Slot Content     -->
            <template v-slot:footer>
              <button @click="sendMsg">메시지 제출</button>
            </template>
        </TestModal>
    </div>
  </div>
</template>

<script>
import TestModal from "@/components/modal/TestModal";

export default {
  // name: "HomePage",
  components: {TestModal},

  data() {
    return {
        practiceList: [
          {name: 'AlonePage', ahref: '/alone'},
          {name: 'DataBindingPage', ahref: '/data'},
          // {name: '팝업창 열기!', ahref: '/modal/:id'}
        ],
      modal: false,
      message: '',

    }
  },//data
  methods: {
    clickList() {
      //Modal 창으로 설계 했으나, 현재는 페이지 이동 -> with 파라미터
        this.$router.push('/modal/'+'test');
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    sendMsg() {
      if(this.message.length > 0) {
        alert(this.message);
        this.message = '';
        this.closeModal();
      }else {
        alert('메시지가 존재하지 않습니다.');
      }
    },

  },//mehtods


}
</script>

<style scoped>

</style>
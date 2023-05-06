<template>
  <div class="example-modal-window">
    <div>
      <h1>Home page</h1>
      <br>
    </div>

    <div>
      <h4>Connection Browser Info</h4>
        접속 기기 종류: {{deviceInfo ? '모바일' : 'PC'}} <br>
        브라우저명: {{ browserInfo.name }} <br>
        브라우저 코드명: {{ browserInfo.code }} <br>
        플랫폼 정보: {{ browserInfo.platform }} <br>
        사용자 정보: {{ browserInfo.userInfo }} <br>
        브라우저 버전: {{ browserInfo.version }} <br>

      <br><br>
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
import {reactive} from "vue";

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
      browserInfo: reactive({
        name: '',
        code: '',
        platform: '',
        userInfo: '',
        version: '',
      }),
      deviceInfo: ''

    }
  },//data

  mounted() {
    this.init();
  },

  methods: {

    init() {
      this.isMobile();
      this.checkBrowser();
    },

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

    // Web Browser 확인
    checkBrowser() {
      this.browserInfo.name = navigator.appName;
      this.browserInfo.code = navigator.appCodeName;
      this.browserInfo.platform = navigator.platform;
      this.browserInfo.userInfo = navigator.userAgent;
      this.browserInfo.version = navigator.appVersion;

    },

    // Mobile 인지 확인
    isMobile() {
      const info = navigator.userAgent;
      var flag = false;

      if( info.indexOf("iPhone") > -1
          || info.indexOf("Android") > -1
          || info.indexOf("iPad") > -1
          || info.indexOf("iPod") > -1
      ) {
        flag = true;
      }
      this.deviceInfo = flag;
    }
  },//mehtods


}
</script>

<style scoped>

</style>
<template>
    <div class="Axios-server">
      <button class="btn btn-primary"
              @click="fetchData">
        Click!
      </button>
        <div class="get-data">
            <ul>
                <li v-for="item in contents" :key="item.board_no">
                  번호:{{ item.board_no }} - 제목:{{ item.board_title }} - 작성자:{{item.board_writer}} - 조회수:{{item.board_count}} - key:{{  }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "AxiosConServer",

  // data
  data() {
    return {
      contents: []
    };
  },

  // setup - 셋업안에 메서드, 변수는 자동으로 리렌더링 되지 않는다.
  // composition api 공부 후 -> setup() <-> data() 효율적인것 찾기
  setup() {

  },//setup

  // 메서드로 인해, 컴포넌트가 변경되어야 한다면, methods() 내부에 함수를 생성해야 한다.
  // this. 키워드는 JS객체를 참조하는것, vue 객체를 참조하는것이 아니다.
  // setup() 안에 메서드를 작성해야한다면, ref, reactive 를 사용할것.
  methods: {
    fetchData() {
      axios.get("/board/v1/AllList")
      .then((res) => {
        console.log("status=" + res.status);
        console.log("data -> " + JSON.stringify(res.data));
        console.log(res);
        this.contents = res.data;
      })
      .catch((err) => {
        console.log(err);
      })
    }, //fetch Data()
  }

}//export
</script>

<style scoped>
</style>
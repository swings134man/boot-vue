<template>
  <div>
    <h1> {{ id }} </h1>
    <hr/>

    <button class="btn btn-primary" @click="test">Click Me~</button>

    <hr/>
    <!--    -->
    <div>
      <h2> {{ error.status }} </h2>
      <h2> {{ error.msg }} </h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return{
      id: 'Error Test Pages',
      result: {},
      error: {
          status: '',
          msg: '',
      }
    }
  },
  methods: {
    test() {
      axios.get('/api/error/bad', {params: {param: 'go'}})
        .then(res => {
          console.log(res);
          this.result = res.data;

          // FIX
        }).catch((error) => {
            console.log('error!',error);

            // return msg
            const errorRes = error.response.data;
            console.log('error data',errorRes);
            let code = '';
            switch (errorRes.msg){
              case 'day':
                code = '런타임에러'; break;
              default:
                code = '잘못된 요청';
                break;
            }
            // 문제의 코드
            this.error.msg = code;
      });
    }
  },

}
</script>

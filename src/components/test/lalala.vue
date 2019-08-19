
<template>

  <div class="hello">
    <h1> 欢迎用户！ {{ msg }}</h1>
    <h1>
<!--      <router-link to="login">退出登陆</router-link>-->
      <span style="display:block;" @click="logout">退出登录</span>
    </h1>
  </div>
</template>

<script>
  import token from '@/http/token'
  import {ajax,post,get} from '@/http/request2'
  import loginUtil from '@/http/loginUtil'

  export default {
    name: 'hello',
    data() {
      return {
        msg: '',
      }
    },
    created() {
      //created 方法是在页面渲染时候调用的 ；
      this.init()
    },
    methods: {
      //method 中的方法是在页面渲染后调用的 ；
      init() {
          this.msg = localStorage.getItem('userInfo')
        // this.test()
      },
      test() {
        this.$ajax('/test', "get", {})
          .then((response) => {
            // alert(JSON.stringify(response))
          })
      },
      logout() {
        this.$token.deleteToken()

        window.location.href = process.env.LOGOUT_URI
        /* this.$ajax(process.env.LOGOUT_URI,"get",{})
          .then((response) => {
            // alert(JSON.stringify(response))
          })*/
      }
    }
  }
</script>

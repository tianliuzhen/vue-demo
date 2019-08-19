<template>
  <div>
    <!-- <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <h3 class="title">vue-admin-template</h3>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          placeholder="password"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <div v-if="islogin">您已登录</div>
      <div v-else>尚未登录</div>
      <el-form-item v-if="islogin">
        <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          进入系统
        </el-button>
      </el-form-item>
      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: admin</span>
      </div>
    </el-form>

    <div v-show="!islogin">您尚未登录</div>
    <el-button v-show="!islogin" @click="login">登录</el-button> -->
  </div>
</template>

<script>
  import axios from 'axios'
  import { isvalidUsername } from '@/http/validate'

  export default {
    name: 'Login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('请输入正确的用户名'))
        } else {
          callback()
        }
      }
      const validatePass = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('密码不能小于5位'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePass }]
        },
        loading: false,
        pwdType: 'password',
        redirect: undefined,
        islogin: false,
        state: '',
        code: ''
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    mounted() {
      if (this.$route.query.access_token) {
        var token = { ...this.$route.query }
        this.$token.savetoken(token)
      }
      this.code = this.$route.query.code
      this.state = this.$route.query.state
      // this.getToken()
      this.islogin = this.checkLogin()
      if (this.islogin) {
        this.getUserInfo()
      } else {
        this.login()
      }
    },
    methods: {
      showPwd() {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin() {
        //登陆成功后回调地址
        this.$router.push({ path: this.redirect || '/' })
      },
      login() {
        this.$login.login(this)
      },
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          axios.get(process.env.LOGOUT_URI, {
            params: {
              token: this.$token.loadToken().access_token
            }
          })
            .then(res => {
              this.$token.deleteToken()
              location.reload() // 为了重新实例化vue-router对象 避免bug
            })
            .catch(() => {
              this.$message.error('网络错误，登出失败')
            })
        })
      },
      checkLogin() {
        return this.$login.checkLogin()
      },
      getToken() {
        this.$token.getTokenFromService(this, this.code, response => {
          this.$token.savetoken(response.data)
          this.$router.push({ path: this.redirect || '/' })
        }, error => {
          alert(error)
        })
      },
      getUserInfo() {
        var tokenInfo = this.$token.loadToken()
        axios({
          url:process.env.USER_URI + '?access_token=' + tokenInfo.access_token,
        }).then(res => {
          //储存数据
           localStorage.setItem('userInfo', res.data)
           // alert(localStorage.getItem('userInfo'))
          this.handleLogin()
        }).catch(() => {
          this.$root.push('/logout')
        })
      }
    }
  }
</script>


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
<style></style>
<script>
    export default {
        data() {
            return {msg: 'vue模板页'}
        }
    }
</script>

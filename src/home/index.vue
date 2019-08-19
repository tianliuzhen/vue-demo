<template >
  <div style="background-color: #EBEBEB;min-height:800px;">
    <!--头部-->
    <div style="width:100%;background-color: #636363; overflow: hidden;"><span class="demonstration"
                                                                              style="float:left;padding-top:10px;color:white;margin-left:1%"> 网站首页 </span>
      <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%"> <el-input
        placeholder="请输入"
        icon="search"
        v-model="searchCriteria"
        :on-icon-click="handleIconClick"> </el-input> </span> <span class="demonstration"
                                                                    style="float:right;padding-top:10px;margin-right:1%"> <el-dropdown
        trigger="click"> <span class="el-dropdown-link" style="color:white"> {{msg}}<i
        class="el-icon-caret-bottom el-icon--right"></i> </span> <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item > <span style="display:block;" @click="logout">退出登录</span></el-dropdown-item>
      </el-dropdown-menu> </el-dropdown> </span>
    </div>
    <!--左侧导航-->
    <div style="margin-top:5px;">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div  >
            <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px" @select="handleSelect">
              <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
              <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <div>
            <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in breadcrumbItems">{{item}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div style="margin-top:10px">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
  data() {
    return {searchCriteria: '', breadcrumbItems: ['导航一'],msg:''}
  },
    created() {
      //created 方法是在页面渲染时候调用的 ；
      this.init()
    },
    methods: {
    init(){
      this.msg = localStorage.getItem('userInfo')
    },
      logout() {
        this.$token.deleteToken()

        window.location.href = process.env.LOGOUT_URI
        /* this.$ajax(process.env.LOGOUT_URI,"get",{})
          .then((response) => {
            // alert(JSON.stringify(response))
          })*/
      },
    handleIconClick(ev) {
      console.log(ev);
    },
      handleSelect(key, keyPath) {
      switch (key) {
        case '1':
          this.$router.push('/Page1');
          this.breadcrumbItems = ['导航一']
          break;
        case '2':
          this.$router.push('/Page2')
          this.breadcrumbItems = ['导航二']
          break;
        case '3':
          this.$router.push('/Page3')
          this.breadcrumbItems = ['导航三']
          break;
      }
    },
  },
} </script>

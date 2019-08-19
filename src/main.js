// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import config from './config/config.js'
import token from './http/token'
import login from './http/loginUtil.js'
import {post,get,patch,put,deletes,ajaxs} from './http/request'
import {ajax} from '@/http/request2'
import querystring from 'querystring'
import store from './store'
Vue.config.productionTip = false

//注册到vue的全局变量上，就可以在别的任何组件中使用了。
Vue.prototype.$config = config
Vue.prototype.$token = token
Vue.prototype.$login = login
Vue.prototype.$axios = axios


//request1
// 定义ajax常用全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$deletes=deletes;
Vue.prototype.$ajaxs=ajaxs;
//request2
Vue.prototype.$ajax=ajax;

Vue.prototype.$querystring = querystring
import '@/permission' // permission control
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

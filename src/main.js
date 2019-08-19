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
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

//组件
Vue.use(ElementUI);

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

new Vue({
  el: '#app',
  router,
  store,
  //Vue1.0  写法
  components: { App },
  template: '<App/>'

  //Vue2.0  render: h => h(App)是ES6的写法，其实就是如下内容的简写：
  /*render: h => h(App)*/
})

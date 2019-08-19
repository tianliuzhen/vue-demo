import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/test/HelloWorld'
import lalala from '@/components/test/lalala'
import Home from '@/home/index'
import Page1 from '@/home/page1'
import Page2 from '@/home/page2'
import Page3 from '@/home/page3'
Vue.use(Router)

export default new Router({
  routes: [
  /*  {
      path: '/',
      name: 'vue',
      component: vue
    },*/
    {
      path: '/',
      name: 'HelloWorld',
      // 跳转路径
      redirect: "home",
      component: HelloWorld
    },
    {
      path: '/testUrl',
      name: 'lalala', //路由自定义昵称
      component: lalala
    },
    {
      path: '/login',
      component: () => import('@/login/login'),
      hidden: true
    },
    { path: '/home',
      name: 'home',
      component: Home,
      children:[
        { path: '/Page1', name: 'Page1', component: Page1 },
        { path: '/Page2', name: 'Page2', component: Page2 },
        { path: '/Page3', name: 'Page3', component: Page3 } ] }
  ],
  // mode:"history"    // mode 设置为history ，去掉地址栏上的 # 号
})

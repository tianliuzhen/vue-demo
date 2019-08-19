import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lalala from '@/components/test/lalala'
import vue from '@/components/vue'
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
      redirect: "testUrl",
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
    }/*,
    {
      path: '/redirect',
      component: Layout,
      hidden: true,
      children: [
        {
          path: '/redirect/:path*',
          component: () => import('@/redirect/index')
        }
      ]
    },*/
  ],
  // mode:"history"    // mode 设置为history ，去掉地址栏上的 # 号
})

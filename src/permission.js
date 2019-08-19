import router from './router'
import loginUtil from '@/http/loginUtil' // 验权
import NProgress from 'nprogress' // Progress 浏览器顶部有载入动画
const whiteList = ['/login'] // 不重定向白名单
// 路由的钩子函数
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 用来判断用户是否登录
  let  userLogin= loginUtil.checkLogin();
   // alert(JSON.stringify(to.path ))
  if (userLogin) {
      next()
        // 获取下拉菜单
    NProgress.done()
  } else {
    //未登录
    // alert(JSON.stringify(to.path.indexOf('access_token')))
    const index = to.path.indexOf('access_token')
    // alert("to.path__"+JSON.stringify(to.path));
       if (whiteList.indexOf(to.path) !== -1) {
         next()
       } else if (index !== -1) {
         var cutPath = to.path.substring(index)
         next('/login?' + cutPath)
       } else {
         next('/login') // 否则全部重定向到登录页
       }
    NProgress.done()
  }
})
router.afterEach(() => {
  NProgress.done()
})

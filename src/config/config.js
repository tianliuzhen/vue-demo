/*
 * @Author: 李晟
 * @Date: 2019-01-05 17:15:59
 * @LastEditors: 李晟(lsenjoy@qq.com)
 * @LastEditTime: 2019-02-18 14:24:02
 * @Description: 授权配置
 */
var config = {
  baseOAuthUrl: 'http://devoauth.haoxiaec.com',
  // 请求授权地址
  userAuthorizationUri: process.env.AUTH_URI, //
  // accessToken请求地址
  accessTokenUri: process.env.TOKEN_URI, //
  // 用户信息请求地址
  userInfoUri: process.env.USER_URI, //
  // 登出请求地址
  logoutUri: process.env.LOGOUT_URI,
  // 项目地址
  localuri: 'http://172.18.1.179:9528',
  redirect_uri: process.env.REDIRECT_URI,
  // 案例资源服务器地址
  resUri: 'http://172.18.1.244:8080',
  // 客户端相关标识，请从认证服务器申请
  clientId: process.env.CLIENT_ID, //
  client_secret: process.env.CLIENT_SECRET, //
  // 申请的权限范围
  scope: process.env.SCOPE, //
  // 可选参数，客户端的当前状态，可以指定任意值，用于校验，此次案例不做相关认证
  state: '123',
  // 一些固定的请求参数
  response_type: process.env.RES_TYPE, //
  grant_type: process.env.GRANT_TYPE, //
  code: 'abc'
}

export default config

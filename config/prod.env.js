'use strict'
module.exports = {
  ENV_CONFIG: '"prod"',
  NODE_ENV: '"prodEnvironment"',
  BASE_API: '"http://localhost:8080/"', // 资源接口API

 DEPOT_API: '""',
  REDIRECT_URI: '"http://172.18.1.100:1080/"',
  AUTH_URI: '"http://localhost:8080/oauth/authorize"', // 请求授权地址
  TOKEN_URI: '"http://localhost:8080/oauth/token"', // accessToken请求地址
  USER_URI: '"http://localhost:8080/authorize/userInfo"', // 用户信息请求地址
  LOGOUT_URI: '"http://localhost:8080/oauth/logout"',
  CLIENT_ID: '"demoApp"', // 客户端相关标识
  CLIENT_SECRET: '"demoAppSecret"', // 客户端相关标识
  SCOPE: '"read write"', // 申请的权限范围
  RES_TYPE: '"token"', // 一些固定的请求参数
  GRANT_TYPE: '"implicit"', // 一些固定的请求参数
  AUTH_TEST: '"false"',
}

import RndNum from './ranNum'
import token from './token'
// var querystring = require('querystring')
var loginUtil = {
  login: function(vue) {
    vue.$config.code = RndNum(4)
    var authorUrl = vue.$config.userAuthorizationUri
    authorUrl =
      authorUrl +
      ('?' + vue.$querystring.stringify({
          client_id: vue.$config.clientId,
          response_type: vue.$config.response_type,
          scope: vue.$config.scope, // 非必填参数
          state: vue.$config.state, // 非必填参数
          redirect_uri: vue.$config.redirect_uri
          // redirect_uri: ''
        }))
    // alert(authorUrl)
    window.location.href = authorUrl
  },
  logout: function(vue, return_url) {
    vue.$router.push('/logout' + '?return_url=' + return_url)
  },
  checkLogin: function() {
    // console.log(token)
    var tokenInfo = token.loadToken()
    if (tokenInfo.access_token === null || tokenInfo.access_token === 'null') {
      console.log(false)
      return false
    }
    return true
  }
}

export default loginUtil

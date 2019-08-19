/*
 * @Author: 李晟
 * @Date: 2018-11-23 09:35:05
 * @LastEditors: 李晟(lsenjoy@qq.com)
 * @LastEditTime: 2019-02-18 14:36:58
 * @Description: 权限信息管理
 */

import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

var token = {
  savetoken: function(token) {
    localStorage.setItem('access_token', token.access_token)
    localStorage.setItem('enabled', token.enabled)
    localStorage.setItem('expires_in', token.expires_in)
    localStorage.setItem('refresh_token', token.refresh_token)
    localStorage.setItem('token_type', token.token_type)
    localStorage.setItem('scope', token.token_type)
  },
  deleteToken: function() {
    localStorage.setItem('access_token', null)
    localStorage.setItem('enabled', null)
    localStorage.setItem('expires_in', null)
    localStorage.setItem('refresh_token', null)
    localStorage.setItem('token_type', null)
  },
  loadToken: function() {
    const tokenInfo = {}
    tokenInfo.access_token = localStorage.getItem('access_token')
    tokenInfo.enabled = localStorage.getItem('enabled')
    tokenInfo.expires_in = localStorage.getItem('expires_in')
    tokenInfo.refresh_token = localStorage.getItem('refresh_token')
    tokenInfo.token_type = localStorage.getItem('token_type')
    return tokenInfo
  },
  getTokenFromService: function(vue, code, callback, error) {
    axios
      .post(
        vue.$config.accessTokenUri,
        {
          client_id: vue.$config.clientId,
          client_secret: vue.$config.client_secret,
          code: code,
          redirect_uri: vue.$config.redirect_uri,
          grant_type: vue.$config.grant_type
        },
        {
          headers: { Accept: 'application/json' }
        }
      )
      .then(callback)
      .catch(error)
  }
}

export default token

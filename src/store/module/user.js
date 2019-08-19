import token from '@/http/token'
import getRouter from '@/mockdata/routers'
import allRoles from '@/mockdata/roles'
import avatar from '@/assets/img/vue.jpg'
// 开发环境获取全路由权限
// AUTH_TEST 有值时可以测试路由, 命令行 cross-env AUTH_TEST=''\"test\"'' npm run dev (Linux: AUTH_TEST=' "test" ')
const mrflag = process.env.NODE_ENV === 'development' && process.env.AUTH_TEST !== '"true"'
// const mrflag = false
const user = {
  state: {
    token: token.loadToken().access_token,
    principal: null,
    username: '',
    realname: '',
    avatar: avatar,
    roles: [],
    routers: [],
    roleids: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_PRINCIPAL: (state, principal) => {
      state.principal = principal
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_REALNAME: (state, realname) => {
      state.realname = realname
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_ROUTERS: (state, routers) => {
      state.routers = routers
    },
    SET_ROLEIDS: (state, roleids) => {
      state.roleids = roleids
    },
    SET_CHILDRENIDS: (state, childrenids) => {
      state.childrenids = childrenids
    }
  },

  actions: {
    // 登录
    // Login({ commit }, userInfo) {
    //   const username = userInfo.username.trim()
    //   return new Promise((resolve, reject) => {
    //     login(username, userInfo.password).then(response => {
    //       const data = response.data
    //       setToken(data.token)
    //       commit('SET_TOKEN', data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        //获取用户id
        this.$ajax(state.token, "get", {})
          .then(response => {
            const data = response.data.principal
            //根据id获取 用户权限
            this.$ajax(data.id, "get", {}).then(res => {
              if (res.data.initResources && res.data.initResources.length > 0) {
                // 验证返回的roles是否是一个非空数组
                commit('SET_ROLES', mrflag ? allRoles : res.data.initResources) // 开发环境获取全权限
              } else {
                reject('没有任何权限,请联系管理员')
              }
              commit('SET_USERNAME', data.username)
              commit('SET_REALNAME', data.realname)
              if (data.avatar) {
                commit('SET_AVATAR', data.avatar)
              }
              resolve({
                code: 200,
                data: {
                  routers: mrflag ? getRouter : res.data.initMenus // 开发环境获取全路由
                }
              })
            })
          })
          .catch(error => {
            if (mrflag) {
              // 开发环境获取全路由权限
              commit('SET_ROLES', allRoles)
              resolve({
                code: 20000,
                data: {
                  routers: getRouter
                }
              })
            } else {
              reject(error)
            }
          })
      })
    },

    // 登出
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     logout(state.token).then(() => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_ROLES', [])
    //       removeToken()
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        token.deleteToken()
        resolve()
      })
    }
  }
}

export default user

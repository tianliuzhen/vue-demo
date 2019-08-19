'use strict'
// 根据环境引入不同配置 process.env.ENV_CONFIG  ex:dev.conf.js
const config = require('./' + process.env.ENV_CONFIG + '.conf')
module.exports = config

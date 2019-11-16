/*
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-03 19:19:15
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-14 22:07:27
 * @FilePath: \myvueadmin\vue.config.js
 */
module.exports = {
  devServer: {
    open: true,
    port: 8787
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'common': '@/common'
      }
    }
  }
}

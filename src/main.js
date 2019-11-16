/*
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-03 19:19:15
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-15 09:12:28
 * @FilePath: \myvueadmin\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
// 事件总线
Vue.prototype.eventBus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

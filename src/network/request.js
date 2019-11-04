import Axios from 'axios'
import Vue from 'vue'
Vue.use(Axios)
export function request(config) {
  /* 创建一个实例  */
  const instance = Axios.create({
    timeout: 10000,
    baseURL: ''
  });
  /* 请求拦截 */
  instance.interceptors.request.use(config => {
    /* 设置token 等 请求拦截 */

    return config
  });

  /* 响应拦截 */
  instance.interceptors.response.use(response => {
    /* 处理响应拦截 获取data */
    const data = response.data

    return data
  })


  /* 返回一个实例 */
  return instance(config)
}

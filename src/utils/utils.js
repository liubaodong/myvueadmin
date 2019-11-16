/*
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-06 20:24:33
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-07 22:41:44
 * @FilePath: \myvueadmin\src\utils\utils.js
 */
/**
 * @description: 防抖 debounce
 * @param {type} function, delay
 * @return: function
 * @author: Coder
 */
export function debounce(func, delay = 300) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 调用实例
/* watch: {
    search(val) {
      this.EditEMailValid(val);
    }
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    EditEMailValid: debounce(val => {
      console.log("test", val);
    }, 500),
  }
 */

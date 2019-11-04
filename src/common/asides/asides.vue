<template>
  <div id="c-aside">
    <el-menu
      :router="router"
      text-color="#666"
      default-active="/house"
      module="vertical"
      @open="handleOpen"
      @select="handleSelect"
      :collapse="toggle"
      class="el-menu-vertical-demo"
    >
      <!-- 调用树形递归组件 -->
      <slot name="list">
        <a-item :data="menuList" :toggle="toggle"></a-item>
      </slot>
    </el-menu>
  </div>
</template>

<script>
import aItem from "./item";
import menuList from "./menuList.js";
export default {
  name: "asides",
  components: { aItem },
  props: {
    toggle: { type: Boolean, default: false },
    router: { type: Boolean, default: true }
  },
  data() {
    return {
      menuList
    };
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      // console.log("--open--", key, keyPath);
    },
    handleSelect(key, keyPath) {
      // console.log("--select--", key, keyPath);
      this.$emit("asidePath", { key, keyPath });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>

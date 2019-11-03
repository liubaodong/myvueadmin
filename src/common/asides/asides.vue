<template>
  <div id="c-aside">
    <el-menu
      router
      text-color="#666"
      default-active="/house"
      module="vertical"
      @open="handleOpen"
      @select="handleSelect"
      class="el-menu-vertical-demo"
    >
      <!-- 调用树形递归组件 -->
      <slot name="list">
        <a-item :data="menuList"></a-item>
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
  props: {},
  data() {
    return {
      menuList
    };
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log("--open--", key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log("--select--", key, keyPath);
      this.$emit("asidePath", { key, keyPath });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>

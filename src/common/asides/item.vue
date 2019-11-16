<!--
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-03 19:19:15
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-07 20:43:03
 * @FilePath: \myvueadmin\src\common\asides\item.vue
 -->
<template>
  <div>
    <div v-for="(item, i) in data" :key="item.title">
      <!-- 一级菜单 -->
      <el-menu-item
        @click="getData"
        v-if="!item.children || item.children.length === 0"
        :index="String(item.key)"
      >
        <i :class="item.icon"></i>
        <!-- <span slot="title">{{item.title}}</span> -->

        <span slot="title">{{item.title}}</span>
        <i class="icon" :class="item.rIcon"></i>
      </el-menu-item>
      <!-- 子级菜单循环 -->
      <el-submenu v-else :index="String(item.title)">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title" v-if="!toggle">{{item.title}}</span>
        </template>
        <a-item :data="item.children"></a-item>
      </el-submenu>
    </div>
  </div>
</template>

<script>
export default {
  name: "a-item",
  components: {},
  props: { toggle: null, data: null },
  data() {
    return {};
  },
  computed: {},
  methods: {
    getData() {
      console.log(1);
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.el-menu-item {
  line-height: 48px;
  .icon {
    float: right;
    margin-top: 17px;
  }
}
</style>
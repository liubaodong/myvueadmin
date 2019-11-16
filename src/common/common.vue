<!--
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-03 19:19:15
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-14 16:12:16
 * @FilePath: \myvueadmin\src\common\common.vue
 -->
<template>
  <div>
    <el-container>
      <el-header class="c-header">
        <headers>
          <template v-slot:left></template>
          <template v-slot:container>
            <el-button @click="toggleBtn" size="mini" icon="el-icon-s-fold"></el-button>
          </template>
          <template v-slot:right></template>
        </headers>
      </el-header>
      <el-container class="c-container">
        <asides :toggle="toggle" @asidePath="asidePath($event)"></asides>

        <el-main class="c-main">
          <el-container>
            <el-header>
              <bread-crumb :bread="currentPuth"></bread-crumb>
            </el-header>
            <el-main class="m-main">
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asides from "./asides/asides";
import aItem from "./asides/item";

import headers from "./headers/headers";
import breadCrumb from "./breadcrumb/bread-crumb";
export default {
  name: "common",
  components: { asides, aItem, headers, breadCrumb },
  props: {},
  data() {
    return {
      currentPuth: ["首页"],
      toggle: false
    };
  },
  computed: {},
  methods: {
    asidePath(e) {
      this.currentPuth = e.keyPath;
    },
    toggleBtn() {
      this.toggle = !this.toggle;
    }
  }
};
</script>
<style lang='scss' scoped>
.c-header {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 4px;
}
.c-container {
  min-height: 690px;
  .c-main {
    padding: 0 !important;
    .m-main {
      // background: #ccc;
      border-radius: 4px;
      min-height: 860px;
    }
  }
}

.el-header {
  color: #333;
  line-height: 64px;
  height: 64px !important;
}

.el-aside {
  color: #333;
}

.el-main {
  color: #333;
  padding: 24px;
}
</style>

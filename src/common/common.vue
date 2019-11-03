<template>
  <div>
    <el-container>
      <el-header class="c-header">
        <headers>
          <template v-slot:left></template>
          <template v-slot:container>
            <el-button size="mini" icon="el-icon-s-fold"></el-button>
          </template>
          <template v-slot:right></template>
        </headers>
      </el-header>
      <el-container class="c-container">
        <el-aside width="255px">
          <asides @asidePath="asidePath($event)"></asides>
        </el-aside>
        <el-main class="c-main">
          <el-container>
            <el-header>
              <bread-crumb :bread="currentPuth"></bread-crumb>
            </el-header>
            <el-main class="m-main">
              <!-- <router-view></router-view> -->
              <mains></mains>
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

import menuList from "./asides/menuList";
import headers from "./headers/headers";
import mains from "./main/main";
import breadCrumb from "./breadcrumb/bread-crumb";
export default {
  name: "common",
  components: { asides, aItem, headers, mains, breadCrumb },
  props: {},
  data() {
    return {
      currentPuth: ["首页"]
    };
  },
  computed: {},
  methods: {
    asidePath(e) {
      this.currentPuth = e.keyPath;
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
      background: #ccc;
      border-radius: 4px;
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

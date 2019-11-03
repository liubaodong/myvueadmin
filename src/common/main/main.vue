<template>
  <div class="inset-main">
    <el-container>
      <el-header>
        <div class="header">头部</div>
      </el-header>
      <el-container>
        <el-aside width="280px">
          <el-input
            class="e-input"
            size="small"
            placeholder="搜索楼宇"
            focus
            suffix-icon="el-icon-search"
            v-model="input4"
          ></el-input>

          <el-menu>
            <el-menu-item>
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span class="c-title">测试</span>
                <i class="el-icon-user-solid"></i>
              </template>
            </el-menu-item>
          </el-menu>

          <asides>
            <template v-slot:list>
              <div style="min-height: 690px;">
                <a-item :data="insetList"></a-item>
              </div>
            </template>
          </asides>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asides from "../asides/asides";
import aItem from "../asides/item";
import insetList from "./inset-aslide";
export default {
  name: "inset-mains",
  components: { asides, aItem },
  props: {},
  data() {
    return { input4: "", insetList };
  },
  computed: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.inset-main {
  background: #fff;
  min-height: 814px;

  .c-title {
    width: calc(100% - 48px);
    display: inline-block;
  }
  .header {
    border-bottom: 1px solid #ccc;
  }
  .el-header {
    height: 44px !important;
    line-height: 44px;
    background: rgba(250, 250, 250, 0);
    box-shadow: 0px -1px 0px 0px rgba(232, 232, 232, 1);
  }
}
</style>
<template>
  <div class="common">
    <el-container>
      <el-header>
        <c-header>
          <template v-slot:left>
            <div>left</div>
          </template>
          <template v-slot:container>
            <div>
              <el-button class="h-btn" size="mini" icon="el-icon-s-fold"></el-button>
              <span>1</span>
              <span>1</span>
              <span>1</span>
            </div>
          </template>
          <template v-slot:right></template>
        </c-header>
      </el-header>
      <el-container>
        <el-aside style="width: 255px;">
          <c-aside></c-aside>
        </el-aside>
        <el-container>
          <el-main></el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import cHeader from "./header/header";
import cAside from "./aside/aside";
export default {
  name: "common",
  components: { cHeader, cAside },
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.el-header {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  color: #333;
  line-height: 64px;
  height: 64px;
}
.el-aside {
  color: #333;
  height: 1024px;
}
.el-main {
  background-color: #efefef;
  color: #333;
}
</style>
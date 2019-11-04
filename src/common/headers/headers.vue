<template>
  <div class="headers">
    <el-row type="flex" align="center">
      <el-col class="left">
        <slot name="left">
          <i class="el-icon-platform-eleme"></i>
        </slot>
      </el-col>
      <el-col class="container">
        <slot name="container">container</slot>
      </el-col>
      <el-col class="right">
        <el-row type="flex">
          <img src="@/assets/logo.png" alt />
          <el-col>管理員</el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: "headers",
    components: {},
    props: {},
    data() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>
<style lang='scss' scoped>
.headers {
  line-height: 64px;
  .el-row--flex {
    align-items: center;
  }
  span {
    display: inline-block;
  }
  .left {
    width: 235px;
    .el-icon-platform-eleme {
      font-size: 24px;
      color: blue;
    }
  }
  .right {
    width: 135px;
    line-height: 64px;
    img {
      display: inline-block;
      width: 38px;
      height: 38px;
    }
  }
  .container {
    width: calc(100% - 370px);
  }
}
</style>

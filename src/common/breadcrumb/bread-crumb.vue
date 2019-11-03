<template>
  <div class="bread-crumb">
    <slot name="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <!-- <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item> -->
        <el-breadcrumb-item v-for="path in bread">{{path}}</el-breadcrumb-item>
      </el-breadcrumb>
    </slot>
  </div>
</template>

<script>
export default {
  name: "bread-crumb",
  components: {},
  props: {
    bread: {}
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style lang='scss' scoped>
.bread-crumb {
  .el-breadcrumb {
    line-height: 54px;
  }
}
</style>
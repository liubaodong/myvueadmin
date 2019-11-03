<template>
  <div class="caside">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "caside",
  components: {},
  props: {},
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
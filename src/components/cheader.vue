<template>
  <div>
    <el-header>
      <div class="cheader">
        <slot name="container">默认内容</slot>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "cheader",
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
.el-header {
  height: 44px !important;
  line-height: 44px !important;
  border-bottom: 1px solid #ccc;
}
</style>
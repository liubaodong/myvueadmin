<template>
  <div>
    <el-dialog
      title="提示"
      close-on-press-escape
      close-on-click-modal
      :show-close="false"
      :visible.sync="show"
      width="30%"
      center
    >
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="close">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "dialogs",
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    close() {
      this.$emit("closeDialogs", { type: false });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
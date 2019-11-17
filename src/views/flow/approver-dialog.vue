<!--
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-17 18:06:44
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-17 21:08:38
 * @FilePath: \myvueadmin\src\views\flow\approver-dialog.vue
 -->
<template>
  <div class="dialog">
    <el-dialog
      :title="data.name"
      :visible.sync="dialogVisible"
      @close="$emit('update:show', false)"
      width="540px"
      style="margin: 0"
    >
      <!-- container -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="设置审批人" name="first">
          <setting-approver></setting-approver>
        </el-tab-pane>
        <el-tab-pane label="表单操作权限" name="second"
          >表单操作权限</el-tab-pane
        >
      </el-tabs>
      <!-- footer -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="outPut">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import settingApprover from './setting-approver'
export default {
  name: 'approver-dialog',
  components: {
    settingApprover
  },
  props: {
    show: false,
    option: {}
  },
  watch: {
    show() {
      this.dialogVisible = this.show
    },
    option() {
      this.data = this.option.treeData
      console.log('option', this.data)
    }
  },
  data() {
    return {
      activeName: 'first',
      dialogVisible: false,
      data: {},
    }
  },
  computed: {
  },
  methods: {
    outPut() {
      this.dialogVisible = false
      this.$emit('approverDialog', this.data)
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },

  },
}
</script>
<style lang='scss' scoped>
.dialog {
  width: 100%;
  height: 100%;
  .dialog-footer {
    position: absolute;
    bottom: 30px;
    right: 20px;
  }
}
</style>e>
<!--
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-14 14:47:20
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-14 15:23:50
 * @FilePath: \myvueadmin\src\views\flow\dialog.vue
 -->
<template>
  <div class="dialog">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      @close="$emit('update:show', false)"
      width="30%"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="outPut(0)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'c-dialog',
  components: {
  },
  props: {
    show: false,
    option: {

    }
  },
  watch: {
    show() {
      this.dialogVisible = this.show
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  computed: {

  },
  methods: {
    outPut() {
      this.dialogVisible = false
      this.$emit('outPut', {})
    }
  },
}
</script>
<style lang='scss' scoped>
</style>
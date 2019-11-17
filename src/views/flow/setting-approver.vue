<!--
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-17 19:46:34
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-17 21:16:25
 * @FilePath: \myvueadmin\src\views\flow\setting-approver.vue
 -->
<template>
  <div>
    <!-- 上面条件 -->
    <div class="box">
      <el-row type="flex" align="center">
        <el-col :span="8" v-for="item in data" style="margin-bottom:20px">
          <el-radio v-model="radio" @change="changed" :label="item.value">{{
            item.name
          }}</el-radio>
        </el-col>
      </el-row>
    </div>
    <div class="container1">
      <div class="first" v-if="radio === 'APPROVER_SELECT'">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="innerVisible = true"
          >添加成员</el-button
        >
        <span class="inSpan">不能超过20人</span>
      </div>
    </div>
    <el-dialog
      class="in-dialog"
      width="700px"
      title="内层 Dialog"
      :visible.sync="innerVisible"
      append-to-body
    >
      <div slot="footer" class="dialog-footer">
        <el-button @click="innerVisible = false">取 消</el-button>
        <el-button type="primary" @click="choseUser"> 确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'setting-approver',
  components: {

  },
  props: {

  },
  data() {
    return {
      innerVisible: false,
      successData: {},
      radio: 'APPROVER_SELECT',
      data: [
        { value: 'APPROVER_SELECT', name: "指定成员", },
        { value: 'APPROVER_MANAGEMENT', name: "主管", },
        { value: 'APPROVER_ROLE', name: "角色", },
        { value: 'APPROVER_OPTIONAL', name: "自选", },
        { value: 'APPROVER_ORIGINATOR', name: '发起人自己', },
        { value: 'APPROVER_CONTACTS', name: "联系人", },
        { value: 'APPROVER_MULTI_SUPERVISOR', name: "多级主管" }
      ],
      obj: [
        { label: 1, name: 'diyi' },
        { label: 2, name: 'dier' },
        { label: 3, name: 'disan' },
        { label: 4, name: 'disi' },
        { label: 5, name: 'diwu' },
      ]
    }
  },
  computed: {

  },
  methods: {
    changed(e) {
      console.log('change', e)
    },

    choseUser() {
      this.innerVisible = false
      console.log(1)
    }
  },
}
</script>
<style lang='scss' scoped>
.el-row--flex {
  flex-wrap: wrap;
}
.box {
  padding: 10px;
}
.container1 {
  .first {
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
  }
  .inSpan {
    display: inline-block;
    margin-left: 20px;
    color: #ccc;
  }
}
.el-dialog__body {
  height: 500px !important;
}
</style>
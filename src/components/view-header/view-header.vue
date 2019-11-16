<!--
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-04 10:42:43
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-07 16:05:12
 * @FilePath: \myvueadmin\src\components\view-header\view-header.vue
 -->
<template>
  <div class="view-main">
    <div class="header">
      <el-row type="flex" align="center">
        <div class="header-h">
          <slot name="title">{{data.title}}</slot>
        </div>
        <el-col :span="2" class="tag">
          <slot name="tag">{{data.tag}}</slot>
        </el-col>
        <el-col :span="4" v-if="setting">
          <el-button @click="settingBack" class="setting" size="mini">
            <slot name="setting">设置</slot>
          </el-button>
        </el-col>
      </el-row>
      <div class="desc">
        <slot name="desc">{{data.desc}}</slot>
      </div>
    </div>
    <el-button type="text" @click="show">点击打开 Dialog</el-button>
    <dialogs :show="centerDialogVisible" @closeDialogs="closeDialogs($event)"></dialogs>
  </div>
</template>

<script>
import dialogs from "components/dialogs";
export default {
  name: "h-main",
  components: { dialogs },
  props: { setting: { type: Boolean, default: false } },
  data() {
    return {
      centerDialogVisible: false,
      data: {
        title: "测试数据",
        tag: "综合",
        desc: "这是测试描述可以看看"
      }
    };
  },
  computed: {},
  methods: {
    show() {
      this.centerDialogVisible = !this.centerDialogVisible;
    },
    closeDialogs(e) {
      this.centerDialogVisible = e.type;
    },
    settingBack() {
      this.$emit("setting", { data: "返回数据" });
    }
  }
};
</script>
<style lang='scss' scoped>
.view-main {
  .header {
    height: 69px;
    border-bottom: 1px solid #ccc;
    .el-row--flex {
      align-items: center;
      .header-h {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      .tag {
        width: 32px;
        height: 18px;
        background: rgba(255, 169, 0, 1);
        border-radius: 4px;
        color: #fff;
        font-family: PingFangSC-Regular, PingFang SC;
        margin-left: 20px;
      }
      .setting {
        margin-left: 20px;
      }
    }
    .desc {
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 20px;
      margin-top: 8px;
    }
  }
}
</style>
<template>
  <div class="view-main">
    <view-header :setting="false" @setting="setting($event)">
      <template v-slot:desc>hahahah</template>
    </view-header>
    <view-search ></view-search>
    <!-- <el-button type="text" @click="show">点击打开 Dialog</el-button>
    <dialogs :show="centerDialogVisible" @closeDialogs="closeDialogs($event)"></dialogs>-->
  </div>
</template>

<script>
import viewHeader from "components/view-header/view-header";
import viewSearch from "components/view-search/view-search";
import dialogs from "components/dialogs";
export default {
  name: "h-main",
  components: { dialogs, viewHeader, viewSearch },
  props: {},
  data() {
    return {
      centerDialogVisible: false,
      data: {
        title: "测试数据",
        tag: "综合",
        desc: "这是描述 可以看看"
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
    setting(e) {
      console.log(e);
    }
  }
};
</script>
<style lang='scss' scoped>
.view-main {
  .header {
    height: 80px;
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
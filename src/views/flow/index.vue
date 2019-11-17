<!--
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-14 14:04:47
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-17 19:44:34
 * @FilePath: \myvueadmin\src\views\flow\index.vue
 -->
<template>
  <div class="flow body">
    <div class="box">
      <!-- 开始发起请求 -->
      <div class="start">
        <el-row type="flex" align="center">
          <div class="header">发起人</div>
        </el-row>
        <div class="container" @click="editDialog">
          <el-col :span="22">所有人</el-col>
          <el-col :span="2">
            <i class="el-icon-arrow-right"></i>
          </el-col>
        </div>
      </div>
      <!-- 下面的竖线 -->
      <div class="line">
        <el-popover
          v-model="visible"
          placement="right"
          width="400"
          trigger="click"
        >
          <el-button
            slot="reference"
            class="line-btn"
            type="primary"
            size="mini"
            icon="el-icon-plus"
            circle
          />
          <!-- 里面条件 -->
          <el-row type="flex" justify="center" align="center">
            <el-col :span="8" style="text-align: center; padding: 29px 0">
              <el-button
                type="warning"
                icon="el-icon-s-promotion"
                circle
                @click="add('approver')"
              />
              <el-col style="margin-top: 10px">审批人</el-col>
            </el-col>
            <el-col :span="8" style="text-align: center;  padding: 29px 0">
              <el-button
                type="danger"
                icon="el-icon-edit"
                circle
                @click="add('notifier')"
              />
              <el-col style="margin-top: 10px">抄送人</el-col>
            </el-col>
            <el-col :span="8" style="text-align: center;  padding: 29px 0">
              <el-button
                type="success"
                icon="el-icon-share"
                circle
                @click="add('conditionEnter')"
              />
              <el-col style="margin-top: 10px">条件分支</el-col>
            </el-col>
            <i class="el-icon-close" @click="visible = !visible" />
          </el-row>
        </el-popover>
      </div>
      <!-- 审批流程    -->
      <template v-if="treeData.nodeType">
        <node
          :myIndex="0"
          :broLength="1"
          :pId="treeData.id"
          :treeData="treeData"
          :plin="0"
        ></node>
      </template>
      <!-- 结束线 -->
      <div v-else class="done">
        <div class="done-line"></div>
        <div class="done-circle"></div>
        <span>流程结束</span>
      </div>
    </div>
    <c-dialog
      :show.sync="dialogOption.show"
      :option="dialogOption"
      @outPut="outPut($event)"
    ></c-dialog>

    <el-footer>
      <el-button type="primary" @click="successData">发布</el-button>
    </el-footer>
  </div>
</template>

<script>
import cDialog from './dialog'
import FlowFun from './flowFun'
import node from './node'
export default {
  name: 'flow',
  components: {
    cDialog, node,
  },
  props: {

  },
  created() {


  },
  mounted() {
    this.flowFun = new FlowFun()
    this.eventBus.$on('delNode', this.delNode)
    this.eventBus.$on('addBro', this.addBro)
    this.eventBus.$on('addChildNode', this.addChildNode)
  },
  destroyed() {
    this.flowFun = null
    this.eventBus.$on('delNode', this.delNode)
    this.eventBus.$on('addBro', this.addBro)
    this.eventBus.$on('addChildNode', this.addChildNode)
  },
  data() {
    return {
      reloading: false,
      deepCopy: null,
      deepDelete: null,
      flowFun: null,
      visible: false,
      dialogOption: {
        show: false
      },
      treeData: {
      },
    }
  },
  watch: {
    treeData: {
      handler() {
        this.$nextTick(() => {
          const wrapdom = document.querySelector(".body");
          const treedom = wrapdom.querySelectorAll(".node-wrap");
          let width = 1700;
          treedom.forEach(i => {
            if (i.scrollWidth > width) {
              width = i.scrollWidth;
            }
          });
          if (width !== 1700) {
            wrapdom.style.width = `${width}px`;
          } else {
            wrapdom.style.width = "100%";
          }
        });
      },
      deep: true
    }
  },
  computed: {

  },
  methods: {
    successData() {
      console.log('successData', this.treeData, this.flowFun.stack)
    },
    editDialog() {
      this.dialogOption.show = true
    },
    outPut(e) {
      console.log(e)
    },
    approverDialog(e) {
      console.log(e)
    },
    add(type) {
      // 判断添加的类型
      if (type === 'conditionEnter') {
        const obj = {
          id: this.flowFun.getId(),
          nodeType: type,
          conditionNodes: [
            {
              id: this.flowFun.getId(),
              nodeType: "condition",
              operationCode: "",
              name: "条件",
              operationname: "",
              checkVal: [],
              ruleArr: []
            },
            {
              id: this.flowFun.getId(),
              nodeType: "condition",
              operationCode: "",
              name: "条件",
              operationname: "",
              checkVal: [],
              ruleArr: []
            }
          ]
        };

        obj.conditionNodes[0].parentId = obj.conditionNodes[1].parentId =
          obj.id;
        if (this.treeData.id) {
          obj.childNode = this.flowFun.deepCopy(this.treeData)
          obj.childNode.parentId = obj.id;
        }
        this.$set(this, "treeData", obj);
      } else {
        const obj = {
          id: this.flowFun.getId(),
          nodeType: type,
          name: type === 'approver' ? '审批人' : '抄送人'
        };
        if (this.treeData.id) {
          obj.childNode = this.flowFun.deepCopy(this.treeData)
          obj.childNode.parentId = obj.id;
          obj.childNode.name = obj.name;
        }
        this.$set(this, "treeData", obj);
      }

      this.visible = false
      // console.log('pushData', this.treeData)
      this.flowFun.pushStack(this.treeData)
      this.$nextTick(() => {
        this.reload();
      });
    },
    // 重载
    reload() {
      this.reloading = true;
      this.$set(this, "treeData", this.flowFun.deepCopy(this.treeData));
      setTimeout(() => {
        this.reloading = false;
      }, 500);
    },

    // 删除节点
    delNode(obj) {
      const treeData = this.flowFun.delNode(this.treeData, obj);
      this.flowFun.pushStack(this.treeData)

      if (treeData) {
        const tr = this.$set(this, "treeData", this.flowFun.deepCopy(treeData));
      } else {
        this.$set(this, "treeData", {});
      }
      this.$nextTick(() => {
        this.reload();
      });
      // console.log('treeData', this.treeData, this.flowFun.stack)
    },
    // 添加兄弟节点
    addBro(pId) {
      //深拷贝数据
      this.flowFun.pushStack(this.treeData)
      const obj = {
        nodeType: "condition",
        parentId: pId,
        operationCode: "",
        name: "",
        operationname: ""
      };

      const treeData = this.flowFun.addChildNode(this.treeData, obj)
      this.$set(this, 'treeData', this.flowFun.deepCopy(treeData));
      this.$nextTick(() => {
        this.reload();
      });
    },
    //添加子节点
    addChildNode(obj) {
      // console.log('indexObj', obj)
      const treeData = this.flowFun.addChildNode(this.treeData, obj);
      this.flowFun.pushStack(treeData);
      this.$set(this, "treeData", this.flowFun.deepCopy(treeData));
      this.$nextTick(() => {
        this.reload();
      });
    }

  },
}
</script>
<style lang='scss' scoped>
.body {
  box-sizing: border-box;
}
.flow {
  height: 100%;
  width: 100%;
  // 总盒子
  .box {
    width: 100%;
    height: 100%;

    // 开始
    .start {
      width: 144px;
      height: 68px;
      border-radius: 4px;
      margin: 0 auto;
      background: #fff;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      .header {
        width: 100%;
        line-height: 28px;
        background: rgba(108, 111, 143, 1);
        text-align: center;
        color: #fff;
      }
      .container {
        padding: 0 10px;
        line-height: 40px;
      }
    }
    .line {
      height: 60px;
      width: 1px;
      background: rgba(212, 212, 212, 1);
      margin: 0 auto;
      .line-btn {
        margin-top: 14px;
        margin-left: -13px;
      }
    }
    .done {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: rgba(212, 212, 212, 1);
      .done-circle {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(212, 212, 212, 1);
      }
      .done-line {
        height: 20px;
        width: 1px;
        background: rgba(212, 212, 212, 1);
      }
    }
  }
}
</style>
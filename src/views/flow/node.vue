<!--
 * @description: 头部描述
 * @Author: Coder
 * @Date: 2019-11-14 14:05:12
 * @LastEditors: Coder
 * @LastEditTime: 2019-11-17 19:49:01
 * @FilePath: \myvueadmin\src\views\flow\node.vue
 -->
<template>
  <div ref="now" class="stament" :class="'node' + treeData.id">
    <!-- 节点头上那条线 -->
    <div class="topline line" />
    <!-- 条件头上的横线 -->
    <div
      class="width-line"
      :class="'width-line' + treeData.id"
      v-if="treeData.nodeType === 'conditionEnter'"
    ></div>
    <!-- 节点本身一个div一个块 -->
    <!-- 审批人节点 -->
    <div class="box cStyle" v-if="treeData.nodeType === 'approver'">
      <el-row class="bo">
        <el-col :span="21">
          <el-input id="input" size="mini" v-model="treeData.name"></el-input>
        </el-col>
        <el-col :span="3">
          <i class="el-icon-close white" @click="delNode"></i>
        </el-col>
      </el-row>
      <div class="container" @click="editDialog">
        <el-col :span="22">发起人自选</el-col>
        <el-col :span="2">
          <i class="el-icon-arrow-right"></i>
        </el-col>
      </div>
    </div>
    <!-- 抄送人节点 -->
    <div class="box cStyle" v-if="treeData.nodeType === 'notifier'">
      <el-row class="bw">
        <el-col :span="21">
          <el-input id="input" size="mini" v-model="treeData.name"></el-input>
        </el-col>
        <el-col :span="3">
          <i class="el-icon-close white" @click="delNode"></i>
        </el-col>
      </el-row>
      <div class="container" @click="editDialog">
        <el-col :span="22">发起人自选</el-col>
        <el-col :span="2">
          <i class="el-icon-arrow-right"></i>
        </el-col>
      </div>
    </div>
    <!-- 条件节点 -->
    <div class="box cStyle" v-if="treeData.nodeType === 'condition'">
      <el-row class="lh28">
        <el-col :span="12">
          <el-input id="input-c" size="mini" v-model="treeData.name"
            >haha1</el-input
          >
        </el-col>
        <el-col :span="8" style="color: #999999; font-size: 12px;"
          >优先级</el-col
        >
        <el-col :span="3">
          <i class="el-icon-close black" @click="delNode"></i>
        </el-col>
      </el-row>
      <div class="container" @click="editDialog">
        <el-col :span="22">发起人自选</el-col>
        <el-col :span="2">
          <i class="el-icon-arrow-right"></i>
        </el-col>
      </div>
    </div>
    <!-- 添加子节点 -->
    <div
      class="line"
      :class="'heiLine' + treeData.id"
      v-if="treeData.nodeType !== 'conditionEnter'"
    >
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
        <el-row type="flex" justify="center" align="center">
          <el-col :span="8" style="text-align: center; padding: 29px 0">
            <el-button
              type="warning"
              icon="el-icon-s-promotion"
              circle
              @click="addChildNode('approver')"
            />
            <el-col style="margin-top: 10px">审批人</el-col>
          </el-col>
          <el-col :span="8" style="text-align: center;  padding: 29px 0">
            <el-button
              type="danger"
              icon="el-icon-edit"
              circle
              @click="addChildNode('notifier')"
            />
            <el-col style="margin-top: 10px">抄送人</el-col>
          </el-col>
          <el-col :span="8" style="text-align: center;  padding: 29px 0">
            <el-button
              type="success"
              icon="el-icon-share"
              circle
              @click="addChildNode('conditionEnter')"
            />
            <el-col style="margin-top: 10px">条件分支</el-col>
          </el-col>
          <i class="el-icon-close" @click="visible = !visible" />
        </el-row>
      </el-popover>
    </div>
    <!-- 添加兄弟节点 -->
    <div
      v-if="myIndex + 1 === broLength && treeData.nodeType === 'condition'"
      class="adBroBtn"
      @click="addBro"
    >
      添加条件
    </div>

    <!-- 遍历子节点  -->
    <div
      v-if="treeData.conditionNodes"
      class="node-wrap"
      :class="'node-wrap' + treeData.id"
    >
      <node
        v-for="(item, i) in treeData.conditionNodes"
        :key="i"
        class="node-item"
        :class="`node-item-${treeData.id}-${i}`"
        :my-index="i"
        :plin="1"
        :bro-length="treeData.conditionNodes.length"
        :p-id="treeData.id"
        :tree-data="item"
      ></node>
    </div>
    <!-- 添加横线 -->
    <div
      class="width-line"
      :class="'width-line' + treeData.id"
      v-if="treeData.nodeType === 'conditionEnter'"
    ></div>
    <!-- 添加子节点 -->
    <div
      class="line"
      :class="'heiLine' + treeData.id"
      v-if="
        treeData.nodeType === 'conditionEnter' &&
          treeData.conditionNodes.length > 1
      "
    >
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
        <el-row type="flex" justify="center" align="center">
          <el-col :span="8" style="text-align: center; padding: 29px 0">
            <el-button
              type="warning"
              icon="el-icon-s-promotion"
              circle
              @click="addChildNode('approver')"
            />
            <el-col style="margin-top: 10px">审批人</el-col>
          </el-col>
          <el-col :span="8" style="text-align: center;  padding: 29px 0">
            <el-button
              type="danger"
              icon="el-icon-edit"
              circle
              @click="addChildNode('notifier')"
            />
            <el-col style="margin-top: 10px">抄送人</el-col>
          </el-col>
          <el-col :span="8" style="text-align: center;  padding: 29px 0">
            <el-button
              type="success"
              icon="el-icon-share"
              circle
              @click="addChildNode('conditionEnter')"
            />
            <el-col style="margin-top: 10px">条件分支</el-col>
          </el-col>
          <i class="el-icon-close" @click="visible = !visible" />
        </el-row>
      </el-popover>
    </div>
    <!-- 添加下一个节点 -->
    <template v-if="treeData.childNode">
      <node
        :myIndex="0"
        :broLength="1"
        :pId="treeData.id"
        :treeData="treeData.childNode"
        :plin="lineheight"
      ></node>
    </template>
    <!-- 结束线 -->
    <div class="done" v-if="plin === 0 && !treeData.childNode">
      <div class="done-line"></div>
      <div class="done-circle"></div>
      <span>流程结束</span>
    </div>
    <div class="pos">
      <approver-dialog
        :show.sync="dialogOption.show"
        :option="dialogOption"
        @approverDialog="approverDialog($event)"
      ></approver-dialog>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import approverDialog from './approver-dialog'

export default {
  name: 'node',
  components: {
    approverDialog
  },
  props: ["treeData", "myIndex", "broLength", "pId", "plin"], // 节点数据， 当前索引 ， 兄弟集合长度, 父节点id,
  data() {
    return {
      dialogOption: {
        show: false,
      },
      visible: false,
      value: '审批人',
      value2: '条件',
      nodeType: '',
      nodeId: 1000,
      lineheight: 0,
      widthLine: {
        width: "20px",
        height: "1px",
        background: "#000"
      },
    }
  },
  created() {

  },
  computed: {


  },
  mounted() {
    this.updateLine();
    this.updateBox();

  },
  watch: {
    treeData: {
      handler() {
        // 画线
        this.updateLine();
        this.updateBox();
        // console.log('node', this.treeData)

      },
      deep: true
    }
  },
  methods: {
    // 删除节点
    delNode() {
      this.eventBus.$emit('delNode', this.treeData)
    },
    // 添加子节点
    addChildNode(type) {
      // console.log('sonNode', type)
      this.visible = false;
      this.eventBus.$emit("addChildNode", {
        nodeType: type,
        parentId: this.treeData.id,
        name: type === 'approver' ? '审批人' : '抄送人'
      });
    },
    editDialog() {
      this.dialogOption = {
        show: true,
        treeData: this.treeData
      }


    },
    approverDialog(e) {
      console.log('approver-dialog-back', e)
    },

    updateLine() {
      if (this.plin !== 0) {
        //告诉当前节点身在一个分支树内
        this.lineheight = this.plin
      }
      const heiDom = $(`.heiLine${this.treeData.id}`).height(60)
      // console.log('hDom', heiDom)
      this.$nextTick(() => {
        this.$nextTick(() => {
          if (this.plin === 1 && !this.treeData.childNode) {

            // 当前node若是一个在分支内最后的节点
            const hDom = $(
              $(`.node${this.treeData.id}`).closest(".node-item")
            );
            // console.log('hDom', hDom.offset().top)
            const linDom = $(`.heiLine${this.treeData.id}`);
            // console.log('linDom', linDom.offset().top)
            const linDomHeight = linDom.height(
              hDom.height() - (linDom.offset().top - hDom.offset().top)
            );
            // console.log('linDomHeight', linDomHeight.height())
          }
        })



        // debugger
        //画横线
        if (this.treeData.nodeType === "conditionEnter") {
          const wrapdom = this.$refs.now.querySelector(".node-wrap");
          //conditionNodes
          if (wrapdom) {
            if (this.treeData.conditionNodes && this.treeData.conditionNodes.length > 1) {
              let width = 0;
              this.treeData.conditionNodes.forEach((i, k) => {
                if (k === 0 || k === this.treeData.conditionNodes.length - 1) {
                  width += 10;
                  width += this.$refs.now.querySelectorAll(`.node-item-${this.treeData.id}-${k}`)[0].clientWidth / 2;
                } else {
                  width += 20;
                  width += this.$refs.now.querySelectorAll(`.node-item-${this.treeData.id}-${k}`)[0].clientWidth
                }
              });
              const widthLine = this.$refs.now.querySelectorAll(
                `.width-line${this.treeData.id}`
              );
              const leftchildWidth = this.$refs.now.querySelectorAll(
                `.node-item-${this.treeData.id}-0`
              )[0].clientWidth;
              const rightchildWidth = this.$refs.now.querySelectorAll(
                `.node-item-${this.treeData.id}-${this.treeData.conditionNodes.length -
                1}`
              )[0].clientWidth;
              const marginLeft = (leftchildWidth - rightchildWidth) / 2;
              widthLine[0].style.width = `${width}px`;
              widthLine[1].style.width = `${width}px`;
              widthLine[0].style.marginLeft = `${marginLeft}px`;
              widthLine[1].style.marginLeft = `${marginLeft}px`;
              this.$forceUpdate();

            } else {
              const widthLine = this.$refs.now.querySelectorAll(
                `.width-line${this.treeData.id}`
              );
              widthLine[0].style.width = "1px";
              widthLine[1].style.width = "1px";
            }
          }
        }

      })
    },
    updateBox() {
      this.$nextTick(() => {
        if (
          this.treeData.nodeType === "approver" ||
          this.treeData.nodeType === "carbonCopy"
        ) {
          const box = this.$refs.now.querySelector(".box");
          box.removeAttribute("style");
        } else if (this.treeData.nodeType === "conditionEnter") {
          const wrapdom = this.$refs.now.querySelector(".node-wrap");
          if (wrapdom) {
            wrapdom.removeAttribute("style");
          }
        }
      });
    },
    // 添加兄弟节点
    addBro() {
      this.eventBus.$emit("addBro", this.pId);
    },
  },
}
</script>
<style lang='scss' scoped>
.stament {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .pos {
    position: absolute;
  }
  .bo {
    background: #e9b543;
  }
  .lh28 {
    line-height: 28px;
  }
  .bw {
    background: rgba(224, 88, 88, 1);
  }

  .white {
    color: #fff;
  }
  .black {
    color: black;
  }
  .cStyle {
    width: 144px;
    height: 68px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    cursor: pointer;
  }
  .line {
    height: 60px;
    width: 1px;
    background: rgba(212, 212, 212, 1);
  }
  .topline {
    height: 30px !important;
  }
  .width-line {
    height: 1px;
    width: 1px;
    background: rgba(212, 212, 212, 1);
  }
  .container {
    padding: 0 10px;
    line-height: 40px;
  }
  .adBroBtn {
    width: 80px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    color: rgba(100, 117, 255, 1);
    letter-spacing: 0;
    cursor: pointer;
    position: absolute;
    top: 20px;
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
  .node-wrap {
    display: flex;
    flex-direction: row;
    .node-item {
      margin: 0 10px;
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
</style>
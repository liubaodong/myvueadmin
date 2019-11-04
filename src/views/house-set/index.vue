<template>
  <div class="house">
    <c-header>
      <template v-slot:container>梨奈克打狗</template>
    </c-header>
    <el-container>
      <a-sides :router="true" style="width: 250px">
        <template v-slot:list>
          <div style="min-height: 690px;">
            <a-item :data="insetList"></a-item>
          </div>
        </template>
      </a-sides>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

    <!-- <el-aside style="min-height: 690px">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
      <el-tree
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        :default-expand-all="false"
        :filter-node-method="filterNode"
        icon-class="el-icon-folder"
        ref="tree"
      ></el-tree>
    </el-aside>-->
  </div>
</template>

<script>
import aSides from "common/asides/asides";
import aItem from "common/asides/item";
import cHeader from "components/cheader";
export const insetList = [
  {
    title: "侧边栏",
    key: "/house/main",
    icon: "el-icon-s-home",
    rIcon: ""
  },
  {
    title: "业主管理",
    key: "/form",
    icon: "el-icon-film",
    rIcon: ""
  },
  {
    title: "缴费",
    key: "/table",
    icon: "el-icon-film",
    rIcon: "",
    children: [
      {
        title: "缴费设置",
        key: "/table/basic",
        icon: "el-icon-date",
        rIcon: ""
      }
    ]
  },
  {
    title: "物业保修",
    key: "/rich",
    icon: "el-icon-wallet"
  },
  {
    title: "投诉表扬",
    key: "/city",
    icon: "el-icon-office-building"
  },
  {
    title: "员工管理",
    key: "/order",
    icon: "el-icon-notebook-1"
  },
  {
    title: "通知公告",
    key: "/bikeMap",
    icon: "el-icon-place"
  }
];

export default {
  name: "house",
  components: { aSides, aItem, cHeader },
  props: {},
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      insetList,
      filterText: "",
      data: [
        {
          id: 1,
          label: "一级 1",
          icon: "el-icon-el-icon-folder",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              icon: "el-icon-el-icon-folder",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                  icon: "el-icon-el-icon-folder"
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                  icon: "el-icon-el-icon-folder"
                }
              ]
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          icon: "el-icon-el-icon-folder",
          children: [
            {
              id: 7,
              label: "二级 3-1",
              icon: "el-icon-el-icon-folder"
            },
            {
              id: 8,
              label: "二级 3-2",
              icon: "el-icon-el-icon-folder"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label",
        icon: "icon"
      }
    };
  },
  computed: {},
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
};
</script>
<style lang='scss' scoped>
.house {
  background: #fff;
}
</style>

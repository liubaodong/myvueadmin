<template>
  <div class="cheader">
    <span class="left">
      <slot name="left">默认left</slot>
    </span>
    <span class="container">
      <slot name="container">默认container</slot>
    </span>
    <span class="right">
      <slot name="right">默认right</slot>
    </span>
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
.cheader {
  span {
    display: inline-block;
  }
  .left {
    width: 235px;
  }
  .container {
    width: calc(100% - 340px);
  }
  .right {
    width: 105px;
  }
}
</style>
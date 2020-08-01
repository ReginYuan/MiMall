<template>
  <div class="nav-bar" :class="{'is_false':isFixed}">
    <div class="container">
      <div class="pro-title">小米10</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>

        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-param",
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    // 绑定滚动事件
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    //判断下滑是否大于152像素 大于isFixed等于true 小于isFixed等于false,以此来控制吸顶功能是否显示
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    },
    // 销毁initHeight事件,避免其他页面使用吸顶功能
    destroyed() {
      //删除吸顶功能
      window.removeEventListener("scroll", this.initHeight, false);
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";

.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid #e5e5e5;
  background-color: $colorG;

  /*吸顶样式*/
  &.is_false {
    /*固定定位*/
    position: fixed;
    top: 0;
    width: 100%;
    /*底部阴影*/
    box-shadow: 0 5px 5px $colorE;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      font-size: $fontJ;
      span {
        margin: 0 10px;
      }
      a {
        color: $colorC;
      }
    }
  }
}
</style>
// 底部服务模块
<template>
  <div class="service">
    <div class="container">
      <ul>
        <li>
          <span class="icon-setting"></span>百强企业 品质保证
        </li>
        <li>
          <span class="icon-7day"></span>7天退货 15天换货
        </li>
        <li>
          <span class="icon-48meny"></span> 48元起免运费
        </li>
        <li>
          <span class="icon-post"></span>2000家服务店 全国联保
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-bar"
};
</script>


<style lang="scss">
@import "./../assets/scss/mixin.scss";
.service {
  padding: 33px 0;

  color: #666666;
  font-size: 16px;
  li {
    display: inline-block;
    width: 24.9%;
    text-align: center;
    border-right: 1px solid #e5e5e5;
    span {
      display: inline-block;
      width: 40px;
      height: 40px;
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon-setting {
      @include bgImg(40px, 40px, "/imgs/enterprise.png");
    }
    .icon-7day {
      @include bgImg(40px, 40px, "/imgs/SevenDays.png");
    }
    .icon-48meny {
      @include bgImg(40px, 40px, "/imgs/48hours.png");
    }
    .icon-post {
      @include bgImg(40px, 40px, "/imgs/guarantee.png");
    }
  }
}
</style>
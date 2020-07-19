<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-zj.png" alt />
      <p>紫荆商城</p>
    </div>
    <div class="footer-link">
      <a target="_blank" href="https://www.vmall.com/help/faq-4355.html">购物相关</a>
      <span>|</span>
      <a target="_blank" href="https://www.vmall.com/help/faq-833.html">保修与退换货</a>
      <span>|</span>
      <a target="_blank" href="https://consumer.huawei.com/cn/support/discriminate/">特色服务</a>
      <span>|</span>
      <a target="_blank" href="https://www.huawei.com/cn/corporate-information">关于我们</a>
      <span>|</span>
      <a target="_blank" href="https://www.huawei.com/cn/">友情链接</a>
    </div>

    <div class="copyright">
      COOKIES Copyright © 2012-2020
      <span class="domain">huawei.com</span> 紫荆终端有限公司
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
};
</script>
<style lang="scss">
/*引入公共组件将重复的样式进行剥离，放入公共组建中*/
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  background-color: #e5e5e5;
  border-top: 1px solid #d81e06;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    font-weight: bold;
    img {
      width: 53px;
      height: 53px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #d81e06;
    }
  }
}
</style>
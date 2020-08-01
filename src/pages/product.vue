/**
*商品页面
*/

<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>

    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
  </div>
</template>

<script>
import ProductParam from "@/components/ProductParam";
export default {
  name: "product",
  components: {
    ProductParam,
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/modal.scss";
@import "./../assets/scss/button.scss";

.product {
  .btn {
    margin-left: 10px;
  }
  .h {
    height: 200px;
  }
}
</style>

<template>
  <div class="cart">
    <order-header title="我的购物车">
      <template v-slot:tip>
        <span>温馨提示:产品是否购买成功，最终已下单请尽快付款</span>
      </template>
    </order-header>cart
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader";
import NavFooter from "@/components/NavFooter";
export default {
  name: "cart",
  components: {
    OrderHeader,
    NavFooter,
  },
};
</script>
<style lang="scss">
</style>
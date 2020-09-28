<template>
<div>
    <order-header v-bind:title="title">
        <template v-slot:tip>
            <span>{{ tip }}</span>
        </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
</div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader";
import ServiceBar from "@/components/ServiceBar";
import NavFooter from "@/components/NavFooter";
export default {
    name: "order",
    data() {
        return {
            title: "",
            tip: "",
        };
    },
    components: {
        OrderHeader,
        ServiceBar,
        NavFooter,
    },
    mounted() {
        // 路由地址
        let path = this.$route.path;
        // eslint-disable-next-line no-empty
        if (path == "/order/orderConfirm") {
            this.title = "订单确认";
            this.tip = "请认真填写收货地址";
        } else if (path == "/order/orderList") {
            this.title = "订单列表";
            this.tip = "请谨防钓鱼链接或者诈骗电话，了解更多>";
        } else if (path == "/order/orderPay") {
            this.title = "订单支付";
            this.tip = "请谨防钓鱼链接或者诈骗电话，了解更多>";
        }
    },
};
</script>

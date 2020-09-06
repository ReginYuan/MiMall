/**
*主页面视图
 */
<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    name: "app",
    components: {
        // eslint-disable-next-line vue/no-unused-components
    },
    data() {
        return {
            res: {},
        };
    },

    mounted() {
        // 如果用户登录就显示用户信息和商品数量
        if (this.$cookie.get("userId")) {
            this.getUser();
            this.getCartCount();
        }
    },
    methods: {
        // 获取用户信息
        getUser() {
            this.axios.get("/user").then((res = {}) => {
                // to-do保存到vuex里面
                // 派发一个actions,将username发送到actions
                // this.$store.dispatch("saveUserName", res.username);
                this.saveUserName(res.username);
            });
        },

        // 获取购物车的商品总数
        getCartCount() {
            this.axios.get("/carts/products/sum").then((res = 0) => {
                //to-do 保存到vuex里面
                // 派发一个actions,将cartCount发送到actions
                // this.$store.dispatch("cartCount", res);
                this.cartCount(res);
            });
        },

        ...mapActions(["saveUserName", "cartCount"]),
    },
};
</script>
>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>

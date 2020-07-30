<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
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
    this.getUser();
    this.getCartCount();
  },
  methods: {
    // 获取用户信息
    getUser() {
      this.axios.get("/user").then(() => {
        // to-do保存到vuex里面
      });
    },
    // 获取购物车的商品总数
    getCartCount() {
      this.axios.get("/cart/products/sum").then(() => {
        //to-do 保存到vuex里面
      });
    },
  },
};
</script>
>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>

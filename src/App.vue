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

  mounted() {},
};
</script>
>

<style>
@import "./assets/scss/reset.scss";
</style>

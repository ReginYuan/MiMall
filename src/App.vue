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
      res: {}
    };
  },

  mounted() {
    // 本地加载请求json文件的方式
    // this.axios.get('/mock/user/login.json').then(res => {
    //   this.res = res;
    // });

    // 通过easy-mock平台
    this.axios.get("/mock/user/login.json").then(res => {
      this.res = res;
    });
  }
};
</script>
>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

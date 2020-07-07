<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
// import axios from "axios";
import jsonp from "jsonp";

export default {
  name: "app",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
  },
  data() {
    return {
      age: 30,
    };
  },

  mounted() {
    // axios发送get请求
    // let url =
    //   "https://www.imooc.com/course/list";
    // axios.get(url).then(() => {});

    // jsonp发送请求  它属于js
    let url = "/api/course/list";
    jsonp(url, (err, res) => {
      let result = res;
      this.data = result;
    });
  },
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

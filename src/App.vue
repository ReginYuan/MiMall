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
import axios from "axios";

export default {
  name: "app",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld
  },
  data() {
    return {
      age: 30
    };
  },
  mounted() {
    // axios发送get请求
    let url =
      "https://www.easy-mock.com/mock/5ef853266fdc8a0a935e1e38/example/";
    axios.get(url).then(() => {});

  }
};
</script>>

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

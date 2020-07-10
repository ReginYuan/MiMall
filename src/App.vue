<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from "./storage";
export default {
  name: "app",
  components: {
    // eslint-disable-next-line vue/no-unused-components
  },
  data() {
    return {};
  },

  mounted() {
    // 增加Storage数据
    // storage.setItem("a", 1);
    storage.setItem("user", { name: "ReginYuan", age: 25, sex: "男" });
    storage.setItem("china", { name: "中国", age: 71, sex: "神" });
    storage.setItem("BruceLee", {
      name: "李小龙",
      age: 33,
      sex: "男",
      job: "功夫宗师"
    });
    // 删除Storange数据
    // 删除主要对象
    storage.clear("a");
    // 删除BruceLee的job
    storage.clear("job", "BruceLee");
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

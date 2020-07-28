import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLazyload from 'vue-lazyload';
import store from './store';
// import env from './env';




// 本地json请求实现mock数据
// axios.defaults.baseURL = '/api';


// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b  通过easy-mock平台需要调整baseURL
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';


// mock开关本  地集成mockjs实现数据mock
// const mock = false;
// if (mock) {
//     require('./mock/api');
// }

// 本地集成mockjs实现数据mock
// axios.default.baseURL = '/api';




axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    // 状态码0是成功
    if (res.status == 0) {
        return res.data;
        // 状态码10是未登录
    } else if (res.status == 10) {
        window.location.href = '/#/login';
    } else {
        alert(res.msg);
    }
});


// axios全局配置
Vue.use(VueAxios, axios);
// 图片懒加载
Vue.use(VueLazyload, {
    loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
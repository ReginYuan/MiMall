import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';
// import env from './env';


// 本地json请求实现mock数据
// axios.default.baseURL = '/api';



// 接口代理 根据前端的跨域方式做调整  通过easy-mock平台需要调整baseURL
axios.default.baseURL = 'https://www.easy-mock.com/mock/5ef853266fdc8a0a935e1e38/example';

// 本地集成mockjs实现数据mock
// mock开关
const mock = false;
if (mock) {
    require('./mock/api');
}


// 本地集成mockjs实现数据mock
// axios.default.baseURL = '/api';

axios.default.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.default.baseURL = env.baseURL;
//interceptors 拦截 response
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

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
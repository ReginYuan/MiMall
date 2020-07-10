import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from './axios';
import VueAxios from './vue-axios';
import store from './store';


// 接口代理 根据前端的跨域方式做调整
axios.default.baseURL = '/api';
axios.default.timeout = 8000;

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
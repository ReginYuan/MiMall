//根据不同环境配置不同参数
let baseURL;
// process.env.NODE_ENV 获取node.js里的环境变量信息
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prev':
        baseURL = 'http://prev-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}

export default {
    baseURL
}
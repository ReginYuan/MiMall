//根据不同环境配置不同参数

let baseURL;
// process.env.NODE_ENV 获取node.js里的环境变量信息
switch (process.env.NODE_ENV) {
    case "development":
        baseURL = "http://dev-mall-pre.springboot.cn/api";
        break;
    case "test":
        baseURL = "http://test-mall-pre.springboot.cn/api";
        break;
    case "production":
        baseURL = "http://prod-mall-pre.springboot.cn/api";
        break;
    case "prev":
        // 如果要将名字设置为prev 则需要新建.env.prev文件
        baseURL = "http://prev-mall-pre.springboot.cn/api";
        break;
    default:
        baseURL = "http://mall-pre.springboot.cn/api";
        break;
}
export default {
    baseURL
};
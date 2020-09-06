/**
* 首页底部组件
 *
 */

<template>
<div class="footer">
    <div class="footer-logo">
        <img src="/imgs/logo-zj.png" alt />
        <p>紫荆商城</p>
    </div>
    <div class="footer-container">
        <div class="footer-link">
            <a target="_blank" href="https://www.vmall.com/help/faq-4355.html">购物相关</a>
            <span>|</span>
            <a target="_blank" href="https://www.vmall.com/help/faq-833.html">保修与退换货</a>
            <span>|</span>
            <a target="_blank" href="https://consumer.huawei.com/cn/support/discriminate/">特色服务</a>
            <span>|</span>
            <a target="_blank" href="https://www.huawei.com/cn/corporate-information">关于我们</a>
            <span>|</span>
            <a target="_blank" href="https://www.huawei.com/cn/">友情链接</a>
        </div>

        <div class="copyright">
            COOKIES Copyright © 2012-2020
            <span class="domain">huawei.com</span> 紫荆终端有限公司
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "nav-footer",
};
</script>

<style lang="scss">
/*引入公共组件将重复的样式进行剥离，放入公共组建中*/
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";

.footer {
    display: flex;
    align-items: center;
    height: 150px;
    background-color: #333333;
    border-top: 1px solid #d81e06;
    color: #999999;
    font-size: 16px;

    .footer-logo {
        display: flex;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 20px;
        margin-left: 10%;
        width: 50%;

        img {
            width: 53px;
            height: 53px;
            margin-bottom: 13px;
        }

        p {
            display: inline-block;
            margin-left: 30px;
            margin-bottom: 10px;
            width: 80%;
            text-align: justify;
            text-align-last: justify;
            text-justify: distribute-all-lines;
            letter-spacing: 20px;
            color: #d81e06;
            border-right: 2px solid #999999;
        }
    }

    .footer-container {
        width: 50%;

        .footer-link {
            display: inline-block;

            a {
                color: #999999;
                display: inline-block;
            }

            span {
                margin: 0 10px;
            }

            margin-bottom: 13px;
        }

        .copyright {
            display: inline-block;

            .domain {
                color: #d81e06;
            }
        }
    }
}
</style>

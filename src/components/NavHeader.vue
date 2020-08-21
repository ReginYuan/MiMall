/**
* 首页头部组件
 *
 */

<template>
  <div class="header">
    <!--导航顶部菜单-->
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">紫荆官网</a>
          <a href="javascript:;">ZUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>
            购物车{{cartCount}}
          </a>
        </div>
      </div>
    </div>

    <!--导航头部投标菜单搜索-->
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>紫荆手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a v-bind:href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price|currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>紫荆笔记本</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6972453160119/428_428_9DF1559494B296D8A911EA0BA6111B0BCAFAB6CCE563F3E0mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">BAUHINIABOOK X Pro 2020款</div>
                    <div class="pro-price">抢购价 ¥9899.00</div>
                  </a>
                </li>

                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6972453160119/428_428_9DF1559494B296D8A911EA0BA6111B0BCAFAB6CCE563F3E0mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">BAUHINIABOOK X Pro 2020款</div>
                    <div class="pro-price">抢购价 ¥9899.00</div>
                  </a>
                </li>

                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6972453160119/428_428_9DF1559494B296D8A911EA0BA6111B0BCAFAB6CCE563F3E0mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">BAUHINIABOOK X Pro 2020款</div>
                    <div class="pro-price">抢购价 ¥9899.00</div>
                  </a>
                </li>

                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6972453160119/428_428_9DF1559494B296D8A911EA0BA6111B0BCAFAB6CCE563F3E0mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">BAUHINIABOOK X Pro 2020款</div>
                    <div class="pro-price">抢购价 ¥9899.00</div>
                  </a>
                </li>

                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6972453160119/428_428_9DF1559494B296D8A911EA0BA6111B0BCAFAB6CCE563F3E0mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">BAUHINIABOOK X Pro 2020款</div>
                    <div class="pro-price">抢购价 ¥9899.00</div>
                  </a>
                </li>

                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6972453160119/428_428_9DF1559494B296D8A911EA0BA6111B0BCAFAB6CCE563F3E0mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>紫荆智慧屏</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6901443363834/428_428_F5914787EADD22E44AE873EB26A9DEE719BA467ACED12261mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">BAUHINIA智慧屏 2020款</div>
                    <div class="pro-price">抢购价 ¥9899.00</div>
                  </a>
                </li>

                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6901443363834/428_428_F5914787EADD22E44AE873EB26A9DEE719BA467ACED12261mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">BAUHINIA智慧屏 2020款</div>
                    <div class="pro-price">抢购价 ¥9899.00</div>
                  </a>
                </li>

                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6901443363834/428_428_F5914787EADD22E44AE873EB26A9DEE719BA467ACED12261mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">BAUHINIA智慧屏 2020款</div>
                    <div class="pro-price">抢购价 ¥9899.00</div>
                  </a>
                </li>

                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6901443363834/428_428_F5914787EADD22E44AE873EB26A9DEE719BA467ACED12261mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">BAUHINIA智慧屏 2020款</div>
                    <div class="pro-price">抢购价 ¥9899.00</div>
                  </a>
                </li>

                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6901443363834/428_428_F5914787EADD22E44AE873EB26A9DEE719BA467ACED12261mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">BAUHINIA智慧屏 2020款</div>
                    <div class="pro-price">抢购价 ¥9899.00</div>
                  </a>
                </li>

                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://res.vmallres.com/pimages//product/6901443363834/428_428_F5914787EADD22E44AE873EB26A9DEE719BA467ACED12261mp.png'"
                        alt
                      />
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: [],
    };
  },
  // 计算属性
  computed: {
    /*
  // 解决数据延时 将获取username定义成计算函数
    username() {
      // 从数据源获取用户名
      return this.$store.state.username;
    },
    // 解决数据延时 将获取cartCount定义成计算函数
    cartCount() {
      // 从数据源获取商品总数
      return this.$store.state.cartCount;
    },
    */
    //  作用与上文等同
    ...mapState(["username", "cartCount"]),
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    },
  },

  mounted() {
    this.getProductList();
  },
  methods: {
    // 跳转到登录页面
    login() {
      this.$router.push("/login");
    },
    // 手机信息页面
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012",
            pageSize: 6,
          },
        })
        .then((res) => {
          this.phoneList = res.list;
        });
    },
    // 跳转到购物车页面
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style lang="scss">
/*引入公共组件将重复的样式进行剥离，放入公共组建中*/
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";

.header {
  /*导航顶部菜单*/
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    columns: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #d81e06;
        text-align: center;
        color: #ffffff;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 6px;
        }
      }
    }
  }

  /*导航头部logo菜单搜索*/
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();

      /*菜单样式*/
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          line-height: 112px;
          font-size: 18px;
          margin-right: 20px;

          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 0.5s;
            background-color: #ffffff;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 110px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              /*商品内容分割线*/
              &:before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      /*搜索框样式*/
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>

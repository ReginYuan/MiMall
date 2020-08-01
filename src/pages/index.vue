/** 
*主页内容页面
*/
<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <!-- 菜单 -->
        <div class="nav-menu">
          <ul class="menu-warp">
            <li class="menu-item">
              <a href="javascript:;">手机</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" v-bind:key="index">
                  <li v-for="(sub, j) in item" v-bind:key="j">
                    <a v-bind:href="sub ? '/#/product/' + sub.id : ''">
                      <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'" alt />
                      {{ sub?sub.name:'小米9' }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能穿戴</a>
              <div class="children"></div>
            </li>

            <li class="menu-item">
              <a href="javascript:;">智慧屏</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机音响</a>
              <div class="children"></div>
            </li>

            <li class="menu-item">
              <a href="javascript:;">配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">增值服务</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <!-- 轮播图 -->
        <!-- 控制轮播图 -->
        <swiper v-bind:options="swiperOption">
          <!-- 遍历图片 -->
          <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/' + item.id">
              <img v-bind:src="item.img" />
            </a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <a v-bind:href="'/#/product/'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
          <img v-lazy="item.img" alt />
        </a>
      </div>
      <!-- banner图 -->
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>
    <!-- 手机商品 -->
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr,index) in phoneList" v-bind:key="index">
              <div class="item" v-for="(item,j) in arr" v-bind:key="j">
                <span v-bind:class="{'new-pro':j%2==0}">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt />
                </div>

                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 服务模块 -->
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="购物车"
      btnType="1"
      modalType="middle"
      v-bind:showModal="showModal"
      v-on:submit="goToCart"
      v-on:cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>s
<script>
import ServiceBar from "./../components/ServiceBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Modal from "@/components/Modal";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    Modal,
    ServiceBar,
  },
  data() {
    return {
      swiperOption: {
        // autoplay: true, //自动播放
        autoplay: true, //可选选项，自动滑动
        loop: true, //循环播放
        speed: 5000, //循环时间
        effect: "cube", //循环方式
        cubeEffect: {
          swiperShows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },

        // 分页器
        pagination: ".swiper-pagination",
        paginationClickable: true, //点击切换

        //
        prevButton: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
        nextButton: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
      },
      // 轮播图照片
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
      // 轮播菜单
      menuList: [
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" },
        ],
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" },
        ],
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" },
        ],
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" },
        ],
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" },
        ],
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" },
        ],
      ],
      // 广告位
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [],
      // 弹窗是否显示
      showModal: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 获取商品信息
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          // 把数据从第六条分割到14条
          res.list = res.list.slice(6, 14);
          // 把数据再次分割为两个数组
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    addCart(id) {
      this.showModal = true;
      return;
      // eslint-disable-next-line no-unreachable
      this.axios
        .post("/carts", {
          productId: id,
          selected: true,
        })
        .then(() => {})
        .catch(() => {
          this.showModal = true;
        });
    },

    // 跳转到购物车
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
.index {
  .swiper-box {
    /*定义菜单格式 */
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box; //盒模型
      .menu-warp {
        /*轮播菜单*/
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: ""; //占位
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorL;
            .children {
              display: block;
            }
          }
          /*轮播菜单实现 */
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }

    /*复写swiper.css*/
    .swiper-container {
      height: 451px;
      /*设图片切换箭头样式*/
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  /*广告位样式*/
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }

  /*banner图样式*/
  .banner {
    margin-bottom: 50px;
  }

  /*手机商品*/

  .product-box {
    background-color: $colorG;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }

    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e8262e;
              }
            }
            .item-img {
              img {
                width: 100%;
                height: 195px;
              }
            }

            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: "";
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

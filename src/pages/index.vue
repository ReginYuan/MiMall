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
                      <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt />
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
      <div class="ads-box"></div>
      <div class="banner"></div>
    </div>
    <div class="product-box"></div>
    <!-- 服务模块 -->
    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from "./../components/ServiceBar";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    ServiceBar
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
          shadowScale: 0.6
        },

        // 分页器
        pagination: ".swiper-pagination",
        paginationClickable: true, //点击切换

        //
        prevButton: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
        nextButton: ".swiper-button-next" //前进按钮的css选择器或HTML元素。
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      // 轮播菜单
      menuList: [
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" }
        ],
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" }
        ],
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" }
        ],
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" }
        ],
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" }
        ],
        [
          { id: 30, img: "/imgs/item-box-1.png", name: "小米CC9" },
          { id: 31, img: "/imgs/item-box-2.png", name: "小米8青春版" },
          { id: 32, img: "/imgs/item-box-3.jpg", name: "Redmi K20 Pro" },
          { id: 33, img: "/imgs/item-box-4.jpg", name: "移动5G专区" }
        ]
      ],
      phoneList: []
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
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
}
</style>

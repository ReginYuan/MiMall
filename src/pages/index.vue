<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/' + item.id"
              ><img v-bind:src="item.img"
            /></a>
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
      phoneList: [],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

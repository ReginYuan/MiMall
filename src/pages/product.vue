/**
*商品页面
*/

<template>
  <div class="product">
    <product-param v-bind:title="product.name">
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>

    <div class="content">
      <div class="item-bg">
        <h2>{{product.name}}</h2>
        <h3>{{product.subtitle}}</h3>
        <p>
          <a href id>全球首款双频GP</a>
          <span>|</span>
          <a href id>骁龙845</a>
          <span>|</span>
          <a href id>AI 变焦双摄</a>
          <span>|</span>
          <a href id>红外人脸识别</a>
        </p>
        <div class="price">
          <span>
            ￥
            <em>{{product.price}}</em>
          </span>
        </div>
      </div>

      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <!-- 轮播图 -->
        <!-- 控制轮播图 -->
        <swiper :options="swiperOption">
          <!-- 遍历图片 -->
          <swiper-slide>
            <img src="/imgs/product/gallery-2.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-3.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-4.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-5.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-6.jpg" alt />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>

      <div class="item-video">
        <h2>
          60帕超慢动作摄影
          <br />慢慢回味每一瞬间的精彩
        </h2>
        <p>
          后置960帕电影超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
          <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg" @click="showSlide=true"></div>
        <div class="video-box">
          <div class="overlay" v-if="showSlide"></div>
          <div class="video" v-bind:class="{'slide':showSlide}">
            <span class="icon-close" @click="showSlide=false"></span>
            <video src="/imgs/product/video.mp4" muted autoplay controls="true"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import ProductParam from "@/components/ProductParam";
export default {
  name: "product",
  data() {
    return {
      showSlide: false, //控制动画
      product: {}, //商品信息
      swiperOption: {
        // autoplay: true, //自动播放
        autoplay: true,
        loop: true, //循环播放
        speed: 3000, //循环时间
        slidesPerView: 5,
        // slide之间的距离（单位px）。
        spaceBetween: 30,
        // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
        freeMode: true,

        // 分页器
        pagination: ".swiper-pagination",
        paginationClickable: true, //点击切换
      },
    };
  },
  components: {
    ProductParam,
    swiper,
    swiperSlide,
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      // 获取商品id
      // eslint-disable-next-line no-unused-vars
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then((res) => {
        this.product = res;
      });
    },
    buy() {
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    },
    closeVideo() {
      this.showSlide = "slideUp";
      setTimeout(() => {
        this.showSlide = "";
      }, 600);
    },
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
@import "./../assets/scss/modal.scss";
@import "./../assets/scss/button.scss";

.product {
  .btn {
    margin-left: 10px;
  }

  .content {
    .item-bg {
      background: url("/imgs/product/product-bg-1.png") no-repeat 50%;
      height: 718px;
      text-align: center;
      h2 {
        font-size: 80px;
        padding-top: 55px;
      }
      h3 {
        font-size: 24px;
        letter-spacing: 10px;
      }
      p {
        margin-top: 21px;
        margin-bottom: 40px;
        a {
          font-size: 16px;
          color: #333;
        }
        span {
          margin: 0 15px;
        }
      }

      .price {
        font-size: 30px;
        color: #333;
        em {
          font-size: normal;
          font-size: 38px;
        }
      }
    }
    .item-bg-2 {
      background: url("/imgs/product/product-bg-2.png") no-repeat 50%;
      height: 480px;
      background-size: 1226px 379px;
    }
    .item-bg-3 {
      background: url("/imgs/product/product-bg-3.png") no-repeat 50%;
      height: 638px;
      background-size: cover;
    }
    .item-swiper {
      margin: 36px auto 52px;
      text-align: center;

      img {
        width: 100%;
      }
    }

    .item-video {
      height: 1044px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #ffffff;
      text-align: center;
      h2 {
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 27px;
      }
      p {
        font-size: 24px;
        margin-bottom: 58px;
      }

      .video-bg {
        background: url("/imgs/product/gallery-1.png") no-repeat center;
        background-size: cover;
        width: 1226px;
        height: 540px;
        margin: 0 auto 120px;
        cursor: pointer;
      }

      .video-box {
        .overlay {
          @include position(fixed);
          background-color: #333333;
          opacity: 0.4;
          z-index: 10;
        }
        .video {
          position: fixed;
          top: -50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 12;
          width: 1000px;
          height: 536px;
          opacity: 0;
          transition: all 0.6s;

          /*动画效果 */
          &.slide {
            top: 50%;
            opacity: 1;
          }

          .icon-close {
            position: absolute;
            top: 20px;
            right: 20px;
            @include bgImg(20px, 20px, "/imgs/icon-close.png");
            cursor: pointer;
            z-index: 12;
          }
          video {
            width: 100%;
            height: 100%;
            /*铺满边框  适配整窗口*/
            object-fit: cover;
            outline: none;
          }
        }
      }
    }
  }
}
</style>

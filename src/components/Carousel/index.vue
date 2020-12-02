<template>
  
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">
              <img src="./images/banner1.jpg" />
            </div> -->
        <!-- <div class="swiper-slide">
              <img src="./images/banner2.jpg" />
            </div> -->
        <div
          class="swiper-slide"
          v-for="carousel in carousellist"
          :key="carousel.id"
        >
          <img :src="carousel.imgUrl" />
        </div>
        <!-- <div class="swiper-slide">
              <img src="./images/banner4.jpg" />
            </div> -->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  
</template>

<script>
//初始化Carousel
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Carousel",

  props: {
    carousellist: {
      type: Array,
      required: true,
    },
  },
  watch: {
    //监视数据，因为俩面要写js代码，所以要写成函数形式的数据

    carousellist() {
    
      if (this.swiper) return; //如果有new过swiper了，就不在new了
      this.$nextTick(() => {
        this.initswiper();
        
      });
    },
  },
  methods: {
    initswiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        
        loop: true, //一直轮播
        autoplay: {
          delay: 3000,
          disableOnInteraction: false, // 当用户点击下一页，仍不会中断自动轮播
        },
        pagination: {
          el: ".swiper-pagination",
           clickable: true, //点击小圆点选择页面，默认不可点击。设置小圆点可以点击，
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
      });
    },
  },
  mounted() {
    //现在mounted没用了，功能是在watched里面做
  if (!this.carousellist.length) return;

    this.initswiper();

  },
};
</script>

<style lang="less" scoped>
</style>

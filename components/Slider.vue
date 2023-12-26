<script>
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
</script>
<template>
  <swiper
    class="slider"
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    :pagination="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <div class="slideContainer">
        <h3 class="slideTitle">Точные данные о ценах и материалах</h3>
        <h5 class="slideBody">Произведем расчеты и отгрузим товары</h5>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="slideContainer">
        <h3 class="slideTitle">Точные данные о ценах и материалах</h3>
        <h5 class="slideBody">Произведем расчеты и отгрузим товары</h5>
      </div></swiper-slide
    >
    <swiper-slide
      ><div class="slideContainer">
        <h3 class="slideTitle">Точные данные о ценах и материалах</h3>
        <h5 class="slideBody">Произведем расчеты и отгрузим товары</h5>
      </div></swiper-slide
    >
    ...
  </swiper>
</template>
<style>
.slider {
  margin-top: 100px;
  height: 630px;
  background-color: #1774d8;
  @media (max-width: 1024px) {
    height: 630px;
    margin-top: 110px;
  }
}
.slideContainer {
  max-width: 1330px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 300px;
  @media (max-width: 1024px) {
    gap: 16px;
    margin-top: 350px;
    padding: 0 15px;
  }
}
.slideBody {
  color: white;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.24px;
  max-width: 620px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
}
.slideTitle {
  color: white;
  font-family: Lato;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 67.2px */
  letter-spacing: -0.56px;
  max-width: 620px;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
}
.swiper-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  bottom: 24px !important;
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    background: transparent;
    border: 1px solid #ffffff;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: white;
    opacity: 1;
  }
}
</style>

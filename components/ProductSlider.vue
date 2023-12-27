<script setup>
import { ref } from "vue";
import useScreenSize from "./size";
const activeItem = ref(0);
const items = [
  "/productPage/item.png",
  "/productPage/item.png",
  "/productPage/item.png",
  "/productPage/item.png",
  "/productPage/item.png",
];
const itemsMob = [
  "/productPage/item.png",
  "/productPage/item.png",
  "/productPage/item.png",
];
const clickItem = (index) => {
  activeItem.value = index;
};
const clickArrow = (arrow) => {
  if (arrow === "top") {
    activeItem.value !== 0
      ? --activeItem.value
      : (activeItem.value = items.length);
  }
  if (arrow === "bottom") {
    activeItem.value !== items.length - 1
      ? ++activeItem.value
      : (activeItem.value = 0);
  }
};
const { isDesktop } = useScreenSize();
</script>

<template>
  <div class="section__slider">
    <div class="slider">
      <div v-on:click="clickArrow('top')" class="topArrow"></div>
      <div
        v-for="(item, index) in isDesktop ? items : itemsMob"
        :key="index"
        :class="activeItem === index && 'active'"
        v-on:click="clickItem(index)"
        class="slide"
      >
        <img
          v-if="index !== items.length"
          class="img"
          src="/productPage/item.png"
          alt=""
        />
        <div v-else-if="index === items.length" class="video"></div>
      </div>
      <div v-on:click="clickArrow('bottom')" class="btmArrow"></div>
    </div>
    <div class="active__item">
      <img
        v-if="index !== items.length"
        :src="items[activeItem]"
        class="img"
        alt=""
      />
      <div v-else-if="index === items.length" class="video"></div>
    </div>
  </div>
</template>
<style scoped>
.section__slider {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  @media (max-width: 1024px) {
    padding: 0 15px;
    flex-direction: column-reverse;
    align-items: center;
    gap: 8px;
  }
  .slider {
    height: auto;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    background: none;
    @media (max-width: 1024px) {
      flex-direction: row;
      justify-content: center;
    }
  }
  .topArrow {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background: url("/productPage/sliderTopArrow.svg");
    margin-bottom: 4px;
    @media (max-width: 1024px) {
      transform: rotate(-90deg);
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
  .btmArrow {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background: url("/productPage/sliderBottomArrow.svg");
    margin-top: 4px;
    @media (max-width: 1024px) {
      transform: rotate(-90deg);
      margin-top: 0;
      margin-left: 15px;
    }
  }
  .slide {
    cursor: pointer;
    background: white;
    padding: 4px;
    width: 64px;
    height: 64px;
    &.active {
      border: 2px solid var(--akcent);
    }
    .img,
    .video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .active__item {
    width: 560px;
    height: 540px;
    @media (max-width: 1024px) {
      width: 100%;
      height: 100%;
    }
    .img,
    .video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

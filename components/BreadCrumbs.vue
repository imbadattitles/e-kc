<script setup>
import { defineProps } from "vue";
import { ref } from "vue";
import useScreenSize from "./size";
const props = defineProps(["router"]);
const { isDesktop } = useScreenSize();
const nowOpen = ref(null);
const open = (index) => {
  !isDesktop && nowOpen.value !== index
    ? (nowOpen.value = index)
    : (nowOpen.value = null);
};
</script>
<template>
  <div class="BreadCrumbs">
    <div
      v-for="(item, index) in router"
      :key="index"
      :class="index === router.length - 1 && 'last'"
      class="BreadCrumbs__item"
    >
      <a class="title" href="/">{{ item.title }}</a>
      <div :class="nowOpen === index && 'active'" class="breadCrumbs__open">
        <a href="/" class="item"
          >Пожарно-охранные системы, оптическая и акустическая сигнализация</a
        >
        <a href="/" class="item"
          >Пожарно-охранные системы, оптическая и акустическая сигнализация</a
        >
        <a href="/" class="item"
          >Пожарно-охранные системы, оптическая и акустическая сигнализация</a
        >
      </div>
      <span
        v-on:click="open(index)"
        v-if="index !== router.length - 1"
        class="BreadCrumbs__icon"
      />
    </div>
  </div>
</template>

<style scoped>
.BreadCrumbs {
  position: relative;
  z-index: 7;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  @media (max-width: 1024px) {
    padding: 0 15px;
  }
}
.BreadCrumbs__item {
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: black;
  padding-bottom: 15px;
  margin-bottom: -15px;
  &:hover {
    .breadCrumbs__open {
      display: block;
    }
    &:hover,
    :focus {
      .title,
      .BreadCrumbs__icon {
        opacity: 0.6;
      }
    }
  }
  @media (max-width: 1024px) {
    position: static;
  }
  .title {
    text-decoration: none;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    color: black;
  }
}
.breadCrumbs__open {
  z-index: 10;
  position: absolute;
  top: 33px;
  left: -13px;
  padding: 16px;
  display: none;
  flex-direction: column;
  gap: 12px;
  width: 320px;
  background: white;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.16);
  &.active {
    display: flex;
  }
  @media (max-width: 1024px) {
    width: 280px;
    top: 100%;
    left: 15px;
  }
  .item {
    display: block;
    color: black;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    text-decoration: none;
  }
}
.last {
  .title {
    color: var(--grey);
  }
}
.BreadCrumbs__icon {
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-image: url("/header/breadCrumbsArrow.svg");
}
</style>

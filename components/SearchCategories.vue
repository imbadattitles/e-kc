<script setup>
import { defineProps } from "vue";
const props = defineProps(["router", "nextRouter", "categories", "popular"]);
</script>
<template>
  <div class="column">
    <div class="group">
      <p class="group__title">Все категории:</p>
      <p
        v-for="(rout, index) in router"
        :key="index"
        :class="[index > 0 && 'itemPadding', index === 0 && 'routLine']"
        class="group__item rout"
      >
        <span class="searchArrow" v-if="index !== 0" />
        {{ rout.title }}
      </p>
      <p
        v-for="(rout, index) in nextRouter"
        :key="index"
        class="group__item itemPadding routLine"
      >
        {{ rout.title }}
      </p>
      <p class="more itemPadding">Еще (8)</p>
      <p
        v-for="(category, index) in categories"
        :key="index"
        class="group__item routLine"
      >
        {{ category.title }}
      </p>
    </div>
    <div class="group">
      <p class="group__title">Популярные категории</p>
      <p
        v-for="(item, index) in popular"
        :key="index"
        class="group__item routLine"
      >
        {{ item.title }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
}
.group__title {
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
}
.itemPadding {
  margin-left: 26px;
}
.group__item {
  cursor: pointer;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  color: black;
  position: relative;
  &:hover,
  :focus {
    opacity: 0.6;
  }
}
.rout {
  color: var(--grey);
}
.searchArrow {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  left: -24px;
  background-image: url("/search/searchArrow.svg");
}
.routLine {
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 1px solid #e2e2e2;
}
.more {
  cursor: pointer;
  color: var(--blue);
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  padding-bottom: 2px;
  border-bottom: 1px dotted var(--blue);
  margin-bottom: 10px;
  &:hover,
  :focus {
    opacity: 0.6;
  }
}
</style>

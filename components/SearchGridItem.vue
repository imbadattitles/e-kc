<script setup lang="ts">
import { defineProps } from "vue";
import useScreenSize from "./size";
const props = defineProps(["item"]);
const { isDesktop } = useScreenSize();
</script>

<template>
  <div v-if="isDesktop" class="item">
    <img :src="item.img" class="item__img" />
    <div class="item__info">
      <a class="item__title">{{ item.title }}</a>
      <div class="item__info-row">
        <div class="item__info-left">
          <div class="brand">
            <span>Бренд:</span>
            <a class="important" href="/"
              ><h5>{{ item.brand }}</h5></a
            >
          </div>
          <div class="over">
            <span>Доступно:</span>
            <p class="important">{{ item.over }}</p>
          </div>
        </div>
        <div class="item__info-right">
          <span class="analog" />
          <span class="compare" />
          <span class="like" />
        </div>
      </div>
    </div>
    <div class="item__costRow">
      <p class="item__costRow-cost">{{ item.cost }} ₽</p>
      <MountInput :type="item?.modal && 'modal'" />
    </div>
    <span class="borderTop" />
    <span class="borderBottom" />
    <span class="borderLeft" />
    <span class="borderRight" />
  </div>

  <div v-else class="item">
    <div class="left">
      <img :src="item.img" class="item__img" />
      <div class="item__info-right">
        <span class="analog" />
        <span class="compare" />
        <span class="like" />
      </div>
    </div>
    <div class="right">
      <a class="item__title">{{ item.title }}</a>
      <div class="group">
        <div class="over_mobile">
          <span class="name">Доступно:</span>
          <span class="line" />
          <p class="important">{{ item.over }}</p>
        </div>
        <div class="over_mobile">
          <span class="name">Цена:</span>
          <span class="line" />
          <p class="important price">{{ item.cost }} ₽</p>
        </div>
      </div>
      <MountInput :type="item?.modal" />
    </div>
    <span class="borderTop" />
    <span class="borderBottom" />
    <span class="borderLeft" />
    <span class="borderRight" />
  </div>
</template>
<style scoped>
.item {
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  height: 445px;
  position: relative;
  @media (max-width: 1024px) {
    height: auto;
    width: auto;
    gap: 16px;
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;
  }
}
.item__img {
  margin: auto;
  margin-top: 0;
  width: 190px;
  height: 140px;
  object-fit: contain;
  margin-bottom: 32px;
  @media (max-width: 1024px) {
    width: 60px;
    height: 38px;
    margin-bottom: 0;
  }
}
.item__title {
  display: block;
  cursor: pointer;
  color: var(--blue);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 24px;
  &:hover,
  &:focus {
    color: #1461b4;
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    min-width: 160px;
    font-size: 13px;
    margin-bottom: 0;
  }
}
.item__info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item__info-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  div {
    display: flex;
    gap: 4px;
  }
  span {
    color: #adbac8;
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    margin-right: 4px;
  }
  .important {
    text-decoration: none;
    color: var(--Black, #000);
    text-align: center;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    padding-bottom: 2px;
  }
  a > h5 {
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #e2e2e2;
    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }
}
.item__info-right {
  display: flex;
  gap: 8px;
  cursor: pointer;
  span {
    width: 20px;
    height: 20px;
    background-size: contain;
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  .analog {
    background-image: url("/searchResult/analog.svg");
  }
  .compare {
    background-image: url("/searchResult/compare.svg");
  }
  .like {
    background-image: url("/searchResult/like.svg");
    &.active {
      background-image: url("/searchResult/likeActive.svg");
    }
  }
}
.item__costRow {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  margin-top: auto;
}
.item__costRow-cost {
  color: var(--Black, #000);
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 28.8px */
  letter-spacing: -0.18px;
}

.borderTop {
  position: absolute;
  width: 100%;
  height: 1px;
  background: #dce6ef;
  top: 0px;
  left: 0px;
}
.borderLeft {
  position: absolute;
  width: 1px;
  height: 100%;
  background: #dce6ef;
  top: -1px;
  left: 0px;
  @media (max-width: 424px) {
    display: none;
  }
}
.borderRight {
  position: absolute;
  width: 1px;
  height: 100%;
  background: #dce6ef;
  top: -1px;
  right: -1px;
  @media (max-width: 424px) {
    display: none;
  }
}
.borderBottom {
  position: absolute;
  width: 100%;
  height: 1px;
  background: #dce6ef;
  bottom: -1px;
  left: -1px;
}
.left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.right {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.over_mobile {
  display: flex;
  align-items: center;
  gap: 8px;
  .name {
    color: #adbac8;

    text-align: center;
    /* Lato 13 Bold */
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
  .line {
    flex: 1;
    height: 1px;
    border-bottom: 1px dashed #dce6ef;
  }
  .important {
    color: black;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    &.price {
      font-weight: 700;
    }
  }
}
</style>

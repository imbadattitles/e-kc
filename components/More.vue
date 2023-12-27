<script setup>
import { ref } from "vue";
import useScreenSize from "./size";
const pages = [1, 2, 3, 4, 5];
const mobPages = [1, 2, 3];
const setPage = (page) => {
  pageActive.value = page;
};
const { isDesktop } = useScreenSize();
const nextPage = () => {
  pageActive.value = pageActive.value + 1;
};
const pageActive = ref(1);
</script>
<template>
  <div class="section">
    <button class="moreBtn">Показать еще (40)</button>
    <div class="pageRow">
      <p
        v-for="(page, index) in isDesktop ? pages : mobPages"
        :class="page === pageActive && 'active'"
        :key="index"
        class="page"
        v-on:click="setPage(page)"
      >
        {{ page }}
      </p>
      <p v-on:click="nextPage" class="nextPage">Дальше</p>
    </div>
  </div>
</template>

<style scoped>
.section {
  margin-top: 24px;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-bottom: 40px;
    padding: 0 15px;
  }
}
.moreBtn {
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  width: 100%;
  padding: 15px;
  background: #eef2f6;
  cursor: pointer;
  border: none;
  &:hover,
  &:focus {
    background: #e1e8f0;
  }
}
.pageRow {
  display: flex;
  margin-top: 24px;
}
.page {
  color: var(--Black, #000);
  /* Lato 16 Bold */
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  padding: 11px 19px;
  cursor: pointer;
  &.active {
    background: #eef2f6;
  }
  &:hover,
  &:focus {
    background: #f4f7fa;
  }
}
.nextPage {
  cursor: pointer;
  color: var(--Black, #000);
  /* Lato 16 Bold */
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  padding: 11px 24px;
  &:hover,
  &:focus {
    background: #f4f7fa;
  }
}
</style>

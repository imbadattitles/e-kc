<script setup>
import { defineProps } from "vue";
const props = defineProps(["items"]);
</script>
<template>
  <table class="table">
    <thead class="tableHeader">
      <tr>
        <th>Фото</th>
        <th>Название</th>
        <th></th>
        <th>Бренд</th>
        <th>Доступно</th>
        <th>Цена (₽)</th>
        <th>Количество</th>
      </tr>
    </thead>
    <tr v-for="(item, index) in items" :key="index" class="tableRow">
      <th>
        <img class="img" :src="item.img" alt="" />
      </th>
      <th class="item__title">
        <a href="/">{{ item.title }}</a>
      </th>
      <th>
        <div class="item__icons">
          <span class="analog" />
          <span class="compare" />
          <span class="like" :class="index === 1 && 'active'" />
        </div>
      </th>
      <th>
        <a href="/" class="brand">{{ item.brand }}</a>
      </th>
      <th class="over">{{ item.over }}</th>
      <th class="cost">{{ item.cost }}</th>
      <th><MountInput /></th>
    </tr>
  </table>
</template>

<style scoped>
.table {
  width: 100%;
  border: 2px solid var(--Line-2, #dce6ef);
  padding-top: 16px;
  th {
    text-align: left;
  }

  th:first-child {
    padding-left: 24px;
  }
  th:nth-child(1) {
    min-width: 100px;
  }
  th:nth-child(2) {
    width: 590px;
  }
  th:nth-child(3) {
    width: 120px;
  }
  th:nth-child(4) {
    min-width: 70px;
  }
  th:nth-child(5) {
    min-width: 80px;
  }
  th:nth-child(6) {
    min-width: 120px;
  }
  th:nth-child(7) {
    min-width: 170px;
  }

  .tableRow {
    th {
      vertical-align: middle;
      padding-top: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #dce6ef;
    }
    &:last-child {
      th {
        border: none;
      }
    }
  }

  thead {
    th {
      color: var(--grey);
      font-family: Lato;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
  }

  .img {
    width: 64px;
    height: 40px;
    object-fit: contain;
  }
  .item__title {
    a {
      cursor: pointer;
      text-decoration: none;
      color: var(--blue);
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 19.6px */
      letter-spacing: -0.14px;
      &:hover,
      :focus {
        color: #1461b4;
        text-decoration: underline;
      }
    }
  }
}
.item__icons {
  display: flex;
  gap: 8px;
  justify-content: center;
  span {
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-size: contain;
    &:hover,
    :focus {
      opacity: 0.7;
    }
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
.brand {
  cursor: pointer;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  color: black;
  padding-bottom: 2px;
  text-decoration: none;
  border-bottom: 1px solid #e2e2e2;
  &:hover,
  :focus {
    opacity: 0.7;
  }
}
.over {
  color: black;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
}
.cost {
  color: black;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
</style>

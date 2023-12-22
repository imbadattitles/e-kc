<script setup lang="ts">
import { ref } from "vue";
const sort = ref<"categories" | "brand">("categories");
const setSort = (type: "categories" | "brand") => {
  sort.value = type;
};
</script>
<template>
  <section class="container section">
    <div class="row">
      <h1 class="section__title f32">Каталог</h1>
      <div class="sort">
        <div
          v-on:click="setSort('categories')"
          :class="sort === 'categories' && 'active'"
          class="sort__btn"
        >
          По категориям
        </div>
        <div
          v-on:click="setSort('brand')"
          :class="sort === 'brand' && 'active'"
          class="sort__btn"
        >
          Бренду
        </div>
      </div>
    </div>
    <Categories v-if="sort === 'categories'" />
    <Brands v-if="sort === 'brand'" />
  </section>
</template>
<style scoped>
.section {
  margin-top: 135px;
  margin-bottom: 100px;
}
.row {
  display: flex;
  gap: 150px;
  align-items: center;
  margin-bottom: 27px;
}
.section__title {
  color: black;
}
.sort {
  display: flex;
}
.sort__btn {
  padding: 7px 16px;
  cursor: pointer;
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  &:hover,
  :focus {
    opacity: 0.7;
  }
}
.sort__btn.active {
  background: #eef2f6;
}
</style>

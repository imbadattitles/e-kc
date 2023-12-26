<template>
  <section class="section container">
    <BreadCrumbs :router="crumbs" />
    <div class="section__title-row">
      <h1 class="section__title f32">Оборудование для информационной шины</h1>
      <span class="amount">1 130 товаров</span>
    </div>
    <div class="section__grid">
      <SearchCategories
        v-if="isDesktop"
        :router="crumbs"
        :categories="categories"
        :next-router="nextRouter"
        :popular="popular"
      />
      <SearchResult />
    </div>
  </section>
</template>
<style scoped>
.section {
  margin-top: 124px;
}
.section__title-row {
  margin-top: 24px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 32px;
  @media (max-width: 1024px) {
    padding: 0 15px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
}
.amount {
  color: var(--grey);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  @media (max-width: 1024px) {
    display: none;
  }
}
.section__grid {
  display: grid;
  grid-template-columns: 240px auto;
  gap: 32px;
  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
<script setup>
import useScreenSize from "~/components/size";

const { isDesktop } = useScreenSize();
const crumbs = [
  { title: "Каталог" },
  { title: "Электрооборудование" },
  { title: "Системы авторизации" },
  { title: "Оборудование для информационной шины" },
];
const nextRouter = [
  {
    title: "Светотехника",
  },
  {
    title: "Электроустановочные изделия",
  },
  {
    title: "Светотехника",
  },
  {
    title: "Электроустановочные изделия",
  },
  {
    title: "Светотехника",
  },
  {
    title: "Электроустановочные изделия",
  },
  {
    title: "Светотехника",
  },
  {
    title: "Электроустановочные изделия",
  },
];
const categories = nextRouter;
const popular = nextRouter;
</script>

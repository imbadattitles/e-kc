<script setup>
import useScreenSize from "~/components/size";
const crumbs = [
  { title: "Каталог" },
  { title: "Электрооборудование" },
  { title: "Системы авторизации" },
  { title: "Оборудование для информационной шины" },
];
const { isDesktop } = useScreenSize();
</script>
<template>
  <div class="page">
    <div class="container">
      <Rubrics />
      <BreadCrumbs :router="crumbs" />

      <h1 class="section__title">
        Корпус металлический ЩУРв-3/48зо-1 36 УХЛ3 (ВхШхГ) 550x610x165мм IP31 |
        MKM35-V-48-31-ZO IEK (ИЭК)
      </h1>
    </div>
    <div v-if="!isDesktop" id="parent"></div>
    <ProductNav v-if="!isDesktop" />
    <section class="section container">
      <ProductIcons v-if="!isDesktop" />
      <div class="section__grid">
        <ProductSlider />
        <ProductOffers />
      </div>
    </section>

    <ProductInfo v-if="isDesktop" />
    <div class="container">
      <ProductInfoMobile v-if="!isDesktop" />
    </div>
  </div>
</template>
<style scoped>
.page {
  margin-top: 124px;
  margin-bottom: 100px;
  @media (max-width: 1024px) {
    margin-bottom: 40px;
    margin-top: 130px;
  }
}
.section__title {
  margin-top: 24px;
  margin-bottom: 32px;
  color: black;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  @media (max-width: 1024px) {
    padding: 0 15px;
    font-size: 20px;
    margin-bottom: 20px;
  }
}
.section__grid {
  display: grid;
  gap: 40px;
  grid-template-columns: 650px auto;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 56px;
  @media (max-width: 1024px) {
    display: block;
  }
}
</style>

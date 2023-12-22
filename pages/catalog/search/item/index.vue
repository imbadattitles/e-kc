<script setup>
const crumbs = [
  { title: "Каталог" },
  { title: "Электрооборудование" },
  { title: "Системы авторизации" },
  { title: "Оборудование для информационной шины" },
];
</script>
<template>
  <div class="container page">
    <Rubrics />
    <BreadCrumbs :router="crumbs" />
    <section class="section">
      <h1 class="section__title">
        Корпус металлический ЩУРв-3/48зо-1 36 УХЛ3 (ВхШхГ) 550x610x165мм IP31 |
        MKM35-V-48-31-ZO IEK (ИЭК)
      </h1>
      <div class="section__grid">
        <ProductSlider />
        <ProductOffers />
      </div>
    </section>
    <ProductInfo />
  </div>
</template>
<style scoped>
.page {
  margin-top: 124px;
  margin-bottom: 100px;
}
.section {
  margin-top: 24px;
}
.section__title {
  margin-bottom: 32px;
  color: black;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
}
.section__grid {
  display: grid;
  gap: 40px;
  grid-template-columns: 650px 784px;
  justify-content: space-between;
  margin-bottom: 56px;
}
</style>

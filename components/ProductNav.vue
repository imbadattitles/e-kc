<template>
  <div class="section__nav">
    <p class="section__nav-item active">Описание</p>
    <p class="section__nav-item">Характеристики</p>
    <p class="section__nav-item">Условия поставки</p>
    <p class="section__nav-item">Документы</p>
    <p class="section__nav-item">Аналоги</p>
    <p class="section__nav-item">Сопутствующие товары</p>
  </div>
</template>
<style scoped>
.section__nav {
  display: flex;
  position: sticky;
  z-index: 10;
  background: white;
  top: 57px;
  gap: 24px;
  margin-bottom: 56px;
  border-bottom: 1px solid #e2e2e2;
  @media (max-width: 1024px) {
    margin-bottom: 24px;
    overflow-y: auto;
    max-width: 100vh;
    text-wrap: nowrap;
    scrollbar-width: none;
    padding: 0 15px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .section__nav-item {
    cursor: pointer;
    color: var(--grey);
    padding-top: 16px;
    padding-bottom: 16px;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    &.active {
      color: black;
      border-bottom: 2px solid var(--akcent);
    }
    &:hover,
    &:active {
      opacity: 0.7;
    }
  }
}
</style>

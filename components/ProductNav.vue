<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const activeItem = ref("");

const scrollToSection = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  const targetPosition =
    sectionElement.getBoundingClientRect().top + window.pageYOffset - 150;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
};

const handleScroll = () => {
  const sectionIds = ["1", "2", "3", "4", "5", "6"];
  let currentSection = "1";

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const id = sectionIds[i];
    const sectionElement = document.getElementById(id);
    if (sectionElement.getBoundingClientRect().top <= 150) {
      currentSection = id;
      break;
    }
  }

  activeItem.value = currentSection;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="section__nav">
    <p
      :class="{ active: activeItem === '1' }"
      @click="scrollToSection('1')"
      class="section__nav-item"
    >
      Описание
    </p>
    <p
      :class="{ active: activeItem === '2' }"
      @click="scrollToSection('2')"
      class="section__nav-item"
    >
      Характеристики
    </p>
    <p
      :class="{ active: activeItem === '3' }"
      @click="scrollToSection('3')"
      class="section__nav-item"
    >
      Условия поставки
    </p>
    <p
      :class="{ active: activeItem === '4' }"
      @click="scrollToSection('4')"
      class="section__nav-item"
    >
      Документы
    </p>
    <p
      :class="{ active: activeItem === '5' }"
      @click="scrollToSection('5')"
      class="section__nav-item"
    >
      Аналоги
    </p>
    <p
      :class="{ active: activeItem === '6' }"
      @click="scrollToSection('6')"
      class="section__nav-item"
    >
      Сопутствующие товары
    </p>
  </div>
</template>
<style scoped>
.section__nav {
  display: flex;
  position: -webkit-sticky;
  position: sticky !important;
  z-index: 5;
  background: white;
  top: 57px;
  overflow: hidden;
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
    transition: 0.2s;
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

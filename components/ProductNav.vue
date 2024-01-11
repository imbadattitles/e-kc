<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const activeItem = ref("");
const shadow = ref(false);
const prevScrollPosition = ref(null);
const isScrolling = ref(null);

const scrollToSection = (sectionId) => {
  const sectionElement = document.getElementById(sectionId);
  const targetPosition =
    sectionElement.getBoundingClientRect().top + window.pageYOffset - 150;
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
};

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset;
  isScrolling.value = currentScrollPosition > prevScrollPosition.value;
  prevScrollPosition.value = currentScrollPosition;
  const parent = document.getElementById("parent");
  const sticky = document.getElementById("sticky");
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

  if (sticky && parent) {
    const parentRect = parent.getBoundingClientRect();
    const elementRect = sticky.getBoundingClientRect();
    if (elementRect.top <= parentRect.top) {
      shadow.value = false;
    } else {
      shadow.value = true;
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
  <div
    id="sticky"
    :class="{ shadow: shadow, topping: !isScrolling }"
    class="bg"
  >
    <div class="section__nav container">
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
  </div>
</template>
<style scoped>
.bg {
  background: white;
  top: 57px;
  position: -webkit-sticky;
  position: sticky !important;
  z-index: 5;
  margin-bottom: 56px;
  transition: 0.5s;
  @media (max-width: 1024px) {
    top: 60px;
    &.topping {
      top: 112px;
    }
  }
}
.shadow {
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.12);
}
.section__nav {
  display: flex;
  overflow: hidden;
  gap: 24px;
  border-bottom: 1px solid #e2e2e2;
  @media (max-width: 1024px) {
    margin-bottom: 24px;
    overflow-x: auto;
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

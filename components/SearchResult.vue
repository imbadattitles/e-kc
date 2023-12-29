<script setup lang="ts">
import { ref } from "vue";
import useScreenSize from "./size";
const filtersVisible = ref(false);
const modalVisible = ref(false);
const openModal = () => {
  modalVisible.value = true;
};
const openFilters = () => {
  filtersVisible.value = true;
};
const resultType = ref<"table" | "grid">("grid");
const changeType = (type: "table" | "grid") => {
  resultType.value = type;
};
const items = [
  {
    img: "/item1.png",
    title: "Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
    modal: true,
  },
  {
    img: "/item2.png",
    title: "Светильник люминесцентный ЛПО-01-2х18-012 ЭПРА - 11218113 Ксенон",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    img: "/item1.png",
    title: "Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    img: "/item2.png",
    title: "Светильник люминесцентный ЛПО-01-2х18-012 ЭПРА - 11218113 Ксенон",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    img: "/item1.png",
    title: "Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    img: "/item2.png",
    title: "Светильник люминесцентный ЛПО-01-2х18-012 ЭПРА - 11218113 Ксенон",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    img: "/item1.png",
    title: "Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    img: "/item2.png",
    title: "Светильник люминесцентный ЛПО-01-2х18-012 ЭПРА - 11218113 Ксенон",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    img: "/item1.png",
    title: "Светильник люминесцентный ЛПО-01-2х18-012 ЭПРА - 11218113 Ксенон",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    img: "/item1.png",
    title: "Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    img: "/item2.png",
    title: "Светильник люминесцентный ЛПО-01-2х18-012 ЭПРА - 11218113 Ксенон",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    img: "/item1.png",
    title: "Светильник люминесцентный ЛПО-01-2х18-012 ЭПРА - 11218113 Ксенон",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
];
const { isDesktop } = useScreenSize();
</script>
<template>
  <div>
    <div v-if="isDesktop" class="banner">
      <img src="/searchResult/banner.png" alt="" class="banner__img" />
      <div class="banner__text">
        <h4 class="banner__title">
          Какие бывают розетки и чем они отличаются?
        </h4>
        <p class="banner__body">
          С другой стороны постоянный количественный рост и сфера нашей
          активности играет важную роль в формировании систем массового участия.
          Разнообразный и богатый опыт новая модель организационной деятельности
          влечет за собой процесс внедрения и модернизации соответствующий
          условий активизации...
        </p>
        <a href="/" class="banner__link">Подробнее</a>
      </div>
    </div>
    <div class="filtr__row">
      <select v-if="!isDesktop" class="select">
        <option class="option">По соответствию</option>
        <option class="option">дате</option>
        <option class="option">дешевле</option>
        <option class="option">дороже</option>
      </select>
      <div v-on:click="openFilters" class="filtrs">
        <span class="filts__icon" />
        Фильтры
      </div>
      <div v-if="isDesktop" class="filtr__btns">
        <div class="filtr__btns-item active">По соответствию</div>
        <div class="filtr__btns-item">дате</div>
        <div class="filtr__btns-item">дешевле</div>
        <div class="filtr__btns-item">дороже</div>
      </div>
      <div v-if="isDesktop" class="types">
        <div
          v-on:click="changeType('grid')"
          :class="resultType === 'grid' && 'active'"
          class="types__grid"
        ></div>
        <div
          v-on:click="changeType('table')"
          class="types__line"
          :class="resultType === 'table' && 'active'"
        ></div>
      </div>
    </div>
    <Filters v-model:modalVisible="filtersVisible" v-if="filtersVisible" />
    <Modal v-model:modalVisible="modalVisible" v-if="modalVisible" />
    <SearchResultGrid v-if="resultType === 'grid'" :items="items" />
    <SearchResultTable v-if="resultType === 'table'" :items="items" />
    <More />
  </div>
</template>
<style scoped>
.banner {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 24px;
  border: 2px dashed var(--Line-2, #dce6ef);
  margin-bottom: 24px;
  @media (max-width: 1024px) {
    display: none;
  }
}
.banner__img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}
.banner__text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
}
.banner__title {
  color: black;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
.banner__body {
  color: var(--grey, #939eaa);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.banner__link {
  text-decoration: none;
  padding-bottom: 2px;
  color: var(--blue);
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  border-bottom: 1px dashed rgba(0, 90, 188, 0.24);
  &:hover,
  :focus {
    opacity: 0.7;
  }
}
.filtr__row {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
  @media (max-width: 1024px) {
    padding: 0 15px;
  }
}
.filtrs {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 11px 24px;
  border: 2px solid var(--Line-2, #dce6ef);
  gap: 8px;
  background: white;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  color: black;
  &:hover,
  :focus {
    background: #edf1f5;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 8px 10px;
  }
}
.filts__icon {
  width: 24px;
  height: 24px;
  background-image: url("/searchResult/filts__icon.svg");
}
.filtr__btns {
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
}
.filtr__btns-item {
  cursor: pointer;
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  padding: 11px 16px;
  &.active {
    background: #eef2f6;
  }
  &:hover,
  :focus {
    opacity: 0.7;
  }
}
.select {
  cursor: pointer;
  color: black;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  padding: 12px 10px;
  background: #eef2f6;
  border: none;
  height: 100%;
  .option {
    font-size: 14px !important;
    font-family: Lato;
    padding: 4px;
  }
}

.types {
  display: flex;
  margin-left: auto;
  div {
    padding: 8px;
    width: 32px;
    height: 32px;
    &:hover,
    :focus {
      background-color: #dce6ef;
    }
  }
  .active {
    background-color: #eef2f6;
  }
}
.types__grid {
  cursor: pointer;
  background-image: url("/searchResult/typesGrid.svg");
  background-color: none;
}
.types__line {
  cursor: pointer;
  background-image: url("/searchResult/typesLine.svg");
  background-color: none;
}
</style>

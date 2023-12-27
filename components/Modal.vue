<script setup>
import useScreenSize from "./size";

const emit = defineEmits(["update:modalVisible"]);
const closeModal = () => {
  emit("update:modalVisible", false);
};
const { isDesktop } = useScreenSize();
const items = [
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
];
const itemsNoPic = [
  {
    title: "Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
  {
    title: "Светильник люминесцентный ЛПО-01-2х18-012 ЭПРА - 11218113 Ксенон",
    brand: "Brand",
    over: "5583",
    cost: "121 486.22",
  },
];
</script>

<template>
  <div class="bg">
    <div class="modal">
      <div class="close" v-on:click="closeModal"></div>
      <div v-if="isDesktop" class="white">
        <table class="tablePic">
          <thead class="tableHeader">
            <tr>
              <th>Фото</th>
              <th>Название</th>
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
              {{ item.title }}
            </th>
            <th>
              <a href="/" class="brand">{{ item.brand }}</a>
            </th>
            <th class="over">{{ item.over }}</th>
            <th class="cost">{{ item.cost }}</th>
            <th><MountInput /></th>
          </tr>
        </table>
        <p class="noPic">Без картинки</p>
        <table class="tableNoPic">
          <thead class="tableHeader">
            <tr>
              <th>Название</th>
              <th>Бренд</th>
              <th>Доступно</th>
              <th>Цена (₽)</th>
              <th>Количество</th>
            </tr>
          </thead>
          <tr v-for="(item, index) in items" :key="index" class="tableRow">
            <th class="item__title">
              {{ item.title }}
            </th>
            <th>
              <a href="/" class="brand">{{ item.brand }}</a>
            </th>
            <th class="over">{{ item.over }}</th>
            <th class="cost">{{ item.cost }}</th>
            <th><MountInput /></th>
          </tr>
        </table>
      </div>
      <div v-if="!isDesktop" class="white">
        <div class="grid">
          <div v-for="(item, index) in items" :key="index" class="item">
            <div class="full">
              <a class="item__title"
                >Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB</a
              >
              <div class="group">
                <div class="over_mobile">
                  <span class="name">Дата обновления</span>
                  <span class="line" />
                  <p class="important">36 шт.</p>
                </div>
                <div class="over_mobile">
                  <span class="name">Доступно</span>
                  <span class="line" />
                  <p class="important">36 шт.</p>
                </div>
                <div class="over_mobile">
                  <span class="name">Срок</span>
                  <span class="line" />
                  <p class="important">от 1 дня.</p>
                </div>
                <div class="over_mobile">
                  <span class="name">Цена</span>
                  <span class="line" />
                  <p class="important price">121.22 ₽</p>
                </div>
              </div>
              <MountInput />
            </div>
            <span class="borderTop" />
            <span class="borderBottom" />
            <span class="borderLeft" />
            <span class="borderRight" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.grid {
  display: grid;
  width: 100%;
  border-right: 2px solid #dce6ef;
  border-bottom: 2px solid #dce6ef;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    @media (max-width: 524px) {
      grid-template-columns: 1fr;
      border-left: none;
      border-right: none;
      border-bottom: none;
    }
  }
}
.item {
  @media (max-width: 1024px) {
    position: relative;
    height: auto;
    width: auto;
    gap: 16px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .full {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 13px;
  }
  .item__img {
    margin: auto;
    margin-top: 0;
    width: 60px;
    height: 38px;
    margin-bottom: 0;
    object-fit: cover;
  }
  .item__title {
    display: block;
    cursor: pointer;
    color: var(--blue);
    font-family: Lato;
    min-width: 160px;
    font-size: 13px;
    margin-bottom: 0;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    &:hover,
    &:focus {
      color: #1461b4;
      text-decoration: underline;
    }
  }
  .left {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .over_mobile {
    display: flex;
    align-items: center;
    gap: 8px;
    .name {
      color: #adbac8;

      text-align: center;
      /* Lato 13 Bold */
      font-family: Lato;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
    .line {
      flex: 1;
      height: 1px;
      border-bottom: 1px dashed #dce6ef;
    }
    .important {
      color: black;
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      &.price {
        font-weight: 700;
      }
    }
  }
  .borderTop {
    position: absolute;
    width: 100%;
    height: 1px;
    background: #dce6ef;
    top: 0px;
    left: 0px;
  }
  .borderLeft {
    position: absolute;
    width: 1px;
    height: 100%;
    background: #dce6ef;
    top: -1px;
    left: 0px;
    @media (max-width: 424px) {
      display: none;
    }
  }
  .borderRight {
    position: absolute;
    width: 1px;
    height: 100%;
    background: #dce6ef;
    top: -1px;
    right: -1px;
    @media (max-width: 424px) {
      display: none;
    }
  }
  .borderBottom {
    position: absolute;
    width: 100%;
    height: 1px;
    background: #dce6ef;
    bottom: -1px;
    left: -1px;
  }
}
.white {
  background: white;
}
.bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.64);
  bottom: 0;
  z-index: 1000;
  @media (max-width: 1024px) {
    padding-top: 30px;
    justify-content: flex-start;
  }
}
.modal {
  position: relative;
  z-index: 100;
  width: 1330px;
  padding-top: 50px;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1330px) {
    width: 90vw;
  }
}
.close {
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
  background: url("/closeWhite.svg");
}
.noPic {
  margin: 32px 0px 20px 24px;
  color: var(--red, #f34439);
  /* Lato 20 Bold */
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
  letter-spacing: -0.2px;
}
.tablePic {
  width: 100%;
  padding-top: 16px;

  th {
    text-align: left;
  }

  th:first-child {
    padding-left: 24px;
  }
  th:nth-child(1) {
    max-width: 80px;
  }
  th:nth-child(2) {
    width: 590px !important;
  }
  th:nth-child(3) {
    width: 120px;
  }
  th:nth-child(6) {
    width: 170px;
  }

  .tableRow {
    th {
      vertical-align: middle;
      padding-top: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #dce6ef;
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
    color: black;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.14px;
  }
}
.tableNoPic {
  width: 100%;
  padding-top: 16px;

  th {
    text-align: left;
  }

  th:first-child {
    padding-left: 24px;
  }
  th:nth-child(1) {
    width: 755px !important;
  }
  th:nth-child(3) {
    width: 120px !important;
  }

  th:nth-child(4) {
    width: 150px !important;
  }

  th:nth-child(5) {
    width: 170px;
  }

  .tableRow {
    th {
      vertical-align: middle;
      padding-top: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #dce6ef;
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

  .item__title {
    color: black;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.14px;
  }
}
.brand {
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  color: black;
  padding-bottom: 2px;
  text-decoration: none;
  border-bottom: 1px solid #e2e2e2;
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

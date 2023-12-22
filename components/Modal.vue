<template>
  <div class="bg">
    <div class="modal">
      <div class="close" v-on:click="closeModal"></div>
      <div class="white">
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
    </div>
  </div>
</template>
<style scoped>
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
<script setup>
const emit = defineEmits(["update:modalVisible"]);
const closeModal = () => {
  emit("update:modalVisible", false);
};
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

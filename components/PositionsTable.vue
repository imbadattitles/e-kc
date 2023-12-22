<template>
  <div class="bg">
    <div class="modal">
      <div class="close" v-on:click="closeModal"></div>
      <table class="table">
        <thead class="tableHeader">
          <tr>
            <th>
              <div>Название <span class="about"></span></div>
            </th>
            <th>
              <div>Цена <span class="about"></span></div>
            </th>
            <th>
              <div>Кол-во <span class="about"></span></div>
            </th>
            <th>
              <div>Сумма <span class="about"></span></div>
            </th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tr v-for="(item, index) in items" :key="index" class="tableRow">
          <td>
            <div class="flex">
              <img class="img" src="/lk/item.png" alt="" />
              <div class="item__links">
                <a href="/"
                  >Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB</a
                >
                <div class="item__icons">
                  <span class="item__icons_1"></span>
                  <span class="item__icons_2"></span>
                  <span class="item__icons_3"></span>
                  <span class="item__icons_4"></span>
                  <span class="item__icons_5"></span>
                </div>
              </div>
              <div class="like"></div>
            </div>
          </td>
          <td class="price">44 442.85 ₽</td>
          <td class="amount">
            <p>1 шт.</p>
          </td>
          <td class="cost">73 444 442.85 ₽</td>
          <td>
            <div class="delete"><span></span></div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup>
const items = [0, 1, 2, 3, 4, 5];
const emit = defineEmits(["update:modalVisible"]);
const closeModal = () => {
  emit("update:modalVisible", false);
};
</script>

<style scoped>
.table {
  background: white;
  border-spacing: none;
  padding-top: 15px;
  width: 100%;
  th {
    color: var(--grey);
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    div {
      display: flex;
      align-items: center;
      gap: 2px;
      .about {
        cursor: pointer;
        width: 18px;
        height: 18px;
        background: url("/tableAbout.svg");
      }
    }
  }
  th,
  td {
    text-align: left;
  }

  th:first-child,
  td:first-child {
    padding-left: 24px;
  }
  th:last-child,
  td:last-child {
    padding-right: 24px;
  }
  th:nth-child(1) {
    width: 60%;
  }
  th:nth-child(2) {
    width: 100px !important;
  }
  th:nth-child(3) {
    width: 120px;
  }
  th:nth-child(4) {
    width: 120px;
  }
  th:nth-child(5) {
    width: 50px;
    text-align: right !important;
  }
  .tableRow {
    td {
      vertical-align: middle;
      padding-top: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #dce6ef;
    }
  }
  .tableRow:last-child {
    td {
      border: none;
    }
  }
}
.price,
.amount,
.cost {
  color: black;
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.cost {
  font-weight: 700;
}
.amount {
  p {
    width: 100px;
    text-align: right;
    padding: 11px 6px;
    border: 1px solid #dce6ef;
    background: white;
    height: 100%;
  }
}
.flex {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 40px;
}
.img {
  width: 64px;
  height: 40px;
  object-fit: cover;
}
.bg {
  z-index: 100;
  position: fixed;
  background: rgba(0, 0, 0, 0.64);
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal {
  position: relative;
  width: 1330px;
  margin: auto;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-top: 50px;
  &::-webkit-scrollbar {
    display: none;
  }
}
.close {
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0;
  width: 40px;
  height: 40px;
  background: url("/closeWhite.svg");
}

.item__links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  a {
    text-decoration: none;
    cursor: pointer;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    color: var(--blue);
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
  .item__icons {
    display: flex;
    gap: 8px;
    span {
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
    .item__icons_1 {
      background: url("/lk/procenka1.svg");
    }
    .item__icons_2 {
      background: url("/lk/procenka2.svg");
    }
    .item__icons_3 {
      background: url("/lk/procenka3.svg");
    }
    .item__icons_4 {
      background: url("/lk/procenka4.svg");
    }
    .item__icons_5 {
      background: url("/lk/procenka5.svg");
    }
  }
}
.like {
  margin-left: auto;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: url("/searchResult/like.svg");
  &.active {
    background-image: url("/searchResult/likeActive.svg");
  }
  &:hover,
  &:active {
    opacity: 0.7;
  }
}

.delete {
  cursor: pointer;
  margin-left: auto;
  height: 40px;
  width: 40px;
  border: 1px solid rgba(255, 19, 19, 0.24);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  span {
    display: block;
    width: 24px;
    height: 24px;
    background-image: url("/lk/remove.svg");
  }
  &:hover,
  &:active {
    background: rgb(245, 231, 231);
  }
}
</style>

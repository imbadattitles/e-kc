<script setup>
import useScreenSize from "./size";

const modalVisible = ref(false);
const openModal = () => {
  modalVisible.value = true;
};
const items = [0, 1, 2, 3, 4, 5, 6];
const { isDesktop } = useScreenSize();
</script>

<template>
  <PositionsTable v-model:modalVisible="modalVisible" v-if="modalVisible" />
  <table v-if="isDesktop" class="table">
    <thead class="tableHeader">
      <tr>
        <th>№ Заказа</th>
        <th>
          <div>Дата <span class="dateArrow" /></div>
        </th>
        <th>Доставка</th>
        <th>Оплата</th>
        <th>Статус</th>
        <th>Сумма</th>
        <th></th>
      </tr>
    </thead>
    <tr v-for="(item, index) in items" :key="index" class="tableRow">
      <td>
        <div class="row">
          <p class="item__title">№ 053 566</p>
          <button v-if="index === 1" class="submit">Отправить</button>
        </div>
      </td>
      <td class="date">01.09.2023</td>
      <td class="delivery">Самовывоз</td>
      <td class="payment">Оплачен</td>
      <td class="status">
        <div v-if="index === 1" class="statusItem blue">
          <span class="statusCircle"></span>
          <p>Сохранено</p>
        </div>
        <div v-else-if="index === 2" class="statusItem green">
          <span class="statusCircle"></span>
          <p>Отправлено</p>
        </div>
        <div v-else-if="index === 3" class="statusItem grey">
          <span class="statusCircle"></span>
          <p>Отгружено</p>
        </div>
        <div v-else class="statusItem red">
          <span class="statusCircle"></span>
          <p>
            Выставлен <br />
            счет
          </p>
        </div>
      </td>
      <td class="cost">787.16 ₽</td>
      <td class="positions">
        <div class="positionsRow">
          <p>144 позиции</p>
          <div v-on:click="openModal" class="positionsRow__btn">
            <span></span>
          </div>
        </div>
      </td>
    </tr>
  </table>
  <div v-if="!isDesktop" class="grid">
    <div v-for="(item, index) in items" :key="index" class="item">
      <div class="full">
        <div class="item__number">
          <p>№ 053 566</p>
          <button v-if="index === 1" class="submit">Отправить</button>
        </div>
        <div class="group">
          <div class="over_mobile">
            <span class="name">Дата заказа</span>
            <span class="line" />
            <p class="important">01.09.2023</p>
          </div>
          <div class="over_mobile">
            <span class="name">Доставка</span>
            <span class="line" />
            <p class="important">Самовывоз</p>
          </div>
          <div class="over_mobile">
            <span class="name">Оплата</span>
            <span class="line" />
            <p class="important">Оплачен</p>
          </div>
          <div class="over_mobile">
            <span class="name">Статус</span>
            <span class="line" />
            <div v-if="index === 1" class="statusItem blue">
              <span class="statusCircle"></span>
              <p>Сохранено</p>
            </div>
            <div v-else-if="index === 2" class="statusItem green">
              <span class="statusCircle"></span>
              <p>Отправлено</p>
            </div>
            <div v-else-if="index === 3" class="statusItem grey">
              <span class="statusCircle"></span>
              <p>Отгружено</p>
            </div>
            <div v-else class="statusItem red">
              <span class="statusCircle"></span>
              <p>Выставлен счет</p>
            </div>
          </div>
          <div class="over_mobile">
            <span class="name">Сумма</span>
            <span class="line" />
            <p class="important price">от 121.22 ₽</p>
          </div>
        </div>
        <div class="positionsRow">
          <p>144 позиции</p>
          <div v-on:click="openModal" class="positionsRow__btn">
            <span></span>
          </div>
        </div>
      </div>
      <span class="borderTop" />
      <span class="borderBottom" />
      <span class="borderLeft" />
      <span class="borderRight" />
    </div>
  </div>
  <More />
</template>

<style scoped>
.submit {
  padding: 10px 12px;
  color: white;
  cursor: pointer;
  border: none;
  background: var(--akcent);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  &:hover,
  &:focus {
    background: #1461b4;
  }
}
.positionsRow {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
  p {
    color: black;
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  .positionsRow__btn {
    cursor: pointer;
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid #dce6ef;
    background: #fff;
    span {
      width: 24px;
      height: 24px;
      background: url("/lk/positionsRow__btn.svg");
    }
    &:hover,
    &:focus {
      background: #edf1f5;
    }
  }
}
.statusItem {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin-top: 5px;
  .statusCircle {
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
  }
  p {
    margin-top: -5px;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  &.blue {
    .statusCircle {
      background: var(--akcent);
    }
    p {
      color: var(--akcent);
    }
  }
  &.red {
    .statusCircle {
      background: var(--red);
    }
    p {
      color: var(--red);
    }
  }
  &.green {
    .statusCircle {
      background: var(--green);
    }
    p {
      color: var(--green);
    }
  }
  &.grey {
    .statusCircle {
      background: #999999;
    }
    p {
      color: #999999;
    }
  }
}
.grid {
  margin-top: 16px;
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
  .item__number {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-family: Lato;
      font-size: 13px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
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
.table {
  margin-top: 20px;
  border-spacing: none;
  width: 100%;
  border: 2px solid var(--Line-2, #dce6ef);
  padding-top: 16px;

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
    width: 530px;
  }
  th:nth-child(2) {
    min-width: 100px !important;
    div {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 2px;
      .dateArrow {
        width: 16px;
        height: 16px;
        background-size: contain;
        background: url("/lk/dateArrow.svg");
      }
    }
  }
  th:nth-child(3) {
    min-width: 100px;
  }
  th:nth-child(4) {
    min-width: 100px;
  }
  th:nth-child(5) {
    min-width: 100px;
  }
  th:nth-child(6) {
    min-width: 70px;
  }
  th:nth-child(7) {
    min-width: 110px;
  }
  .statusItem {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    margin-top: 5px;
    .statusCircle {
      display: block;
      width: 9px;
      height: 9px;
      border-radius: 50%;
    }
    p {
      margin-top: -5px;
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    }
    &.blue {
      .statusCircle {
        background: var(--akcent);
      }
      p {
        color: var(--akcent);
      }
    }
    &.red {
      .statusCircle {
        background: var(--red);
      }
      p {
        color: var(--red);
      }
    }
    &.green {
      .statusCircle {
        background: var(--green);
      }
      p {
        color: var(--green);
      }
    }
    &.grey {
      .statusCircle {
        background: #999999;
      }
      p {
        color: #999999;
      }
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 32px;
  }
  .item__title {
    color: black;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
  .date,
  .delivery,
  .payment,
  .cost {
    color: black;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
  }
  .cost {
    font-weight: 700 !important;
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
}
</style>

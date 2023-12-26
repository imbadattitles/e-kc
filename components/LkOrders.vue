<script setup>
const modalVisible = ref(false);
const openModal = () => {
  modalVisible.value = true;
};
const items = [0, 1, 2, 3, 4, 5, 6];
</script>

<template>
  <PositionsTable v-model:modalVisible="modalVisible" v-if="modalVisible" />
  <table class="table">
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
  <More />
</template>

<style scoped>
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

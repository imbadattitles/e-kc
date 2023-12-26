<script setup>
const items = [1, 2, 3, 4, 5];
</script>
<template>
  <form class="form">
    <div class="group">
      <label for="text">
        <p class="label">Товарные позиции</p>
        <textarea
          class="textarea"
          placeholder="Введите список товарных позиций"
          name="text"
          id="text"
        />
      </label>
    </div>
    <div class="group">
      <p class="group__title">Общие настройки</p>
      <div class="checkboxGroup">
        <label class="checkboxLabel">
          <input checked type="checkbox" class="checkbox" />
          <div class="fake"></div>
          <p class="checkbox_text">
            Последняя цифра запроса является количеством
          </p>
        </label>
        <label class="checkboxLabel">
          <input type="checkbox" class="checkbox" />
          <div class="fake"></div>
          <p class="checkbox_text">
            Использовать мой доверенный список поставщиков для выбора товаров и
            товарных предложений
          </p>
        </label>
      </div>
    </div>
    <div class="group">
      <p class="group__title">Поиск товара</p>
      <label>
        <p class="label">Наличие товара</p>
        <select class="select">
          <option class="option" disabled>Пункт 1</option>
          <option class="option" selected>Пункт 2</option>
        </select>
      </label>
      <div class="row">
        <label>
          <p class="label">Удаленность</p>
          <select class="select">
            <option class="option" disabled>Пункт 1</option>
            <option class="option" selected>Пункт 2</option>
          </select>
        </label>
        <label>
          <p class="label">Актуальность данных (дней)</p>
          <select class="select">
            <option class="option" disabled>Пункт 1</option>
            <option class="option" selected>Пункт 2</option>
          </select>
        </label>
      </div>
    </div>
    <div class="group">
      <p class="group__title">Подбор товарного предложения</p>
      <label>
        <p class="label">Приоритет выбора предложения</p>
        <select class="select">
          <option class="option" disabled>Пункт 1</option>
          <option class="option" selected>Пункт 2</option>
        </select>
      </label>
      <button class="submit">Приценить</button>
    </div>
    <div class="marks">
      <div class="marks__marks">
        <span class="dblue"></span>
        <span class="blue"></span>
        <span class="green"></span>
        <span class="yellow"></span>
        <span class="orange"></span>
        <span class="red"></span>
      </div>
      <div class="marks__text">
        <p>— хорошо</p>
        <p>— плохо</p>
      </div>
    </div>
  </form>
  <div class="results">
    <p class="results__title">Результаты <span>12</span></p>
    <div class="results__items">
      <div v-for="(item, index) in items" :key="index" class="result__item">
        <table class="table">
          <thead class="tableHeader">
            <tr>
              <th>Статус</th>
              <th>Товарное предложение</th>
              <th>Требуется</th>
              <th>Ед.изм.</th>
              <th>Примечание</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tr class="tableRow">
            <td>
              <div class="status">
                <div class="status_item dblue"></div>
                <div class="status_item blue"></div>
                <div class="status_item red"></div>
              </div>
            </td>
            <td>
              <p class="item__title">Бокс EUROPIA в нишу 12М</p>
            </td>
            <td>
              <p :class="index === 1 && 'active'" class="window item__title">
                300
              </p>
            </td>
            <td>
              <p :class="index === 1 && 'active'" class="window item__title">
                шт.
              </p>
            </td>
            <td><p class="item__title">—</p></td>
            <td>
              <div class="close"><span></span></div>
            </td>
          </tr>
          <tr class="tableRow">
            <td>
              <img class="img" src="/lk/item.png" alt="" />
            </td>
            <td>
              <div class="flex">
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
                <div class="item__date">
                  <p>13.07.2023</p>
                  <span>кратн: 3</span>
                </div>
              </div>
            </td>
            <td>
              <div
                :class="index === 1 && 'active'"
                style="text-align: center"
                class="item__amount"
              >
                <p>39</p>
                <span>Склад</span>
              </div>
            </td>
            <td style="text-align: center">
              <div :class="index === 1 && 'active'" class="sht"><p>шт.</p></div>
            </td>
            <td :colspan="2">
              <div class="flex">
                <div class="item__brand">
                  <p>Элком-Электро</p>
                  <span>Бренд</span>
                </div>
                <div class="item__km">
                  <p>1</p>
                  <span>км.</span>
                </div>
                <div class="item__price">
                  <p>12 220.1 ₽</p>
                  <span>Цена</span>
                </div>
                <div class="item__cost">
                  <p>662 030.10 ₽</p>
                  <span>Стоимость</span>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="result__result">
      <div class="pos">
        <p>Позиций</p>
        <span class="line"></span> <span class="number">12</span>
      </div>
      <div class="result__cost">
        <p>Итого</p>
        <span class="line"></span> <span class="number">256 775.24 ₽</span>
      </div>
      <button class="result__submit">Добавить в заказ</button>
    </div>
  </div>
</template>
<style scoped>
.form {
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 56px;
}
.group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.label {
  margin-bottom: 8px;
  color: black;
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.textarea {
  padding: 16px 20px;
  height: 248px;
  resize: none;
  width: 100%;
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  outline: none;
  border: 1px solid #dce6ef;
  &::placeholder {
    color: var(--grey);
  }
  &:focus {
    outline: 2px solid var(--blue);
  }
}
.group__title {
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
}

.checkboxGroup {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.checkbox_text {
  display: flex;
  gap: 8px;
  color: black;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  span {
    color: #939eaa;
  }
}
.fake {
  position: relative;
  width: 24px;
  height: 24px;
  background-size: contain;
  background: url("/checkBoxSmall.svg");
  margin-right: 8px;
}

.checkbox {
  display: none;
}

.checkboxLabel {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.checkbox:checked + .fake:after {
  opacity: 1;
}
.fake:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background-size: contain !important;
  opacity: 0;
  background: url("/checkBoxSmall_checked.svg");
}
.row {
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
}
.select {
  width: 100%;
  border: 1px solid #dce6ef;
  padding: 10px 16px;
  display: block;
  color: black;
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 19.6px */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("/lk/selectArrow.svg");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 24px, 100%;
}
.submit {
  width: 100%;
  padding: 15px;
  border: none;
  color: white;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  background: var(--akcent);
}
.marks {
  display: flex;
  gap: 8px;
}
.marks__marks {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 32px;
  span {
    width: 100%;
    height: 8px;
  }
}
.marks__text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}
.dblue {
  background: #1774d8;
}
.blue {
  background: #24b0ff;
}
.green {
  background: #00af1c;
}
.yellow {
  background: #f4dc00;
}
.orange {
  background: #fb8a00;
}
.red {
  background: #f34439;
}
.item__date,
.item__brand,
.item__km,
.item__amount,
.item__price,
.item__date,
.sht,
.item__cost {
  p {
    color: black;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  span {
    color: var(--grey);
    display: block;
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
}
.item__amount {
  &.active p {
    color: var(--red);
  }
}
.sht {
  &.active p {
    color: var(--red) !important;
  }
}
.results__title {
  color: black;
  font-family: Lato;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.24px;
  margin-bottom: 24px;
  span {
    font-size: 16px;
    color: var(--grey);
  }
}
.results__items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.result__item {
  padding: 6px 10px;
  border: 2px solid #dce6ef;
}
.table {
  border-spacing: 10px;
  width: 100%;
  th {
    text-align: left;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }

  th:nth-child(1) {
    min-width: 56px;
  }
  th:nth-child(2) {
    width: 640px !important;
  }
  th:nth-child(3) {
    min-width: 80px;
  }
  th:nth-child(4) {
    min-width: 56px;
  }
  th:nth-child(5) {
    width: 340px;
  }
  th:nth-child(6) {
    min-width: 56px;
  }
  tr:nth-child(2) {
    margin-top: 8px;
  }
  tr:nth-child(3) {
    margin-top: 16px;
  }
  .tableRow {
    th {
      vertical-align: middle;
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
    width: 56px;
    height: 35px;
    object-fit: cover;
  }
  .status {
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 100%;
    div {
      width: 100%;
      height: 17px;
    }
  }
  .item__title {
    padding: 18px 8px;
    color: black;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    border: 1px solid #dce6ef;
    background: #fff;
    &.active {
      border: 1px solid #f34439;
      background: rgba(243, 68, 57, 0.08);
      color: var(--red);
    }
  }
  .window {
    text-align: center;
  }
  .close {
    cursor: pointer;
    height: 100%;
    width: 100%;
    border: 1px solid rgba(255, 19, 19, 0.24);
    display: flex;
    padding: 16px;
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
}
.result__result {
  width: 500px;
  border: 2px solid #dce6ef;
  padding: 24px;
  margin: 24px 0px 0px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  .line {
    display: block;
    flex: 1;
    height: 1px;
    border-bottom: 1px dashed #dce6ef;
  }
  .pos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    p {
      color: black;
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 240%; /* 38.4px */
      letter-spacing: -0.16px;
    }
    .number {
      color: #000;
      text-align: right;
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 240%; /* 38.4px */
      letter-spacing: -0.16px;
    }
  }
  .result__cost {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    p {
      color: black;
      font-family: Lato;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 240%; /* 38.4px */
      letter-spacing: -0.16px;
    }
    .number {
      color: #000;
      text-align: right;
      font-family: Lato;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 240%; /* 38.4px */
      letter-spacing: -0.16px;
    }
  }
  .result__submit {
    padding: 15px;
    cursor: pointer;
    border: none;
    background: var(--akcent);
    color: white;
    width: 100%;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
    &:hover,
    &:active {
      background: #1461b4;
    }
  }
}
</style>

<script setup>
import { ref } from "vue";
const items = [0, 1, 2, 3];
const delivery = ref("1");
</script>
<template>
  <section class="section">
    <div class="section__top">
      <p class="section__title">Корзина <span>4 товара</span></p>
      <p class="cart__delete">Удалить все из корзины</p>
    </div>
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
              <a>Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB</a>
            </div>
            <div class="like"></div>
          </div>
        </td>
        <td class="price">44 442.85 ₽</td>
        <td class="amount">
          <div class="item__costRow-change">
            <div class="item__costRow-input">
              <div class="change">
                <div class="minus"></div>
                <div class="plus"></div>
              </div>
              0 шт
            </div>
          </div>
        </td>
        <td class="cost">73 444 442.85 ₽</td>
        <td>
          <div class="delete"><span></span></div>
        </td>
      </tr>
    </table>
    <div class="result">
      <div class="result__result">
        <div class="pos">
          <p>Наценка</p>
          <span class="line"></span> <span class="number">12</span>
        </div>
        <p class="text">
          Розничная наценка к оптовой цене <br />
          (зависит от суммы заказа)
        </p>
        <div class="result__cost">
          <p>Итого</p>
          <span class="line"></span> <span class="number">256 775.24 ₽</span>
        </div>
      </div>

      <div class="result__delivery">
        <p class="result__delivery-title">Выберите способ доставки:</p>
        <label
          v-on:click="() => (delivery = '1')"
          key="pickup"
          :class="delivery === '1' && 'active'"
          class="radio-item"
        >
          <div class="radio__row">
            <input
              checked
              class="radio"
              id="pickup"
              type="radio"
              name="radio"
              value="pickup"
            />
            <div class="fake__radio"></div>
            <p>Самовывоз (бесплатно)</p>
          </div>
          <div class="ul">
            <div class="group">
              <p class="item">
                <span class="circle"></span>
                Самовывоз с пункта выдачи готовой продукции по адресу:
                Московская область, г Мытищи, Водопроводная аллея д 20, 21
              </p>
              <p class="item">
                <span class="circle"></span>
                Время работы: Пн - Пт, с 9.00 до 18.00
              </p>
            </div>
          </div>
        </label>

        <label
          key="delivery"
          v-on:click="() => (delivery = '2')"
          :class="delivery === '2' && 'active'"
          class="radio-item"
        >
          <div class="radio__row">
            <input
              class="radio"
              id="delivery"
              type="radio"
              name="radio"
              value="delivery"
            />
            <div class="fake__radio"></div>
            <p>Доставка (от 1 500 ₽)</p>
          </div>
          <div class="ul">
            <div class="group">
              <p class="title">Для юридических лиц:</p>
              <p class="item">
                <span class="circle"></span>
                Доставка по Москве и Области производится в течение 1 рабочего
                дня с момента поступления денежных средств на расчетный счет
                Компании.
              </p>
            </div>
            <div class="group">
              <p class="title">Срочная доставка:</p>
              <p class="item">
                <span class="circle"></span>
                Возможна в день поступления денежных средств, при наличии
                свободного транспорта
              </p>
              <p class="text">
                В регионы РФ организуем доставку транспортными компаниями.
              </p>
            </div>
            <div class="group">
              <p class="title">Стоимость доставки:</p>
              <p class="item">
                <span class="circle"></span>
                В пределах МКАД - от 1500 рублей с НДС.
              </p>
              <p class="item">
                <span class="circle"></span>
                За пределы МКАД - +50 рублей километр.
              </p>
            </div>
            <div class="line"></div>
            <div class="group">
              <p class="title">Для физических лиц:</p>
              <p class="item">
                <span class="circle"></span>
                Доставка по Москве и Области и самовывоз производится в течение
                1 рабочего дня с момента оплаты.
              </p>
              <p class="text">
                В регионы РФ организуем доставку транспортными компаниями.
              </p>
            </div>
            <div class="group">
              <p class="title">Стоимость доставки:</p>
              <p class="item">
                <span class="circle"></span>
                В пределах МКАД - от 1500 рублей с НДС.
              </p>
              <p class="item">
                <span class="circle"></span>
                За пределы МКАД - +50 рублей километр.
              </p>
              <p class="text">
                В стоимость доставки не входит услуга подъема и разгрузки
                товара! Возможность заказа данных услуг уточняйте у личного
                менеджера.
              </p>
            </div>
          </div>
        </label>
      </div>
      <form class="form">
        <p class="form__title">Адрес получателя</p>
        <div class="form__items">
          <input type="text" placeholder="Ваше имя*" class="form__input" />
          <input type="text" placeholder="Email*" class="form__input" />
          <input type="text" placeholder="Телефон*" class="form__input" />
          <input type="text" placeholder="Адрес доставки" class="form__input" />
          <textarea
            placeholder="Комментарий к заказу (Реквизиты юридического лица)"
            class="form__textarea"
          />
        </div>
        <div class="form__btns">
          <button class="form__submit">Оформить заказ</button>
          <button class="form__smeta">Сохранить в смету</button>
        </div>
      </form>
    </div>
  </section>
</template>
<style scoped>
.item__costRow-change {
  position: relative;
  display: flex;
}
.item__costRow-input {
  width: 100px;
  color: var(--Black, #000);
  text-align: right;
  /* Lato 13 Reg */
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding: 11px 8px;
  border: 1px solid #e2e2e2;
}
.change {
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  .plus {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-position: center;
    background-image: url("/inputPlus.svg");
    background-repeat: no-repeat;
  }
  .minus {
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-position: center;
    background-image: url("/inputMinus.svg");
    background-repeat: no-repeat;
  }
}
.item__costRow-btn {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
}
.result {
  width: 510px;
  margin-left: auto;
}
.section {
  margin: auto;
  margin-top: 140px;
  margin-bottom: 100px;
  max-width: 1360px;

  padding: 0 15px;
}
.section__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.form {
  width: 100%;
  .form__title {
    margin-bottom: 16px;
    color: black;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 28px */
    letter-spacing: -0.2px;
  }
  .form__items {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
  }
  .form__input,
  .form__textarea {
    width: 100%;
    padding: 15px 24px;
    color: black;
    background: #eef2f6;
    border: none;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
    &::placeholder {
      color: var(--grey);
    }
    &:focus {
      outline: 2px solid var(--akcent);
    }
  }
  .form__textarea {
    resize: none;
    height: 100px;
  }
  .form__btns {
    display: flex;
    gap: 8px;
    button {
      cursor: pointer;
      padding: 11px 24px;
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      line-height: 160%; /* 25.6px */
      letter-spacing: -0.16px;
      &:hover,
      &:active {
        background: #1461b4;
        color: white;
      }
    }
    .form__submit {
      color: white;

      background: var(--akcent);
      font-weight: 700;
      border: none;
    }
    .form__smeta {
      font-weight: 400;
      border: 2px solid #dce6ef;
      color: var(--akcent);
      background: none;
    }
  }
}

.result__delivery {
  width: 100%;
  margin-bottom: 24px;
  .result__delivery-title {
    margin-bottom: 16px;
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 28px */
    letter-spacing: -0.2px;
  }
  .ul {
    display: none;
    margin-top: 16px;
    .line {
      width: 100%;
      height: 1px;
      background: #dce6ef;
      margin: 16px 0px;
    }
    .title {
      margin-top: 8px;
      margin-bottom: 4px;
      color: black;
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
    .item {
      display: flex;
      gap: 10px;
      align-items: flex-start;
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      .circle {
        margin-top: 8px;
        min-width: 5px;
        min-height: 5px;
        border-radius: 50%;
        background: #000;
        margin-left: 8px;
      }
    }
    .text {
      margin-top: 8px;
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }
  }
  .radio-item {
    cursor: pointer;
    display: block;
    width: 100%;
    padding: 24px;
    border: 1px solid #dce6ef;
    background: #fff;
    margin-bottom: 8px;
    &.active {
      background: #eef2f6;
      border: none;
      .ul {
        display: block;
      }
    }
  }
  .radio__row {
    display: flex;
    align-items: center;
    gap: 8px;
    p {
      color: black;
      font-family: Lato;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 25.2px */
      letter-spacing: -0.18px;
    }
  }
  .radio {
    display: none;
  }
  .fake__radio {
    position: relative;
    width: 24px;
    height: 24px;
    background: url("/radioSmall.svg");
  }
  .fake__radio::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    background: url("/radioSmall_active.svg");
    opacity: 0;
  }
  .radio:checked + .fake__radio:after {
    opacity: 1;
  }
}

.cart__delete {
  color: var(--grey);
  cursor: pointer;
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  padding-bottom: 2px;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.12);
}

.section__title {
  color: black;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 38.4px */
  letter-spacing: -0.32px;
  span {
    font-size: 16px;
    color: var(--grey);
  }
}
.table {
  margin-bottom: 24px;
  padding-top: 16px;
  border-spacing: none;
  width: 100%;
  border: 2px solid #dce6ef;
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
    width: 67%;
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

.result__result {
  width: 100%;
  border: 2px solid #dce6ef;
  padding: 24px;
  margin: 24px 0px 0px auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  .line {
    display: block;
    flex: 1;
    height: 1px;
    border-bottom: 1px dashed #dce6ef;
  }
  .text {
    color: var(--grey);
    margin-top: -15px;
    font-family: Lato;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-left: auto;
    text-align: right;
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
}
</style>

<script setup>
import { ref } from "vue";
const description = new Array(24);
const documents = new Array(4);
const accordeon = new Array(5);
const accordeonActive = ref(0);
const setAccordeon = (index) => {
  accordeonActive.value = index;
};
</script>
<template>
  <section class="section">
    <div class="section__nav">
      <p class="section__nav-item active">Описание</p>
      <p class="section__nav-item">Характеристики</p>
      <p class="section__nav-item">Условия поставки</p>
      <p class="section__nav-item">Документы</p>
      <p class="section__nav-item">Аналоги</p>
      <p class="section__nav-item">Сопутствующие товары</p>
    </div>
    <div class="infoContainer">
      <div class="info__group">
        <h3 class="section__title">
          Технические храктеристики Корпуса металлического ЩУРв-3/48зо-1 36 УХЛ3
          IP31 MKM35-V-48-31-ZO
        </h3>
        <div class="section__description">
          <div
            v-for="(item, index) in description"
            :key="index"
            class="section__description-item"
          >
            <p class="item__type">Тип монтажа</p>
            <div class="line"></div>
            <p class="item__text">Встраиваемый</p>
          </div>
        </div>
      </div>
      <div class="info__group">
        <h3 class="section__title">
          Технические храктеристики Корпуса металлического ЩУРв-3/48зо-1 36 УХЛ3
          IP31 MKM35-V-48-31-ZO
        </h3>
        <div class="section__accordeon">
          <div
            v-on:click="setAccordeon(index)"
            :class="accordeonActive === index && 'active'"
            v-for="(item, index) in accordeon"
            :key="index"
            class="accordeon__item"
          >
            <div class="flex">
              <p class="accordeon__item-type">Материал:</p>
              <p class="accordeon__item-title">Листовая сталь</p>
              <div class="arrow"></div>
            </div>
            <div class="ul">
              <p class="accordeon__item-text">
                Свойство «Материал» для корпусов шкафов готовых:
              </p>
              <ul class="accordeon__item-list">
                <li class="item">
                  Сталь: прочный материал, устойчивый к механическим
                  воздействиям, но склонный к коррозии в условиях высокой
                  влажности или агрессивной среды. Сталь: прочный материал,
                  устойчивый к механическим воздействиям, но склонный к коррозии
                  в условиях высокой влажности или агрессивной среды.
                </li>
                <li class="item">
                  Нержавеющая сталь: материал, обладающий высокой коррозионной
                  стойкостью и прочностью, но более дорогой, чем обычная сталь.
                </li>
                <li class="item">
                  Сталь: прочный материал, устойчивый к механическим
                  воздействиям, но склонный к коррозии в условиях высокой
                  влажности или агрессивной среды. Сталь: прочный материал,
                  устойчивый к механическим воздействиям, но склонный к коррозии
                  в условиях высокой влажности или агрессивной среды.
                </li>
                <li class="item">
                  Нержавеющая сталь: материал, обладающий высокой коррозионной
                  стойкостью и прочностью, но более дорогой, чем обычная сталь.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="section__description">
          <div
            v-for="(item, index) in description"
            :key="index"
            class="section__description-item"
          >
            <p class="item__type">Тип монтажа <span>Что это?</span></p>
            <div class="line"></div>
            <p class="item__text">Встраиваемый</p>
          </div>
        </div>
      </div>

      <div class="info__group">
        <h3 class="section__title">
          Условия поставки выключателя нагрузки (мод. рубильник) 2П 80А 500В =S=
          EASY9 | EZ9S16280 Schneider Electric
        </h3>
        <div class="section__deliveryСonditions">
          <p>
            Доставим выключатель нагрузки (мод. рубильник) 2П 80А 500В =S= EASY9
            | EZ9S16280 Schneider Electric на следующий день после оплаты, по
            Москве и в радиусе 200 км от МКАД, в другие регионы РФ отгружаем
            транспортными компаниями.
          </p>
          <p>
            Доставим выключатель нагрузки (мод. рубильник) 2П 80А 500В =S= EASY9
            | EZ9S16280 Schneider Electric на следующий день после оплаты, по
            Москве и в радиусе 200 км от МКАД, в другие регионы РФ отгружаем
            транспортными компаниями.
          </p>
        </div>
      </div>

      <div class="info__group">
        <h3 class="section__title">Документы</h3>
        <div class="section__documents">
          <div
            v-for="(item, index) in documents"
            :key="index"
            class="section__documents-item"
          >
            <p class="title">Изображение сертификата</p>
            <p class="type">PNG</p>
          </div>
        </div>
      </div>

      <div class="info__group">
        <h3 class="section__title">Аналоги</h3>
        <table class="analogs">
          <tr v-for="(item, index) in documents" :key="index">
            <td><img src="/productPage/item.png" class="img" alt="" /></td>
            <td class="title">
              <a href=""
                >Кабель Stereo 2х0.35 BLUE LINE бухта (м) PROCONNECT
                01-6202-6</a
              >
            </td>
            <td class="amount">224 шт</td>
            <td class="price">121.22 ₽</td>
            <td class="input"><MountInput /></td>
            <td class="from">от 1 мес.</td>
          </tr>
        </table>
      </div>

      <div class="info__group">
        <h3 class="section__title">Сопутствующие товары</h3>
        <table class="analogs">
          <tr v-for="(item, index) in documents" :key="index">
            <td><img src="/productPage/item.png" class="img" alt="" /></td>
            <td class="title">
              <a href=""
                >Кабель Stereo 2х0.35 BLUE LINE бухта (м) PROCONNECT
                01-6202-6</a
              >
            </td>
            <td class="amount">224 шт</td>
            <td class="price">121.22 ₽</td>
            <td class="input"><MountInput /></td>
            <td class="from">от 1 мес.</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>
<style scoped>
.analogs {
  width: 100%;
  td {
    padding-top: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid #dce6ef;
  }
  tr {
    text-align: left;
    vertical-align: middle;
    cursor: pointer;
    .title,
    .date,
    .amount,
    .from {
      color: black;
      font-family: Lato;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }
    .price {
      color: black;
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
    }
    .img {
      width: 64px;
      height: 40px;
      object-fit: cover;
    }
    .title {
      a {
        text-decoration: none;
        color: var(--blue);
        &:hover,
        &:active {
          text-decoration: underline;
        }
      }
    }
    .imgCol {
      width: 317px;

      div {
        display: flex;
        gap: 12px;
      }
    }
    .date {
      width: 74px;
    }
    .amount {
      width: 70px;
    }
    .price {
      width: 110px;
    }
    .from {
      text-align: right;
    }
  }
}
.section__deliveryСonditions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-size: 16px;
    font-family: Lato;
    color: black;
    font-weight: 500;
  }
}
.section__accordeon {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}
.accordeon__item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 15px 16px;
  background: none;
  border: 1px solid #dce6ef;
  cursor: pointer;
  &:hover,
  &:active {
    background: #f2f4f7;
  }
  .flex {
    display: flex;
    align-items: center;
    gap: 4px;
    .accordeon__item-type,
    .accordeon__item-title {
      color: black;
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 25.6px */
      letter-spacing: -0.16px;
    }
    .accordeon__item-type {
      color: var(--grey);
    }
    .arrow {
      cursor: pointer;
      margin-left: auto;
      width: 24px;
      height: 24px;
      background: url("/productPage/accordeonArrow.svg");
    }
  }
  .ul {
    display: none;
    margin-top: 24px;
    .accordeon__item-text {
      margin-bottom: 16px;
      color: black;
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 25.6px */
      letter-spacing: -0.16px;
    }
    .accordeon__item-list {
      display: flex;
      gap: 8px;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 18px;
    }
    .item {
      color: black;
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      position: relative;
      list-style: none;
      &::before {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        left: -15px;
        position: absolute;
        background: black;
        border-radius: 50%;
        top: 6px;
      }
    }
  }
  &.active {
    background: #eef2f6;
    .ul {
      display: block;
    }
    .arrow {
      transform: rotate(180deg);
    }
  }
}
.section__nav {
  display: flex;
  position: sticky;
  z-index: 10;
  background: white;
  top: 57px;
  gap: 24px;
  margin-bottom: 56px;
  border-bottom: 1px solid #e2e2e2;
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
.infoContainer {
  max-width: 1056px;
  display: flex;
  flex-direction: column;
  gap: 56px;
}
.section__title {
  margin-bottom: 32px;
  color: black;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.24px;
}
.section__description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 4px;
  column-gap: 32px;
}
.section__description-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  .item__type {
    color: var(--grey);
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 240%; /* 33.6px */
    letter-spacing: -0.14px;
    span {
      cursor: pointer;
      color: var(--akcent);
      font-family: Lato;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      padding-bottom: 2px;
      border-bottom: 1px dashed rgba(1, 99, 204, 0.5);
      &:hover,
      &:active {
        opacity: 0.7;
      }
    }
  }
  .line {
    flex: 1;
    height: 1px;
    border-bottom: 1px dashed #c5c5c5;
  }
  .item__text {
    color: black;
    text-align: right;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 240%; /* 33.6px */
    letter-spacing: -0.14px;
  }
}
.section__documents {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  .section__documents-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 14px 16px;
    border: 1px solid #dce6ef;
    background: #fff;
    &:hover,
    &:active {
      opacity: 0.7;
    }
  }
  .title {
    color: var(--blue);
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .type {
    color: white;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    padding: 4px 8px;
    background: var(--akcent);
  }
}
</style>

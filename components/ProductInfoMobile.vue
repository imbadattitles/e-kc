<script setup>
import { ref } from "vue";
import useScreenSize from "./size";
const items = [0, 1, 2, 3];
const description = new Array(24);
const documents = new Array(4);
const accordeon = new Array(5);
const accordeonActive = ref(0);
const setAccordeon = (index) => {
  accordeonActive.value = index;
};
const { isDesktop } = useScreenSize();
const openNav = ref("Описание");
const clickNav = (nav) => {
  openNav.value = nav;
};
</script>
<template>
  <section class="section">
    <div class="infoContainer">
      <div
        id="1"
        :class="openNav === 'Описание' && 'active'"
        class="info__group"
      >
        <div v-on:click="clickNav('Описание')" class="info__nav">
          <h3 class="info__nav-title">Описание</h3>
          <span class="info__nav-arrow"></span>
        </div>
        <div class="info__block">
          <h3 class="section__title">
            Технические храктеристики Корпуса металлического ЩУРв-3/48зо-1 36
            УХЛ3 IP31 MKM35-V-48-31-ZO
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
      </div>
      <div
        id="2"
        :class="openNav === 'Характеристики' && 'active'"
        class="info__group"
      >
        <div v-on:click="clickNav('Характеристики')" class="info__nav">
          <h3 class="info__nav-title">Характеристики</h3>
          <span class="info__nav-arrow"></span>
        </div>
        <div class="info__block">
          <h3 class="section__title">
            Технические храктеристики Корпуса металлического ЩУРв-3/48зо-1 36
            УХЛ3 IP31 MKM35-V-48-31-ZO
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
                    устойчивый к механическим воздействиям, но склонный к
                    коррозии в условиях высокой влажности или агрессивной среды.
                  </li>
                  <li class="item">
                    Нержавеющая сталь: материал, обладающий высокой коррозионной
                    стойкостью и прочностью, но более дорогой, чем обычная
                    сталь.
                  </li>
                  <li class="item">
                    Сталь: прочный материал, устойчивый к механическим
                    воздействиям, но склонный к коррозии в условиях высокой
                    влажности или агрессивной среды. Сталь: прочный материал,
                    устойчивый к механическим воздействиям, но склонный к
                    коррозии в условиях высокой влажности или агрессивной среды.
                  </li>
                  <li class="item">
                    Нержавеющая сталь: материал, обладающий высокой коррозионной
                    стойкостью и прочностью, но более дорогой, чем обычная
                    сталь.
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
      </div>

      <div
        id="3"
        :class="openNav === 'Условия поставки' && 'active'"
        class="info__group"
      >
        <div v-on:click="clickNav('Условия поставки')" class="info__nav">
          <h3 class="info__nav-title">Условия поставка</h3>
          <span class="info__nav-arrow"></span>
        </div>
        <div class="info__block">
          <h3 class="section__title">
            Условия поставки выключателя нагрузки (мод. рубильник) 2П 80А 500В
            =S= EASY9 | EZ9S16280 Schneider Electric
          </h3>
          <div class="section__deliveryСonditions">
            <p>
              Доставим выключатель нагрузки (мод. рубильник) 2П 80А 500В =S=
              EASY9 | EZ9S16280 Schneider Electric на следующий день после
              оплаты, по Москве и в радиусе 200 км от МКАД, в другие регионы РФ
              отгружаем транспортными компаниями.
            </p>
            <p>
              Доставим выключатель нагрузки (мод. рубильник) 2П 80А 500В =S=
              EASY9 | EZ9S16280 Schneider Electric на следующий день после
              оплаты, по Москве и в радиусе 200 км от МКАД, в другие регионы РФ
              отгружаем транспортными компаниями.
            </p>
          </div>
        </div>
      </div>

      <div
        id="4"
        :class="openNav === 'Документы' && 'active'"
        class="info__group last-child"
      >
        <div v-on:click="clickNav('Документы')" class="info__nav">
          <h3 class="info__nav-title">Документы</h3>
          <span class="info__nav-arrow"></span>
        </div>
        <div class="info__block">
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
      </div>

      <div id="5" class="info__group items">
        <h3 class="section__title">Аналоги</h3>
        <div class="grid">
          <div v-for="(item, index) in items" :key="index" class="item">
            <div class="left">
              <img src="/productPage/item.png" class="item__img" />
              <div class="item__info-right">
                <span class="analog" />
                <span class="compare" />
                <span class="like" />
              </div>
            </div>
            <div class="right">
              <a class="item__title"
                >Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB</a
              >
              <div class="group">
                <div class="over_mobile">
                  <span class="name">Доступно:</span>
                  <span class="line" />
                  <p class="important">554978 шт.</p>
                </div>
                <div class="over_mobile">
                  <span class="name">Цена:</span>
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

      <div id="6" class="info__group items">
        <h3 class="section__title">Сопутствующие товары</h3>
        <div class="grid">
          <div v-for="(item, index) in items" :key="index" class="item">
            <div class="left">
              <img src="/productPage/item.png" class="item__img" />
              <div class="item__info-right">
                <span class="analog" />
                <span class="compare" />
                <span class="like" />
              </div>
            </div>
            <div class="right">
              <a class="item__title"
                >Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB</a
              >
              <div class="group">
                <div class="over_mobile">
                  <span class="name">Доступно:</span>
                  <span class="line" />
                  <p class="important">554978 шт.</p>
                </div>
                <div class="over_mobile">
                  <span class="name">Цена:</span>
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
  </section>
</template>
<style scoped>
.info__group {
  border-top: 1px solid #dce6ef;
  &.last-child {
    border-bottom: 1px solid #dce6ef;
  }
  &.active {
    padding-bottom: 16px;
    .info__block {
      display: block;
    }
    .info__nav-arrow {
      transform: rotate(180deg);
    }
  }
  &.items {
    margin-top: 40px;
    border: none;
    .section__title {
      padding: 0 15px;
    }
  }
}
.info__nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 15px;
  .info__nav-title {
    color: black;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  .info__nav-arrow {
    width: 24px;
    height: 24px;
    background: url("/productPage/info__nav-arrow.svg");
  }
}
.info__block {
  display: none;
  padding: 0 15px;
}
.section__deliveryСonditions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-size: 14px;
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

.section__title {
  margin-bottom: 8px;
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.24px;
}
.section__description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 4px;
  column-gap: 32px;
  @media (max-width: 524px) {
    grid-template-columns: 1fr;
  }
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
  @media (max-width: 524px) {
    grid-template-columns: 1fr;
  }
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
  .item {
    position: relative;
    height: auto;
    width: auto;
    gap: 16px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

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
  .item__info-right {
    display: flex;
    gap: 16px;
    span {
      width: 24px;
      height: 24px;
      background-size: contain;
      cursor: pointer;
      @media (max-width: 1024px) {
        width: 20px;
        height: 20px;
      }
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
    .analog {
      background-image: url("/searchResult/analog.svg");
    }
    .compare {
      background-image: url("/searchResult/compare.svg");
    }
    .like {
      background-image: url("/searchResult/like.svg");
      &::after {
        content: "";
        display: block;
        background-image: url("/searchResult/likeActive.svg");
        opacity: 0;
        width: 100%;
        height: 100%;
      }
      &.active {
        &::after {
          opacity: 1;
        }
      }
    }
  }
}
</style>

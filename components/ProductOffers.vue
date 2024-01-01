<script setup>
import useScreenSize from "./size";

const items = [0, 1, 2];
const { isDesktop } = useScreenSize();
</script>
<template>
  <div class="offers">
    <div class="group">
      <div class="group__top">
        <h4 class="group__title">Товарные предложения:</h4>
        <ProductIcons v-if="isDesktop" />
      </div>
      <table v-if="isDesktop" class="offerTable">
        <tr v-for="(item, index) in items" :key="index">
          <td class="title">
            <a href="/"
              >Кабель Stereo 2х0.35 BLUE LINE бухта (м) PROCONNECT 01-6202-6</a
            >
          </td>
          <td class="date">09.08.2023</td>
          <td class="amount">224 шт</td>
          <td class="price">121.22 ₽</td>
          <td class="input"><MountInput /></td>
          <td class="from">от 1 мес.</td>
        </tr>
      </table>
      <div v-if="!isDesktop" class="grid">
        <div v-for="(item, index) in items" :key="index" class="item">
          <div class="full">
            <a class="item__title"
              >Бокс EUROPA в нишу 12М непрозр.дверь серый | 12027 ABB</a
            >
            <div class="group">
              <div class="over_mobile">
                <span class="name">Доступно:</span>
                <span class="line" />
                <p class="important">36 шт.</p>
              </div>
              <div class="over_mobile">
                <span class="name">Доступно:</span>
                <span class="line" />
                <p class="important">от 1 дня.</p>
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
      <p class="more">Показать ещё</p>
    </div>
    <div v-if="isDesktop" class="group">
      <div class="group__top">
        <h4 class="group__title">Аналоги от <span>IEK (ИЕК)</span></h4>
      </div>
      <table v-if="isDesktop" class="analogs">
        <tr v-for="(item, index) in items" :key="index">
          <td class="imgCol">
            <div>
              <img src="/productPage/item.png" alt="" class="img" />
              <a href="/"
                >Кабель Stereo 2х0.35 BLUE LINE бухта (м) PROCONNECT 01-6202-6
              </a>
            </div>
          </td>
          <td class="amount">224 шт</td>
          <td class="price">121.22 ₽</td>
          <td class="input"><MountInput /></td>
          <td class="from">от 1 мес.</td>
        </tr>
      </table>
    </div>
    <div class="group">
      <div class="group__top">
        <h4 class="group__title">Аналоги</h4>
      </div>
      <table v-if="isDesktop" class="analogs">
        <tr v-for="(item, index) in items" :key="index">
          <td class="imgCol">
            <div>
              <img src="/productPage/item.png" alt="" class="img" />
              <a href="/"
                >Кабель Stereo 2х0.35 BLUE LINE бухта (м) PROCONNECT 01-6202-6
              </a>
            </div>
          </td>
          <td class="amount">224 шт</td>
          <td class="price">121.22 ₽</td>
          <td class="input"><MountInput /></td>
          <td class="from">от 1 мес.</td>
        </tr>
      </table>
      <div v-if="!isDesktop" class="grid">
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
      <p class="more">Показать ещё</p>
    </div>
    <div class="textBlock">
      <h4 class="textBlock__title">Малый текстовый блок</h4>
      <p class="textBlock__text">
        Равным образом укрепление и развитие структуры обеспечивает широкому
        кругу (специалистов) участие в формировании дальнейших направлений
        развития.
      </p>
      <p class="textBlock__text">
        Равным образом укрепление и развитие структуры обеспечивает широкому
        кругу (специалистов) участие в формировании дальнейших направлений
        развития.
      </p>
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
.textBlock {
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 1024px) {
    padding: 0 15px;
  }
  .textBlock__title {
    color: black;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
  }
  .textBlock__text {
    color: var(--grey);
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
}
.more {
  cursor: pointer;
  display: inline-block;
  margin-top: 16px;
  color: var(--blue);
  font-family: Lato;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  padding-bottom: 2px;
  border-bottom: 1px dashed rgba(23, 116, 216, 0.24);
  &:hover,
  &:active {
    opacity: 0.7;
  }
  @media (max-width: 1024px) {
    display: block;
    margin: 16px auto 0 auto;
    text-align: center;
    width: 85px;
  }
}
.analogs {
  width: 100%;
  tr {
    cursor: pointer;
    text-align: left;
    vertical-align: middle;

    td {
      padding-top: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #dce6ef;
    }
    .title,
    .date,
    .amount,
    .from {
      color: black;
      font-family: Lato;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
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
      min-width: 64px;
      height: 40px;
      object-fit: cover;
    }
    .imgCol {
      width: 370px;

      a {
        text-decoration: none;
        color: var(--blue);
        font-family: Lato;
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        &:hover,
        &:focus {
          color: #1461b4;
          text-decoration: underline;
        }
      }
      div {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
    .amount {
      min-width: 70px;
      text-align: left;
    }
    .price {
      min-width: 110px;
    }
    .from {
      min-width: 80px;
      text-align: right;
    }
  }
}
.offerTable {
  width: 100%;
  tr {
    cursor: pointer;
    text-align: left;
    vertical-align: middle;
    td {
      padding-top: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #dce6ef;
    }
    .title,
    .date,
    .amount,
    a,
    .from {
      text-decoration: none;
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
    .title {
      max-width: 267px;
    }
    .date {
      min-width: 110px;
      text-align: center;
    }
    .amount {
      min-width: 70px;
      text-align: left;
    }
    .price {
      min-width: 110px;
    }
    .from {
      min-width: 80px;
      text-align: right;
    }
  }
}

.group__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  @media (max-width: 1024px) {
    margin-bottom: 8px;
    padding: 0 15px;
  }
  .group__title {
    color: black;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
    span {
      color: var(--akcent);
    }
  }
}
.offers {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  max-width: 784px;
  @media (max-width: 1024px) {
    margin-top: 24px;
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
</style>

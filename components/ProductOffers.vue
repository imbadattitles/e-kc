<script setup>
const items = [0, 1, 2];
</script>
<template>
  <div class="offers">
    <div class="group">
      <div class="group__top">
        <h4 class="group__title">Товарные предложения:</h4>
        <div class="item__info-right">
          <span class="analog" />
          <span class="compare" />
          <span class="like" />
          <span class="share" />
        </div>
      </div>
      <table class="offerTable">
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
      <p class="more">Показать ещё</p>
    </div>
    <div class="group">
      <div class="group__top">
        <h4 class="group__title">Аналоги от <span>IEK (ИЕК)</span></h4>
      </div>
      <table class="analogs">
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
        <h4 class="group__title">Аналоги от <span>IEK (ИЕК)</span></h4>
      </div>
      <table class="analogs">
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
.textBlock {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
      width: 70px;
      text-align: center;
    }
    .price {
      width: 110px;
    }
    .from {
      width: 80px;
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
      width: 267px;
    }
    .date {
      width: 100px;
      text-align: center;
    }
    .amount {
      width: 100px;
      text-align: center;
    }
    .price {
      width: 130px;
    }
    .from {
      width: 80px;
      text-align: right;
    }
  }
}

.group__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
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
}
.item__info-right {
  display: flex;
  gap: 16px;
  span {
    width: 24px;
    height: 24px;
    background-size: contain;
    cursor: pointer;
  }
  .analog {
    background-image: url("/searchResult/analog.svg");
  }
  .compare {
    background-image: url("/searchResult/compare.svg");
  }
  .like {
    background-image: url("/searchResult/like.svg");
    &.active {
      background-image: url("/searchResult/likeActive.svg");
    }
  }
  .share {
    background-image: url("/searchResult/share.svg");
    margin-left: 8px;
  }
}
</style>

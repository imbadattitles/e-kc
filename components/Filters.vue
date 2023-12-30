<script>
import "~/assets/css/uislider.css";
import noUiSlider from "nouislider";
import useScreenSize from "./size";

export default {
  mounted() {
    const slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100,
      },
    });
  },
  props: {
    modalVisible: {
      type: Boolean,
      required: true,
    },
  },
};
const { isDesktop } = useScreenSize();
</script>
<template>
  <div :class="{ active: modalVisible }" class="bg">
    <div class="modal">
      <div class="close" v-on:click="$emit('update:modalVisible', false)"></div>
      <p class="modal__title">Фильтры</p>
      <div class="inputGroup">
        <label class="label" for="keys">Уточнить название до деталей</label>
        <textarea
          placeholder="Введите ключевые слова из названия товарного предложения"
          class="textarea"
          id="keys"
        />
      </div>

      <div class="inputGroup">
        <label class="label" for="keys">Цена, ₽</label>
        <div class="priceRate">
          <div class="priceRate__block">
            <span>от</span>
            <p>100</p>
          </div>
          <div class="priceRate__block">
            <span>до</span>
            <p>1 150 268</p>
          </div>
        </div>
        <div id="slider"></div>
      </div>

      <div class="inputGroup">
        <p class="label">Наличие <span class="cancel">Сбросить</span></p>
        <label class="checkboxLabel">
          <input type="checkbox" class="checkbox" />
          <div class="fake"></div>
          <p class="checkbox_text">Доступно на складе <span>3</span></p>
        </label>
        <label class="checkboxLabel">
          <input type="checkbox" class="checkbox" />
          <div class="fake"></div>
          <p class="checkbox_text">Под заказ <span>24</span></p>
        </label>
        <span class="more">Сбросить</span>
      </div>
      <div class="inputGroup">
        <p class="label">Бренд</p>
        <label class="checkboxLabel">
          <input type="checkbox" class="checkbox" />
          <div class="fake"></div>
          <p class="checkbox_text">Доступно на складе <span>3</span></p>
        </label>
        <label class="checkboxLabel">
          <input type="checkbox" class="checkbox" />
          <div class="fake"></div>
          <p class="checkbox_text">Под заказ <span>24</span></p>
        </label>
      </div>
      <div class="inputGroup">
        <p class="label">Radiobuttons</p>
        <label key="IEK" class="radio-item">
          <input class="radio" id="IEK" type="radio" name="radio" value="IEK" />
          <div class="fake__radio"></div>
          <p>IEK <span>24</span></p>
        </label>
        <label key="IEK" class="radio-item">
          <input
            class="radio"
            id="Shell"
            type="radio"
            name="radio"
            value="Shell"
          />
          <div class="fake__radio"></div>
          <p>Shell <span>3</span></p>
        </label>
      </div>
      <div class="result">
        <div class="resultLeft">
          <span>Найдено</span>
          <p>3 581 товаров</p>
        </div>
        <button class="btn">Сбросить</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg {
  position: fixed;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.64);
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  transition: 0.5s !important;

  &.active {
    display: flex;
    @media (max-width: 1024px) {
      transform: translate(0);
    }
  }
  @media (max-width: 1024px) {
    display: flex;
    transform: translateY(100%);
  }
}
.modal {
  position: relative;
  background: white;
  width: 400px;
  min-height: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-bottom: 100px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 524px) {
    width: 100vw;
  }
}
.close {
  cursor: pointer;
  background: url("/closeBlack.svg");
  width: 40px;
  height: 40px;
  position: absolute;
  top: 24px;
  right: 24px;
}
.modal__title {
  color: black;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.24px;
  margin-top: 24px;
  margin-bottom: 40px;
  margin-left: 24px;
}
.inputGroup {
  padding: 0px 24px 32px 24px;
}
.label {
  display: flex;
  align-items: center;
  gap: 6px;
  color: black;
  color: var(--Black, #000);
  /* Lato 16 Bold */
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  margin-bottom: 10px;
}
.cancel {
  display: block;
  cursor: pointer;
  color: var(--blue);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  padding-top: 3px;
}

.more {
  display: block;
  margin-top: 15px;
  cursor: pointer;
  color: var(--blue);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
}
.textarea {
  color: black;
  resize: none;
  padding: 16px;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  width: 100%;
  height: 100px;
  outline: none;
  border: 1px solid #dce6ef;
  background: #fff;
  &::placeholder {
    color: #939eaa;
  }
}
.priceRate {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #dce6ef;
}
.priceRate__block {
  background: white;
  padding: 2px 8px 6px 8px;
  &:nth-child(1) {
    border-right: 1px solid #dce6ef;
  }
  span {
    color: var(--grey);
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
  }
  p {
    color: var(--blue);
    font-family: Lato;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 28px */
    letter-spacing: -0.2px;
  }
}
.radio-item {
  align-items: center;
  gap: 8px;
  display: flex;
  gap: 8px;
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  span {
    color: #939eaa;
  }
}
.radio {
  display: none;
}
.fake__radio {
  position: relative;
  width: 32px;
  height: 32px;
  background: url("/radio.svg");
}
.fake__radio::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  background: url("/radio_active.svg");
  opacity: 0;
}
.radio:checked + .fake__radio:after {
  opacity: 1;
}
.checkbox_text {
  display: flex;
  gap: 8px;
  color: black;
  font-family: Lato;
  font-size: 16px;
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
  width: 32px;
  height: 32px;
  background: url("/checkBox.svg");
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
  width: 32px;
  height: 32px;
  opacity: 0;
  background: url("/checkBox_checked.svg");
}
.noUi-horizontal {
  height: 2px;
}
.noUi-target {
  border-radius: 100px;
  background: grey;
  box-shadow: none;
}
.noUi-handle {
  box-shadow: none !important;
  width: 10px !important;
  height: 10px !important;
  border: none !important;
  background: url("/handle.svg") !important;
}

.result {
  display: flex;
  position: fixed;
  bottom: 0;
  width: inherit;
  margin-top: auto;
  background: white;
  box-shadow: 0px -1px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 16px 24px;
  justify-content: space-between;
  .resultLeft {
    span {
      color: black;
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; /* 25.6px */
      letter-spacing: -0.16px;
    }
    p {
      color: var(--blue);
      font-family: Lato;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 28px */
      letter-spacing: -0.2px;
    }
  }
  .btn {
    border: none;
    cursor: pointer;
    padding: 11px 24px;
    background: #eef2f6;
    color: black;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
  }
}
</style>

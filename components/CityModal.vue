<script setup>
import { ref } from "vue";
const isInputFocused = ref(false);
const topItems = new Array(6);
const emit = defineEmits(["update:modalVisible"]);
const closeModal = () => {
  emit("update:modalVisible", false);
};
</script>

<template>
  <div class="bg">
    <div class="modal">
      <div class="close" v-on:click="closeModal"></div>
      <h5 class="modal__title">Выберите город</h5>
      <div :class="{ active: isInputFocused }" class="search">
        <input
          @focus="isInputFocused = true"
          @blur="isInputFocused = false"
          type="search"
          placeholder="Найти город"
          class="search__input"
        />
        <div class="searchResult">
          <p class="searchResult_item">
            Металлорукав Р3-Ц-15 d15мм без протяжки (уп.100м) Ruvinil
          </p>
          <p class="searchResult_item">
            Металлорукав Р3-Ц-15 d15мм без протяжки (уп.100м) Ruvinil
          </p>
        </div>
      </div>
      <div class="grid">
        <div class="grid-column primary">
          <p v-for="(item, index) in topItems" :key="index" class="grid__item">
            Санкт-Петербург
          </p>
        </div>
        <div class="grid-column">
          <p v-for="(item, index) in topItems" :key="index" class="grid__item">
            Санкт-Петербург
          </p>
        </div>
        <div class="grid-column">
          <p v-for="(item, index) in topItems" :key="index" class="grid__item">
            Санкт-Петербург
          </p>
        </div>
        <div class="grid-column">
          <p v-for="(item, index) in topItems" :key="index" class="grid__item">
            Санкт-Петербург
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.close {
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: url("/closeBlack.svg");
  background-size: contain;
  position: absolute;
  top: 16px;
  right: 16px;
}
.grid {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
  }
  .grid-column {
    display: flex;
    flex-direction: column;
    gap: 15px;
    &.primary {
      p {
        color: black;
      }
    }
  }
  .grid__item {
    cursor: pointer;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: -0.16px;
    color: var(--grey);
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
}
.bg {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.64);
  z-index: 100;
  @media (max-width: 1024px) {
    justify-content: flex-start;
    padding-top: 30px;
  }
}
.modal {
  position: relative;
  width: 870px;
  background: white;
  padding: 60px 60px 32px 60px;
  max-height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1024px) {
    padding: 40px 15px;
    width: 90vw;
  }
}
.modal__title {
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.24px;
  margin-bottom: 32px;
  @media (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
}
.search {
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  position: relative;
  z-index: 10;
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
  &.active {
    .search__input {
      background: #e6eef7;
    }
    .searchResult {
      display: flex;
    }
  }
  .searchResult {
    display: none;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 55px;
    background: #eef2f6;
    @media (max-width: 1024px) {
      top: 50px;
    }
    .searchResult_item {
      text-decoration: none;
      padding: 16px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--Black, #000);
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 240%; /* 38.4px */
      letter-spacing: -0.16px;
      border-bottom: 1px solid #dce6ef;
      @media (max-width: 1024px) {
        padding: 10px 15px;
        font-size: 13px;
        line-height: 140%;
      }
      &:last-child {
        border: none;
      }
    }
  }
}
.search__input {
  width: 100%;
  color: black;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  padding: 15px;
  display: block;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  outline: none;
  border: none;
  background: #eef2f6;
  -webkit-appearance: none !important;
  appearance: none !important;
  @media (max-width: 1024px) {
    padding: 14px 16px;
    font-size: 14px;
  }
  &::placeholder {
    color: black;
  }
  &::-ms-clear {
    display: none;
  }
}
</style>

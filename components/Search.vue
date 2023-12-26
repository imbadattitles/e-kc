<script setup>
import useScreenSize from "./size";

const isInputFocused = ref(false);
const { isDesktop } = useScreenSize();
</script>
<template>
  <div :class="{ active: isInputFocused }" class="search">
    <input
      @focus="isInputFocused = true"
      @blur="isInputFocused = false"
      type="search"
      :placeholder="
        isDesktop
          ? 'Умный поиск по названию, артикулу, свойству, бренду'
          : 'Умный поиск по названию...'
      "
      class="search__input"
    />
    <span class="search__icon" />
    <div class="searchResult">
      <a href="/" class="searchResult_item"
        >Металлорукав Р3-Ц-15 d15мм без протяжки (уп.100м) Ruvinil
        <span class="delete"></span
      ></a>
      <a href="/" class="searchResult_item"
        >Металлорукав Р3-Ц-15 d15мм без протяжки (уп.100м) Ruvinil<span
          class="delete"
        ></span
      ></a>
    </div>
  </div>
</template>
<style scoped>
.search {
  width: 90%;
  display: flex;
  position: relative;
  z-index: 10;
  @media (max-width: 1024px) {
    width: 100%;
  }
  &.active {
    outline: 5px solid white;
    @media (max-width: 1024px) {
      outline: 3px solid white;
    }
    .search__input {
      background: #eef2f6;
    }
    .searchResult {
      display: flex;
    }
  }
  .searchResult {
    display: none;
    flex-direction: column;
    position: absolute;
    width: calc(100% + 10px);
    top: 55px;
    left: -5px;
    background: white;
    @media (max-width: 1024px) {
      width: calc(100% + 3px);
      top: 50px;
      left: -3px;
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

      .delete {
        width: 24px;
        height: 24px;
        background: url("/header/delete.svg");
        display: none;
      }
      &:hover {
        .delete {
          display: block;
        }
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
  padding: 15px 24px;
  display: block;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: -0.16px;
  outline: none;
  border: none;
  border-bottom: 3px solid #1774d8;
  -webkit-appearance: none !important;
  appearance: none !important;
  @media (max-width: 1024px) {
    padding: 14px 16px;
    font-size: 14px;
  }
  &::placeholder {
    color: #939eaa;
  }
  &::-ms-clear {
    display: none;
  }
}

.search__icon {
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-image: url("/header/search__icon.svg");
  position: absolute;
  right: 24px;
  top: 12px;
  background-size: contain;
  @media (max-width: 1024px) {
    right: 16px;
    top: 14px;
    width: 24px;
    height: 24px;
  }
  &:hover,
  :focus {
    opacity: 0.8;
  }
}
</style>

<template>
  <header class="header">
    <div class="row">
      <div
        v-on:click="clickHeader"
        :class="!menuVisible ? 'burger' : 'close'"
      ></div>
      <a href="/"
        ><img src="/header/logoMobile.svg" alt="logo" class="logo"
      /></a>
      <a href="/">
        <div class="cart"><p class="mount">6</p></div>
      </a>
    </div>
    <div class="search">
      <Search />
    </div>
  </header>
  <div class="menuBg" v-if="menuVisible">
    <div class="menu">
      <div class="menuRow city">
        <div class="icon"></div>
        <p>Москва</p>
        <div class="arrow"></div>
      </div>
      <div v-if="!catalogVisible">
        <div v-on:click="clickCatalog" class="menuRow">
          <p>Каталог товаров</p>
          <div class="arrow"></div>
        </div>
        <a class="menuRow">
          <p>О нас</p>
          <div class="arrow"></div>
        </a>
        <a class="menuRow">
          <p>Производители</p>
          <div class="arrow"></div>
        </a>
        <a class="menuRow">
          <p>Информация</p>
          <div class="arrow"></div>
        </a>
        <a class="menuRow">
          <p>Оплата</p>
          <div class="arrow"></div>
        </a>
        <a class="menuRow">
          <p>Доставка</p>
          <div class="arrow"></div>
        </a>
        <a class="menuRow">
          <p>Контакты</p>
          <div class="arrow"></div>
        </a>
      </div>

      <div v-else>
        <div v-on:click="clickCatalog" class="menuRow active">
          <p>Назад</p>
          <div class="arrow"></div>
        </div>
        <a class="menuRow">
          <p>Все категории</p>
          <div class="arrow"></div>
        </a>
        <a class="menuRow">
          <p>Все категории</p>
          <div class="arrow"></div>
        </a>
        <a class="menuRow">
          <p>Все категории</p>
          <div class="arrow"></div>
        </a>
        <a class="menuRow">
          <p>Все категории</p>
          <div class="arrow"></div>
        </a>
        <a class="menuRow">
          <p>Все категории</p>
          <div class="arrow"></div>
        </a>
        <a class="menuRow">
          <p>Все категории</p>
          <div class="arrow"></div>
        </a>
      </div>

      <div v-on:click="openModal" class="menuRow login">
        <div class="icon"></div>
        <p>Вход</p>
        <div class="arrow"></div>
      </div>
      <div class="menuRow like">
        <div class="icon"></div>
        <p>Избранное <span class="mount">1</span></p>
        <div class="arrow"></div>
      </div>
      <div class="menuRow compare">
        <div class="icon"></div>
        <p>Сравнить</p>
        <div class="arrow"></div>
      </div>
    </div>
  </div>
  <Login v-if="modalVisible" />
</template>
<style scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background: linear-gradient(180deg, #00acce 0%, #0062cb 100%);
  padding: 16px 16px 0px 16px;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.burger {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: url("/header/burgerMobile.svg");
}
.close {
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: url("/header/burgerClose.svg");
}
.cart {
  position: relative;
  background-size: contain;
  width: 28px;
  height: 28px;
  background-image: url("/header/cart.svg");
  .mount {
    position: absolute;
    top: -7px;
    right: 1px;
    color: white;
    background: var(--red);
    font-family: Lato;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    border-radius: 50px;
    line-height: 140%;
    display: inline-flex;
    height: 18px;
    min-width: 17px;
    padding: 2px 4px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
}
.menuBg {
  position: fixed;
  top: 113px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.64);
}
.menu {
  overflow-y: visible !important;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  max-height: calc(100vh - 113px);
  overflow-y: auto !important;
}
.menuRow {
  padding: 15px 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 1px solid #dce6ef;
  &.active {
    background: var(--akcent);
    p {
      color: white;
    }
    .arrow {
      background: url("/header/arrowMobileWhite.svg");
    }
  }

  p {
    color: black;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
  }
  .arrow {
    margin: 0;
    margin-left: auto;
    width: 24px;
    height: 24px;
    background-size: contain;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background: url("/header/arrowMobile.svg");
  }
  .icon {
    background-repeat: no-repeat !important;
    background-size: contain !important;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  &.city {
    p {
      color: var(--akcent);
      padding-bottom: 1px;
      border-bottom: 1px dashed rgba(23, 116, 216, 0.64);
    }
    .icon {
      background: url("/header/cityMobile.svg");
    }
  }
  &.login {
    background: var(--akcent);
    p {
      color: white;
    }
    .icon {
      background: url("/header/loginMobile.svg");
    }
    .arrow {
      background: url("/header/arrowMobileWhite.svg");
    }
  }
  &.like {
    .mount {
      margin-left: 3px;
      color: white;
      background: var(--red);
      font-family: Lato;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      border-radius: 50px;
      line-height: 100%;
      display: inline-flex;
      height: 18px;
      min-width: 17px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
    .icon {
      background: url("/header/likeMobile.svg");
    }
  }
  &.compare {
    .icon {
      background: url("/header/compareMobile.svg");
    }
  }
}
</style>
<script setup>
import { ref } from "vue";
const openModal = () => {
  modalVisible.value = true;
};
const modalVisible = ref(false);
const menuVisible = ref(false);
const clickHeader = () => {
  menuVisible.value = !menuVisible.value;
};
const catalogVisible = ref(false);
const clickCatalog = () => {
  catalogVisible.value = !catalogVisible.value;
};
</script>

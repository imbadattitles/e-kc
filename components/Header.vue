<template>
  <Login v-model:modalVisible="modalVisible" v-if="modalVisible" />
  <header :class="{ scroll: isScrolling }" class="header">
    <div class="container">
      <div class="header__firstRow">
        <div class="header__city">
          <span class="marker" />
          <p class="text">Москва</p>
        </div>
        <div class="header__firstRow-right">
          <nav class="nav">
            <p class="nav__item">Проценка</p>
            <p class="nav__item">Бренды</p>
            <p class="nav__item">Оплата</p>
            <p class="nav__item">Доставка</p>
            <p class="nav__item">Контакты</p>
          </nav>
          <div class="contacts">
            <div class="contacts__item">
              <span class="phone" />
              <p>+7 (495) 777-83-45</p>
            </div>
            <div class="contacts__item">
              <span class="WhatsApp" />
              <p>WhatsApp</p>
            </div>
            <div class="contacts__item">
              <span class="Email" />
              <p>zakaz@e-kc.ru</p>
            </div>
          </div>
        </div>
      </div>
      <div class="header__secondRow">
        <a><img src="/header/logo.svg" alt="e-kc.ru" class="logo" /></a>
        <div class="flexGroup">
          <div class="catalog__btn">
            <span class="catalog__burger" />
            <p>Каталог</p>
          </div>
          <div :class="{ active: isInputFocused }" class="search">
            <input
              @focus="isInputFocused = true"
              @blur="isInputFocused = false"
              type="search"
              placeholder="Умный поиск по названию, артикулу, свойству, бренду"
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
        </div>

        <div class="header__menu">
          <div class="menu__item">
            <span class="like" />
            <p class="mount">1</p>
            <p class="menu__item-text">Избр.</p>
          </div>
          <div class="menu__item">
            <span class="compare" />
            <p class="menu__item-text">Сравн.</p>
          </div>
          <div v-on:click="openModal" class="menu__item">
            <span class="login" />
            <p class="menu__item-text">Вход</p>
          </div>
          <div class="menu__item">
            <span class="cart" />
            <p class="mount">16</p>
            <p class="menu__item-text">Корзина</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const isInputFocused = ref(false);
const isScrolling = ref(false);
const modalVisible = ref(false);
const openModal = () => {
  modalVisible.value = true;
};

const handleScroll = () => {
  isScrolling.value = window.pageYOffset > 200;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 10;
  transition: 0.5s !important;
  width: 100%;
  background: linear-gradient(180deg, #00acce 0%, #0062cb 100%);
  &.scroll {
    top: -47px;
  }
}
.header__firstRow {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
}
.header__city {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  &:hover,
  :focus {
    opacity: 0.7;
  }
  .marker {
    width: 24px;
    height: 24px;
    background-image: url("/header/marker.svg");
  }
  .text {
    color: white;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    position: relative;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-image: url("/header/line.svg");
    }
  }
}

.header__firstRow-right {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav {
  display: flex;
  gap: 16px;
  .nav__item {
    cursor: pointer;
    opacity: 0.8;
    color: white;
    font-family: Lato;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
    letter-spacing: -0.12px;
    text-transform: uppercase;
    &:hover,
    :focus {
      opacity: 1;
    }
  }
}

.contacts {
  display: flex;
  gap: 16px;

  .contacts__item {
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 25.6px */
    letter-spacing: -0.16px;
    &:first-child {
      font-size: 16px;
    }
  }

  .phone {
    width: 24px;
    height: 24px;
    background-image: url("/header/phone.svg");
  }
  .WhatsApp {
    width: 24px;
    height: 24px;
    background-image: url("/header/WhatsApp.svg");
  }
  .Email {
    width: 24px;
    height: 24px;
    background-image: url("/header/Email.svg");
  }
}

.header__secondRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flexGroup {
  display: flex;
  width: 1050px;
}

.catalog__btn {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.24);
  padding: 15px 22px;
  gap: 12px;
  color: white;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.16px;
  .catalog__burger {
    width: 24px;
    height: 24px;
    background-image: url("/header/catalog__burger.svg");
  }
}

.search {
  width: 90%;
  display: flex;
  position: relative;
  z-index: 10;
  &.active {
    outline: 5px solid white;
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
  &:hover,
  :focus {
    opacity: 0.8;
  }
}

.header__menu {
  display: flex;
  gap: 24px;
  .menu__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover,
    :focus {
      opacity: 0.8;
    }
    .mount {
      position: absolute;
      top: 0;
      right: 0;
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
  .menu__item-text {
    color: white;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }

  .like {
    width: 24px;
    height: 24px;
    background-image: url("/header/like.svg");
  }
  .compare {
    width: 24px;
    height: 24px;
    background-image: url("/header/compare.svg");
  }
  .login {
    width: 24px;
    height: 24px;
    background-image: url("/header/login.svg");
  }
  .cart {
    width: 24px;
    height: 24px;
    background-image: url("/header/cart.svg");
  }
}
</style>
